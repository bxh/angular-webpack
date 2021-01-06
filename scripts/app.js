import angular from 'angular';
import Hero from './models/hero';
import heroDetail from './components/heroDetail';
import moment from 'moment';

angular.module('heroApp', [heroDetail]).controller('mainCtrl', function MainCtrl() {
  this.heroes = [
    new Hero('Spider Man'),
    new Hero('Wonder Woman'),
    new Hero('Batman'),
    new Hero('Mario'),
  ];

  this.time = moment().format();
});

export default 'heroApp';