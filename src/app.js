import 'angular-material/angular-material.css';
import angular from 'angular';
import angularanimate from 'angular-animate';
import angulararia from 'angular-aria';
import angularmaterial from 'angular-material';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular.module('app', [
    angularanimate, angulararia, angularmaterial, uirouter, home
]).config(routing);
