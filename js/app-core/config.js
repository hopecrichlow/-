let config = function($stateProvider, $urlRouterProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/home');

  // Set up some States
  $stateProvider
    // Main Root State
    // It is an abstract state because we want a nice way to 
    // manage our layout that will be on all child states
  .state('root', {
    abstract: true,
    templateUrl: 'templates/tpl-layout/layout.tpl.html'
  }) 
  .state('root.home', {
    url: '/home',
    // controller: '... as vm',
    templateUrl: 'templates/tpl-app/home.tpl.html'
  });
  /////** Add new .states here **/////
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;