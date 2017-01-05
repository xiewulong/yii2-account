/*!
 * account
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2016/8/1
 * since: 0.0.1
 */

// styles
import 'normalize.css';
import '../scss/account.scss';

import Vue from 'vue';
import Vuex from 'vuex';
import {
	account,
	logo,
} from './components';

Vue.use(Vuex);

window.App = class App {

	constructor(state, el = '#app') {
		this.state = state;
		this.el = el;

		this.mount();
	}

	mount() {
		this.vm = new Vue({
			el: this.el,
			data: this.state,
			components: {
				account,
				logo,
			},
		});
	}

}
