/*!
 * account
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/08/01
 * since: 0.0.1
 */
import Vue from 'vue';
// import Vuex from 'vuex';
import FastClick from 'fastclick';

import '../scss/account.scss';
import components from './components';

window.App = class App {

	constructor(state = {}, el = '#app') {
		this.state = state;
		this.el = el;

		this.mount();
	}

	mount() {
		this.vm = new Vue({
			el: this.el,
			data: this.state,
			components,
		});
	}

};

FastClick.attach(document.body);
