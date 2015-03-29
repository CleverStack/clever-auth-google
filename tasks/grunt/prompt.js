var fs            = require('fs')
  , path          = require('path')
  , underscore    = require('underscore')
  , defaultConfig = require(path.join(__dirname, '..', '..', 'config', 'default.json'))
  , configFile    = null
  , config        = {};

module.exports    = {
  config: {
    authGoogleConfigPrompt: {
      options: {
        questions: [
          {
            type    : 'list',
            config  : 'authGoogleConfig.environment',
            message : 'What environment is this configuration for?',
            choices : [
              { name: 'LOCAL' },
              { name: 'TEST' },
              { name: 'DEV' },
              { name: 'STAG' },
              { name: 'PROD' }
            ],
            default : process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'LOCAL',
            filter  : function(env) {
              underscore.extend(config, defaultConfig);

              configFile = path.resolve(path.join(process.cwd(), 'config', env.toLowerCase() + '.json'));

              if (fs.existsSync(configFile)) {
                underscore.extend(config, require(configFile));
                
                Object.keys(defaultConfig['clever-auth-google']).forEach(function(key) {
                  if (typeof config['clever-auth-google'][key] === 'undefined') {
                    config['clever-auth-google'][key] = defaultConfig['clever-auth-google'][key];
                  }
                });
              }

              return true;
            }
          },
          {
            type    : 'input',
            config  : 'authGoogleConfig.clientID',
            message : 'Github clientID',
            default : function() {
              return config['clever-auth-google'].clientID || '';
            }
          },
          {
            type    : 'input',
            config  : 'authGoogleConfig.clientSecret',
            message : 'Github clientSecret',
            default : function() {
              return config['clever-auth-google'].clientSecret || '';
            }
          },
          {
            type    : 'input',
            config  : 'authGoogleConfig.callbackURL',
            message : 'Github callbackURL',
            default : function() {
              return config['clever-auth-google'].callbackURL || 'http://localhost:8080/auth/google/return';
            }
          }
        ]
      }
    }
  },
  register: function(grunt) {
    grunt.loadNpmTasks('grunt-prompt');
    
    grunt.registerTask('prompt:cleverAuthGoogleConfig', ['prompt:authGoogleConfigPrompt', 'createCleverAuthGoogleConfig']);
    grunt.registerTask('createCleverAuthGoogleConfig', 'Adds the config for cleverAuth to the designated environment', function createCleverAuthGoogleConfig() {
      var conf = grunt.config('authGoogleConfig');

      delete conf.environment;

      config['clever-auth-google'] = underscore.extend(config['clever-auth-google'], conf);

      if (config['clever-auth-google'].store !== 'redis') {
        delete config['clever-auth-google'].redis;
      }

      if (config['clever-auth-google'].store !== 'memcache') {
        delete config['clever-auth-google'].memcache;
      }

      fs.writeFileSync(configFile, JSON.stringify(config, null, '  '));
    });
  }
};
