var qs = require('qs');

module.exports = function(Controller, AuthController, UserService, Exceptions, injector, config, passport) {
  var GoogleController = Controller.extend({
    route          : '[GET,POST] /auth/google/:action/?',
    restfulRouting : false,

    setup: function() {
      passport.use(config['clever-auth-google'], this.callback('googleLogin'));
      return this._super.apply(this, arguments);
    },

    googleLogin: function(googleId, user, done) {
      UserService.findOrCreate({
        googleId  : googleId,
        email     : user.emails[0].value,
        lastName  : user.name.familyName,
        firstName : user.name.givenName,
      })
      .then(done)
      .catch(function(error) {
        done(new Exceptions.AuthenticationError('Unable to authenticate google user due to: ' + error));
      });
    }
  },
  {
    signInAction: function () {
      var params = {
        scope           : 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        display         : 'popup',
        'response_type' : 'code',
        'client_id'     : config['clever-auth-google'].clientID,
        'redirect_uri'  : config['clever-auth-google'].redirectURL,
      };

      this.send({ url: 'https://accounts.google.com/o/oauth2/auth?' + qs.stringify(params)}, 200);
    },

    returnAction: function () {
      passport.authenticate('google', this.proxy(AuthController.authenticate, null))(this.req, this.res, this.next);
    }
  });

  return GoogleController;
};
