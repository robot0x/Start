
import HomeController from './controllers/HomeController';
import TodoFactory from './services/TodoFactory';
import autoFocus from './directives/autoFocus';
import config from './config';

import Start from './lib/index';

angular.module('Todo', ['ui.router', 'ngResource'])	
	.config(config)
	.controller('HomeController', HomeController)
	.service('TodoFactory', TodoFactory)
	.directive('autoFocus', autoFocus.directiveFactory);