import angular from 'angular';
import template from './heroDetail.html';
import './heroDetail.css';

const module = angular.module('heroApp:heroDetail').component('heroDetail', {
	template: template,
	bindings: {
	  hero: '='
	}
});

export default module.name;