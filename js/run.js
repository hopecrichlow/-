let run = function($rootScope) {

  $rootScope.$on('$stateChangeSuccess', function (event, data) {
    $(document).foundation();
  });

};

run.$inject = ['$rootScope'];

export default run;