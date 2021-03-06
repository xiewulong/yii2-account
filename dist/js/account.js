/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/account.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * account
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * xiewulong <xiewulong@vip.qq.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * create: 2016/08/01
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * since: 0.0.1
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import Vuex from 'vuex';
	
	
	var _vue = __webpack_require__(/*! vue */ 28);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _fastclick = __webpack_require__(/*! fastclick */ 8);
	
	var _fastclick2 = _interopRequireDefault(_fastclick);
	
	__webpack_require__(/*! ../scss/account.scss */ 1);
	
	var _components = __webpack_require__(/*! ./components */ 27);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	window.App = function () {
		function App() {
			var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#app';
	
			_classCallCheck(this, App);
	
			this.state = state;
			this.el = el;
	
			this.mount();
		}
	
		_createClass(App, [{
			key: 'mount',
			value: function mount() {
				this.vm = new _vue2.default({
					el: this.el,
					data: this.state,
					components: _components2.default
				});
			}
		}]);
	
		return App;
	}();
	
	_fastclick2.default.attach(document.body);

/***/ },
/* 1 */
/*!*********************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/scss/account.scss ***!
  \*********************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-0be731d4&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/accountHeader.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-360a4efe&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/tabPage.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-6757a0ce&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/signup.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-68eeb8e7&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/account.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-82633eba&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/login.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!./~/.0.26.1@css-loader?sourceMap!./~/.10.0.2@vue-loader/lib/style-rewriter.js?id=data-v-86c0dde0&scoped=true!./~/.1.2.2@postcss-loader!./~/.4.1.1@sass-loader?sourceMap!./~/.10.0.2@vue-loader/lib/selector.js?type=styles&index=0!./vendor/xiewulong/yii2-account/js/components/pair.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/*!*********************************************!*\
  !*** ./~/.1.0.6@fastclick/lib/fastclick.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';
	
		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */
	
		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/
	
	
		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;
	
			options = options || {};
	
			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;
	
	
			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;
	
	
			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;
	
	
			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;
	
	
			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;
	
	
			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;
	
	
			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;
	
	
			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;
	
			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;
	
			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;
	
			if (FastClick.notNeeded(layer)) {
				return;
			}
	
			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}
	
	
			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}
	
			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}
	
			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);
	
			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};
	
				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}
	
			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {
	
				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}
	
		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
	
		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
	
	
		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
	
	
		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);
	
		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
	
		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {
	
			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}
	
				break;
			case 'input':
	
				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}
	
				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}
	
			return (/\bneedsclick\b/).test(target.className);
		};
	
	
		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}
	
				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};
	
	
		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;
	
			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}
	
			touch = event.changedTouches[0];
	
			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};
	
		FastClick.prototype.determineEventType = function(targetElement) {
	
			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}
	
			return 'click';
		};
	
	
		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;
	
			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};
	
	
		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;
	
			scrollParent = targetElement.fastClickScrollParent;
	
			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}
	
					parentElement = parentElement.parentElement;
				} while (parentElement);
			}
	
			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};
	
	
		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	
			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}
	
			return eventTarget;
		};
	
	
		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;
	
			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}
	
			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];
	
			if (deviceIsIOS) {
	
				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}
	
				if (!deviceIsIOS4) {
	
					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}
	
					this.lastTouchIdentifier = touch.identifier;
	
					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}
	
			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;
	
			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}
	
			return true;
		};
	
	
		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;
	
			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}
	
			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}
	
			return true;
		};
	
	
		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {
	
			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}
	
			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}
	
			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};
	
	
		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
	
			if (!this.trackingClick) {
				return true;
			}
	
			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}
	
			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}
	
			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;
	
			this.lastClickTime = event.timeStamp;
	
			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;
	
			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];
	
				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}
	
			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}
	
					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {
	
				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}
	
				this.focus(targetElement);
				this.sendClick(targetElement, event);
	
				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}
	
				return false;
			}
	
			if (deviceIsIOS && !deviceIsIOS4) {
	
				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}
	
			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}
	
			return false;
		};
	
	
		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};
	
	
		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {
	
			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}
	
			if (event.forwardedTouchEvent) {
				return true;
			}
	
			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}
	
			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
	
				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {
	
					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}
	
				// Cancel the event
				event.stopPropagation();
				event.preventDefault();
	
				return false;
			}
	
			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};
	
	
		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;
	
			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}
	
			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}
	
			permitted = this.onMouse(event);
	
			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}
	
			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};
	
	
		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;
	
			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}
	
			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};
	
	
		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;
	
			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}
	
			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (chromeVersion) {
	
				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
	
				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}
	
			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
	
				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');
	
					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}
	
			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];
	
			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
	
				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}
	
			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}
	
			return false;
		};
	
	
		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};
	
	
		if (true) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ },
