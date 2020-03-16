angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page8',
    views: {
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page9',
    views: {
      'tab6': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.EditProfile', {
    url: '/page10',
    views: {
      'tab8': {
        templateUrl: 'templates/EditProfile.html',
        controller: 'EditProfileCtrl'
      }
    }
  })

  .state('tabsController.forYou', {
    url: '/page11',
    views: {
      'tab7': {
        templateUrl: 'templates/forYou.html',
        controller: 'forYouCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('')


});