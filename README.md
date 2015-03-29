CleverStack Google Authentication Module
====================
[![NPM version](https://badge.fury.io/js/clever-auth-google.png)](http://badge.fury.io/js/clever-auth-google) [![GitHub version](https://badge.fury.io/gh/cleverstack%2Fclever-auth-google.png)](http://badge.fury.io/gh/cleverstack%2Fclever-auth-google) [![Dependency Status](https://david-dm.org/CleverStack/clever-auth-google.png)](https://david-dm.org/CleverStack/clever-auth-google) [![devDependency Status](https://david-dm.org/CleverStack/clever-auth-google/dev-status.png)](https://david-dm.org/CleverStack/clever-auth-google#info=devDependencies) [![Code Climate](https://codeclimate.com/github/CleverStack/clever-auth-google.png)](https://codeclimate.com/github/CleverStack/clever-auth-google) [![Build Status](https://secure.travis-ci.org/CleverStack/clever-auth-google.png?branch=master)](https://travis-ci.org/CleverStack/clever-auth-google) [![Coverage](https://codeclimate.com/github/CleverStack/clever-auth-google/coverage.png)](https://codeclimate.com/github/CleverStack/clever-auth-google) [![NPM downloads](http://img.shields.io/npm/dm/clever-auth-google.png)](https://www.npmjs.org/package/clever-auth-google) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![Join the chat at https://gitter.im/CleverStack/cleverstack-cli](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CleverStack/cleverstack-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![CleverStack NodeJS Authentication Module](http://cleverstack.github.io/assets/img/logos/node-seed-logo-clean.png "CleverStack NodeJS Authentication Module")
<blockquote>
This CleverStack Module provides Google Authentication for the clever-auth module.
</blockquote>

## Highlights
* Works with both the `clever-orm` and the `clever-odm` modules.
* Easy to use configuration prompts, `grunt prompt:cleverAuthGoogleConfig`.
* Easily installed using the CleverStack CLI, `clever install clever-auth-google`.
* Use with the `clever-users` module - OR - with any other module that exports the `UserController`, `UserService` and `UserModel` resources/classes.
* Other Authentication Strategies: Github, LinkedIn, Facebook, Twitter and Dropbox - as well as local authentication out of the box.


## Prerequisites
  1. You must be using [cleverstack-cli](https://github.com/CleverStack/cleverstack-cli) version [1.2.2](https://github.com/CleverStack/cleverstack-cli/releases/tag/1.2.2) or newer.
  2. Your project must be using [node-seed](https://github.com/CleverStack/node-seed) version [1.2.1](https://github.com/CleverStack/node-seed/releases/tag/1.2.1) or newer.
  3. You must either install the [clever-users](https://github.com/CleverStack/clever-users) module, or any other module that provides the `UserController`, `UserService` and `UserModel` resources/classes.
  4. You must have [clever-auth](https://github.com/CleverStack/clever-auth) version [1.2.3](https://github.com/CleverStack/clever-auth/releases/tag/1.2.3) or newer.


## Installation

### Using CLI
1. Run `clever install clever-auth-google` and follow the prompts
2. Run `clever serve` to start your application.

### Without CLI
1. Clone this repo (or untar it there) into your modules folder (ie `modules/clever-auth-google`)
3. Run `grunt prompt:cleverAuthGoogleConfig` and fill in your configuration options.
5. Run `grunt db` to rebase and seed the data.
6. Run `grunt server` to start your application.



## Configuration

### Files
For more information about how modules (including clever-auth-google) are configured, please see the [cleverstack.io](http://cleverstack.io/documentation/backend) Documentation sections, [Backend Configuration](http://localhost:9001/documentation/backend/#configuration) and [Module Configuration](http://localhost:9001/documentation/backend/modules/#configuration) for more information.

### Grunt prompts
1. `grunt prompt:cleverAuthGoogleConfig` can be used to generate your config for any environment you want.

### Options

#### `clientID` - your google oauth2 client id.
```
{
  "clever-auth-google": {
    "clientID"     : "486f044b3383cdc29388"
  }
}
```

#### `clientSecret` - your google oauth2 client secret.
```
{
  "clever-auth-google": {
    "clientSecret" : "f28246b75d34625decc9d835a15107a51f1e8225"
  }
}
```

#### `callbackURL` - the callback (return) url google will return you to.
```
{
  "clever-auth-google": {
    "callbackURL"  : "http://localhost:8080/auth/google/return",
  }
}
```

## Documentation

See [cleverstack.io](http://cleverstack.io/documentation/#backend) for more detailed information on the Node Seed or visit the [Getting Started Guide](http://cleverstack.io/getting-started/) if you have never used CleverStack before.

## License

See our [LICENSE](https://github.com/CleverStack/clever-auth-google/blob/master/LICENSE)