/* 9 */
/*!*****************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/account.vue ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-68eeb8e7&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./account.vue */ 5)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./account.vue */ 21)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-68eeb8e7!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./account.vue */ 18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/account.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-68eeb8e7"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-68eeb8e7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-68eeb8e7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] account.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 10 */
/*!***********************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/accountHeader.vue ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-0be731d4&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./accountHeader.vue */ 2)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./accountHeader.vue */ 22)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-0be731d4!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./accountHeader.vue */ 15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/accountHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0be731d4"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0be731d4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0be731d4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] accountHeader.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/*!***************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/login.vue ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-82633eba&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./login.vue */ 6)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./login.vue */ 23)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-82633eba!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./login.vue */ 19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-82633eba"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-82633eba", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-82633eba", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/*!**************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/pair.vue ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-86c0dde0&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./pair.vue */ 7)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./pair.vue */ 24)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-86c0dde0!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./pair.vue */ 20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/pair.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-86c0dde0"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-86c0dde0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-86c0dde0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pair.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 13 */
/*!****************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/signup.vue ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-6757a0ce&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./signup.vue */ 4)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./signup.vue */ 25)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-6757a0ce!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./signup.vue */ 17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/signup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6757a0ce"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6757a0ce", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6757a0ce", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] signup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/*!*****************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/tabPage.vue ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !./../../../../../~/.1.0.1@extract-text-webpack-plugin/loader.js?{"remove":true}!css?sourceMap!vue-loader/lib/style-rewriter?id=data-v-360a4efe&scoped=true!postcss!sass?sourceMap!vue-loader/lib/selector?type=styles&index=0!./tabPage.vue */ 3)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./tabPage.vue */ 26)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-360a4efe!vue-loader/lib/template-loader?raw&engine=pug!vue-loader/lib/selector?type=template&index=0!./tabPage.vue */ 16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/xiewulong/com.xiawanle/vendor/xiewulong/yii2-account/js/components/tabPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-360a4efe"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-360a4efe", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-360a4efe", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabPage.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 15 */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-0be731d4!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/accountHeader.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "account-header"
	  }, [(_vm.$slots.logo) ? _c('div', {
	    staticClass: "logo"
	  }, [_vm._t("logo")], 2) : _vm._e(), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0be731d4", module.exports)
	  }
	}

/***/ },
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-360a4efe!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/tabPage.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.tabs) ? _c('div', {
	    staticClass: "tab-page"
	  }, [_c('div', {
	    staticClass: "tabs"
	  }, [_c('div', {
	    staticClass: "row"
	  }, _vm._l((_vm.tabs), function(name, id) {
	    return _c('div', {
	      staticClass: "col-xs"
	    }, [_c('a', {
	      class: {
	        active: id == _vm.activeId
	      },
	      on: {
	        "click": function($event) {
	          _vm.switcher(id)
	        }
	      }
	    }, [_vm._v(_vm._s(name))])])
	  }))]), _vm._l((_vm.tabs), function(name, id) {
	    return (id == _vm.activeId) ? _c('div', {
	      staticClass: "page",
	      class: id
	    }, [_vm._t(id)], 2) : _vm._e()
	  })], 2) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-360a4efe", module.exports)
	  }
	}

