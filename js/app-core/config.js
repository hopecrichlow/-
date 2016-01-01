let config = function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  // If no route matches, go to home route
  $urlRouterProvider.otherwise('/');

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
    url: '/',
    templateUrl: 'templates/tpl-app/home.tpl.html'
  })
  .state('root.about', {
    url: '/about',
    templateUrl: 'templates/tpl-app/about.tpl.html'
  })
  .state('root.portfolio', {
    url: '/portfolio',
    controller: 'PortfolioController as vm',
    templateUrl: 'templates/tpl-app/portfolio.tpl.html'
  })
  .state('root.contact', {
    url: '/contact',
    templateUrl: 'templates/tpl-app/contact.tpl.html'
  })
  .state('root.faq', {
    url: '/faq',
    templateUrl: 'templates/tpl-app/faq.tpl.html'
  });
  /////** Add new .states here **/////

  // Allows the use of HTML5 stuff (Will help remove hashtags from routes)
  $locationProvider.html5Mode(true);
};

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default config;