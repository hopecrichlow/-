import angular from 'angular';
import '../app-core/index';

/////** Import Controllers, Services, and Directives **/////
// import ... from './controllers/...';
import PortfolioController from './controllers/portfolio.controller';
// import ... from './services/...';
// import ... from './directives/...';

angular
  .module('app.default', ['app.core'])
  /////** Load Controllers, Services, and Directives **/////
  // .controller('...', ...)
  .controller('PortfolioController', PortfolioController)
  // .service('...', ...)
  // .directive('...', ...)
;
  