/***/ },
/* 17 */
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-6757a0ce!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/signup.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    staticClass: "signup",
	    on: {
	      "submit": function($event) {
	        _vm.submit($event)
	      }
	    }
	  }, [_vm._t("default"), (_vm._user) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": "type"
	    },
	    domProps: {
	      "value": _vm._user.type
	    }
	  }) : _vm._e(), (_vm._user) ? _c('input', {
	    attrs: {
	      "type": "hidden",
	      "name": "id"
	    },
	    domProps: {
	      "value": _vm._user.id
	    }
	  }) : _vm._e(), (!_vm._user) ? _c('div', {
	    staticClass: "form-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.usernameValue),
	      expression: "usernameValue"
	    }],
	    ref: "username",
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "name": _vm.username.name,
	      "placeholder": _vm.username.label,
	      "autofocus": _vm.username.error || !_vm.error
	    },
	    domProps: {
	      "value": _vm._s(_vm.usernameValue)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.usernameValue = $event.target.value
	      }
	    }
	  })]) : _vm._e(), (!_vm._user) ? _c('div', {
	    staticClass: "form-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.passwordValue),
	      expression: "passwordValue"
	    }],
	    ref: "password",
	    staticClass: "form-control",
	    attrs: {
	      "type": "password",
	      "name": _vm.password.name,
	      "placeholder": _vm.password.label,
	      "autofocus": _vm.password.error
	    },
	    domProps: {
	      "value": _vm._s(_vm.passwordValue)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.passwordValue = $event.target.value
	      }
	    }
	  })]) : _vm._e(), _c('transition', {
	    attrs: {
	      "name": "message"
	    }
	  }, [(_vm.message) ? _c('div', {
	    staticClass: "form-group message"
	  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()]), _c('button', {
	    staticClass: "btn btn-primary btn-block"
	  }, [_vm._v(_vm._s(_vm.submitText))])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6757a0ce", module.exports)
	  }
	}

/***/ },
/* 18 */
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-68eeb8e7!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/account.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "account"
	  }, [_c('div', {
	    staticClass: "account-body"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-68eeb8e7", module.exports)
	  }
	}

/***/ },
/* 19 */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-82633eba!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/login.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    staticClass: "login",
	    on: {
	      "submit": function($event) {
	        _vm.submit($event)
	      }
	    }
	  }, [_vm._t("default"), _c('div', {
	    staticClass: "form-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.usernameValue),
	      expression: "usernameValue"
	    }],
	    ref: "username",
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "name": _vm.username.name,
	      "placeholder": _vm.username.label,
	      "autofocus": _vm.username.error || !_vm.error
	    },
	    domProps: {
	      "value": _vm._s(_vm.usernameValue)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.usernameValue = $event.target.value
	      }
	    }
	  })]), _c('div', {
	    staticClass: "form-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.passwordValue),
	      expression: "passwordValue"
	    }],
	    ref: "password",
	    staticClass: "form-control",
	    attrs: {
	      "type": "password",
	      "name": _vm.password.name,
	      "placeholder": _vm.password.label,
	      "autofocus": _vm.password.error
	    },
	    domProps: {
	      "value": _vm._s(_vm.passwordValue)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.passwordValue = $event.target.value
	      }
	    }
	  })]), _c('transition', {
	    attrs: {
	      "name": "message"
	    }
	  }, [(_vm.message) ? _c('div', {
	    staticClass: "form-group message"
	  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()]), _c('button', {
	    staticClass: "btn btn-primary btn-block"
	  }, [_vm._v(_vm._s(_vm.submitText))])], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-82633eba", module.exports)
	  }
	}

/***/ },
/* 20 */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/.10.0.2@vue-loader/lib/template-compiler.js?id=data-v-86c0dde0!./~/.10.0.2@vue-loader/lib/template-loader.js?raw&engine=pug!./~/.10.0.2@vue-loader/lib/selector.js?type=template&index=0!./vendor/xiewulong/yii2-account/js/components/pair.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "pair row"
	  }, [_c('div', {
	    staticClass: "col-xs"
	  }, [_c('b', [_c('img', {
	    attrs: {
	      "src": _vm._user.face
	    }
	  })]), _c('p', [_vm._v(_vm._s(_vm._user.name))])]), (_vm.user) ? _c('div', {
	    staticClass: "col-xs"
	  }, [_c('b', [_c('img', {
	    attrs: {
	      "src": _vm.user.face
	    }
	  })]), _c('p', [_vm._v(_vm._s(_vm.user.username))])]) : _c('div', {
	    staticClass: "col-xs guest"
	  }, _vm._l((_vm.guest), function(text) {
	    return _c('p', [_vm._v(_vm._s(text))])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-86c0dde0", module.exports)
	  }
	}

/***/ },
/* 21 */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/account.vue ***!
  \*********************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'account',
	
		props: {
			hidden: String
		}
	};

/***/ },
/* 22 */
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/accountHeader.vue ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'account-header'
	};

