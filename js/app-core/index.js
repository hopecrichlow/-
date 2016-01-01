import angular from 'angular';
import 'angular-ui-router';

/////** Import Constants and Config **/////
// import ... from './constants/...';
import config from './config';


angular
  .module('app.core', ['ui.router'])  
  /////** Load Constants and Config **/////
  // .constant('...', ...)
  .config(config)
;