/***/ },
/* 23 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/login.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'login',
	
		props: {
			error: String,
			password: {
				type: Object,
				required: true
			},
			submitText: {
				type: String,
				default: '登录'
			},
			username: {
				type: Object,
				required: true
			},
			duration: {
				type: Number,
				default: 2000
			}
		},
	
		data: function data() {
			return {
				usernameValue: this.username.value,
				passwordValue: this.password.value,
				message: this.error
			};
		},
		mounted: function mounted() {
			this.message && this.hideMessage();
		},
	
	
		watch: {
			message: function message(_message) {
				_message && this.hideMessage();
			}
		},
	
		methods: {
			submit: function submit(e) {
				var error = void 0;
	
				if (!this.usernameValue) {
					error = this.username.hint;
					this.$refs.username.focus();
				} else if (!this.passwordValue) {
					error = this.password.hint;
					this.$refs.password.focus();
				}
	
				if (error) {
					this.message = error;
					e.preventDefault();
				}
			},
			hideMessage: function hideMessage() {
				var _this = this;
	
				setTimeout(function () {
					_this.message = '';
				}, this.duration);
			}
		}
	};

/***/ },
/* 24 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/pair.vue ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'pair',
	
		props: {
			_user: {
				type: Object,
				required: true
			},
			guest: {
				type: Array,
				default: function _default() {
					return ['您尚未登录', '请先绑定账户'];
				}
			},
			user: {
				type: Object,
				default: function _default() {
					return null;
				}
			}
		}
	};

/***/ },
/* 25 */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/signup.vue ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'signup',
	
		props: {
			_user: {
				type: Object,
				default: function _default() {
					return null;
				}
			},
			error: String,
			password: {
				type: Object,
				default: function _default() {
					return {};
				}
			},
			submitText: {
				type: String,
				default: function _default() {
					return this._user ? '生成账户' : '注册';
				}
			},
			username: {
				type: Object,
				default: function _default() {
					return {};
				}
			},
			duration: {
				type: Number,
				default: 2000
			}
		},
	
		data: function data() {
			return {
				usernameValue: this.username.value,
				passwordValue: this.password.value,
				message: this.error
			};
		},
		mounted: function mounted() {
			this.message && this.hideMessage();
		},
	
	
		watch: {
			message: function message(_message) {
				_message && this.hideMessage();
			}
		},
	
		methods: {
			submit: function submit(e) {
				var error = void 0;
	
				if (!this.usernameValue) {
					error = this.username.hint;
					this.$refs.username.focus();
				} else if (!this.passwordValue) {
					error = this.password.hint;
					this.$refs.password.focus();
				}
	
				if (error) {
					this.message = error;
					e.preventDefault();
				}
			},
			hideMessage: function hideMessage() {
				var _this = this;
	
				setTimeout(function () {
					_this.message = '';
				}, this.duration);
			}
		}
	};

/***/ },
/* 26 */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/.6.2.10@babel-loader/lib!./~/.10.0.2@vue-loader/lib/selector.js?type=script&index=0!./vendor/xiewulong/yii2-account/js/components/tabPage.vue ***!
  \*********************************************************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
		name: 'account-login',
	
		props: {
			active: String,
			tabs: Object
		},
	
		data: function data() {
			var active = this.active;
			if (!active) {
				var id = void 0;
				for (id in this.tabs) {
					active = id;
					break;
				}
			}
	
			return {
				activeId: active
			};
		},
	
	
		methods: {
			switcher: function switcher(id) {
				this.activeId = id;
			}
		}
	};

/***/ },
/* 27 */
/*!**************************************************************!*\
  !*** ./vendor/xiewulong/yii2-account/js/components/index.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _account = __webpack_require__(/*! ./account.vue */ 9);
	
	var _account2 = _interopRequireDefault(_account);
	
	var _accountHeader = __webpack_require__(/*! ./accountHeader.vue */ 10);
	
	var _accountHeader2 = _interopRequireDefault(_accountHeader);
	
	var _login = __webpack_require__(/*! ./login.vue */ 11);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _pair = __webpack_require__(/*! ./pair.vue */ 12);
	
	var _pair2 = _interopRequireDefault(_pair);
	
	var _signup = __webpack_require__(/*! ./signup.vue */ 13);
	
	var _signup2 = _interopRequireDefault(_signup);
	
	var _tabPage = __webpack_require__(/*! ./tabPage.vue */ 14);
	
	var _tabPage2 = _interopRequireDefault(_tabPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*!
	 * components
	 * xiewulong <xiewulong@vip.qq.com>
	 * create: 2017/01/05
	 * since: 0.0.1
	 */
	exports.default = {
		account: _account2.default,
		accountHeader: _accountHeader2.default,
		login: _login2.default,
		pair: _pair2.default,
		signup: _signup2.default,
		tabPage: _tabPage2.default
	};

/***/ },
/* 28 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = Vue;

/***/ }
/******/ ]);
//# sourceMappingURL=account.js.map