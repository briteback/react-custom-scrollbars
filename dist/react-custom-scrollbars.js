(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCustomScrollbars"] = factory(require("react"));
	else
		root["ReactCustomScrollbars"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Scrollbars = undefined;

	var _Scrollbars = __webpack_require__(5);

	var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Scrollbars2.default;
	exports.Scrollbars = _Scrollbars2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var prefix = __webpack_require__(13)
	var toCamelCase = __webpack_require__(16)
	var cache = { 'float': 'cssFloat' }
	var addPxToStyle = __webpack_require__(3)

	function style (element, property, value) {
	  var camel = cache[property]
	  if (typeof camel === 'undefined') {
	    camel = detect(property)
	  }

	  // may be false if CSS prop is unsupported
	  if (camel) {
	    if (value === undefined) {
	      return element.style[camel]
	    }

	    element.style[camel] = addPxToStyle(camel, value)
	  }
	}

	function each (element, properties) {
	  for (var k in properties) {
	    if (properties.hasOwnProperty(k)) {
	      style(element, k, properties[k])
	    }
	  }
	}

	function detect (cssProp) {
	  var camel = toCamelCase(cssProp)
	  var result = prefix(camel)
	  cache[camel] = cache[cssProp] = cache[result] = result
	  return result
	}

	function set () {
	  if (arguments.length === 2) {
	    if (typeof arguments[1] === 'string') {
	      arguments[0].style.cssText = arguments[1]
	    } else {
	      each(arguments[0], arguments[1])
	    }
	  } else {
	    style(arguments[0], arguments[1], arguments[2])
	  }
	}

	module.exports = set
	module.exports.set = set

	module.exports.get = function (element, properties) {
	  if (Array.isArray(properties)) {
	    return properties.reduce(function (obj, prop) {
	      obj[prop] = style(element, prop || '')
	      return obj
	    }, {})
	  } else {
	    return style(element, properties || '')
	  }
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* The following list is defined in React's core */
	var IS_UNITLESS = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	module.exports = function(name, value) {
	  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
	    return value + 'px';
	  } else {
	    return value;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.renderViewDefault = renderViewDefault;
	exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
	exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
	exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
	exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/* eslint-disable react/prop-types */

	function renderViewDefault(props) {
	    return _react2.default.createElement('div', props);
	}

	function renderTrackHorizontalDefault(_ref) {
	    var style = _ref.style,
	        props = _objectWithoutProperties(_ref, ['style']);

	    var finalStyle = _extends({}, style, {
	        right: 2,
	        bottom: 2,
	        left: 2,
	        borderRadius: 3
	    });
	    return _react2.default.createElement('div', _extends({ style: finalStyle }, props));
	}

	function renderTrackVerticalDefault(_ref2) {
	    var style = _ref2.style,
	        props = _objectWithoutProperties(_ref2, ['style']);

	    var finalStyle = _extends({}, style, {
	        right: 2,
	        bottom: 2,
	        top: 2,
	        borderRadius: 3
	    });
	    return _react2.default.createElement('div', _extends({ style: finalStyle }, props));
	}

	function renderThumbHorizontalDefault(_ref3) {
	    var style = _ref3.style,
	        props = _objectWithoutProperties(_ref3, ['style']);

	    var finalStyle = _extends({}, style, {
	        cursor: 'pointer',
	        borderRadius: 'inherit',
	        backgroundColor: 'rgba(0,0,0,.2)'
	    });
	    return _react2.default.createElement('div', _extends({ style: finalStyle }, props));
	}

	function renderThumbVerticalDefault(_ref4) {
	    var style = _ref4.style,
	        props = _objectWithoutProperties(_ref4, ['style']);

	    var finalStyle = _extends({}, style, {
	        cursor: 'pointer',
	        borderRadius: 'inherit',
	        backgroundColor: 'rgba(0,0,0,.2)'
	    });
	    return _react2.default.createElement('div', _extends({ style: finalStyle }, props));
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _raf2 = __webpack_require__(15);

	var _raf3 = _interopRequireDefault(_raf2);

	var _domCss = __webpack_require__(1);

	var _domCss2 = _interopRequireDefault(_domCss);

	var _react = __webpack_require__(2);

	var _isString = __webpack_require__(10);

	var _isString2 = _interopRequireDefault(_isString);

	var _getScrollbarWidth = __webpack_require__(9);

	var _getScrollbarWidth2 = _interopRequireDefault(_getScrollbarWidth);

	var _returnFalse = __webpack_require__(11);

	var _returnFalse2 = _interopRequireDefault(_returnFalse);

	var _getInnerWidth = __webpack_require__(8);

	var _getInnerWidth2 = _interopRequireDefault(_getInnerWidth);

	var _getInnerHeight = __webpack_require__(7);

	var _getInnerHeight2 = _interopRequireDefault(_getInnerHeight);

	var _styles = __webpack_require__(6);

	var _defaultRenderElements = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = (0, _react.createClass)({

	    displayName: 'Scrollbars',

	    propTypes: {
	        onScroll: _react.PropTypes.func,
	        onScrollFrame: _react.PropTypes.func,
	        onScrollStart: _react.PropTypes.func,
	        onScrollStop: _react.PropTypes.func,
	        onUpdate: _react.PropTypes.func,
	        renderView: _react.PropTypes.func,
	        renderTrackHorizontal: _react.PropTypes.func,
	        renderTrackVertical: _react.PropTypes.func,
	        renderThumbHorizontal: _react.PropTypes.func,
	        renderThumbVertical: _react.PropTypes.func,
	        tagName: _react.PropTypes.string,
	        thumbSize: _react.PropTypes.number,
	        thumbMinSize: _react.PropTypes.number,
	        hideTracksWhenNotNeeded: _react.PropTypes.bool,
	        autoHide: _react.PropTypes.bool,
	        autoHideTimeout: _react.PropTypes.number,
	        autoHideDuration: _react.PropTypes.number,
	        autoHeight: _react.PropTypes.bool,
	        autoHeightMin: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	        autoHeightMax: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	        universal: _react.PropTypes.bool,
	        style: _react.PropTypes.object,
	        children: _react.PropTypes.node
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            renderView: _defaultRenderElements.renderViewDefault,
	            renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
	            renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
	            renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
	            renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
	            tagName: 'div',
	            thumbMinSize: 30,
	            hideTracksWhenNotNeeded: false,
	            autoHide: false,
	            autoHideTimeout: 1000,
	            autoHideDuration: 200,
	            autoHeight: false,
	            autoHeightMin: 0,
	            autoHeightMax: 200,
	            universal: false
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            didMountUniversal: false
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        this.addListeners();
	        this.update();
	        this.componentDidMountUniversal();
	    },
	    componentDidMountUniversal: function componentDidMountUniversal() {
	        // eslint-disable-line react/sort-comp
	        var universal = this.props.universal;

	        if (!universal) return;
	        this.setState({ didMountUniversal: true });
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.update();
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.removeListeners();
	        (0, _raf2.cancel)(this.requestFrame);
	        clearTimeout(this.hideTracksTimeout);
	        clearInterval(this.detectScrollingInterval);
	    },
	    getScrollLeft: function getScrollLeft() {
	        var view = this.refs.view;

	        return view.scrollLeft;
	    },
	    getScrollTop: function getScrollTop() {
	        var view = this.refs.view;

	        return view.scrollTop;
	    },
	    getScrollWidth: function getScrollWidth() {
	        var view = this.refs.view;

	        return view.scrollWidth;
	    },
	    getScrollHeight: function getScrollHeight() {
	        var view = this.refs.view;

	        return view.scrollHeight;
	    },
	    getClientWidth: function getClientWidth() {
	        var view = this.refs.view;

	        return view.clientWidth;
	    },
	    getClientHeight: function getClientHeight() {
	        var view = this.refs.view;

	        return view.clientHeight;
	    },
	    getValues: function getValues() {
	        var view = this.refs.view;
	        var scrollLeft = view.scrollLeft,
	            scrollTop = view.scrollTop,
	            scrollWidth = view.scrollWidth,
	            scrollHeight = view.scrollHeight,
	            clientWidth = view.clientWidth,
	            clientHeight = view.clientHeight;


	        return {
	            left: scrollLeft / (scrollWidth - clientWidth) || 0,
	            top: scrollTop / (scrollHeight - clientHeight) || 0,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: scrollWidth,
	            scrollHeight: scrollHeight,
	            clientWidth: clientWidth,
	            clientHeight: clientHeight
	        };
	    },
	    getThumbHorizontalWidth: function getThumbHorizontalWidth() {
	        var _props = this.props,
	            thumbSize = _props.thumbSize,
	            thumbMinSize = _props.thumbMinSize;
	        var _refs = this.refs,
	            view = _refs.view,
	            trackHorizontal = _refs.trackHorizontal;
	        var scrollWidth = view.scrollWidth,
	            clientWidth = view.clientWidth;

	        var trackWidth = (0, _getInnerWidth2.default)(trackHorizontal);
	        var width = clientWidth / scrollWidth * trackWidth;
	        if (trackWidth === width) return 0;
	        if (thumbSize) return thumbSize;
	        return Math.max(width, thumbMinSize);
	    },
	    getThumbVerticalHeight: function getThumbVerticalHeight() {
	        var _props2 = this.props,
	            thumbSize = _props2.thumbSize,
	            thumbMinSize = _props2.thumbMinSize;
	        var _refs2 = this.refs,
	            view = _refs2.view,
	            trackVertical = _refs2.trackVertical;
	        var scrollHeight = view.scrollHeight,
	            clientHeight = view.clientHeight;

	        var trackHeight = (0, _getInnerHeight2.default)(trackVertical);
	        var height = clientHeight / scrollHeight * trackHeight;
	        if (trackHeight === height) return 0;
	        if (thumbSize) return thumbSize;
	        return Math.max(height, thumbMinSize);
	    },
	    getScrollLeftForOffset: function getScrollLeftForOffset(offset) {
	        var _refs3 = this.refs,
	            view = _refs3.view,
	            trackHorizontal = _refs3.trackHorizontal;
	        var scrollWidth = view.scrollWidth,
	            clientWidth = view.clientWidth;

	        var trackWidth = (0, _getInnerWidth2.default)(trackHorizontal);
	        var thumbWidth = this.getThumbHorizontalWidth();
	        return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
	    },
	    getScrollTopForOffset: function getScrollTopForOffset(offset) {
	        var _refs4 = this.refs,
	            view = _refs4.view,
	            trackVertical = _refs4.trackVertical;
	        var scrollHeight = view.scrollHeight,
	            clientHeight = view.clientHeight;

	        var trackHeight = (0, _getInnerHeight2.default)(trackVertical);
	        var thumbHeight = this.getThumbVerticalHeight();
	        return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
	    },
	    scrollLeft: function scrollLeft() {
	        var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var view = this.refs.view;

	        view.scrollLeft = left;
	    },
	    scrollTop: function scrollTop() {
	        var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var view = this.refs.view;

	        view.scrollTop = top;
	    },
	    scrollToLeft: function scrollToLeft() {
	        var view = this.refs.view;

	        view.scrollLeft = 0;
	    },
	    scrollToTop: function scrollToTop() {
	        var view = this.refs.view;

	        view.scrollTop = 0;
	    },
	    scrollToRight: function scrollToRight() {
	        var view = this.refs.view;

	        view.scrollLeft = view.scrollWidth;
	    },
	    scrollToBottom: function scrollToBottom() {
	        var view = this.refs.view;

	        view.scrollTop = view.scrollHeight;
	    },
	    addListeners: function addListeners() {
	        /* istanbul ignore if */
	        if (typeof document === 'undefined') return;
	        var _refs5 = this.refs,
	            view = _refs5.view,
	            trackHorizontal = _refs5.trackHorizontal,
	            trackVertical = _refs5.trackVertical,
	            thumbHorizontal = _refs5.thumbHorizontal,
	            thumbVertical = _refs5.thumbVertical;

	        view.addEventListener('scroll', this.handleScroll);
	        if (!(0, _getScrollbarWidth2.default)()) return;
	        trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
	        trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
	        trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
	        trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
	        trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
	        trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
	        thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
	        thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
	        window.addEventListener('resize', this.handleWindowResize);
	    },
	    removeListeners: function removeListeners() {
	        /* istanbul ignore if */
	        if (typeof document === 'undefined') return;
	        var _refs6 = this.refs,
	            view = _refs6.view,
	            trackHorizontal = _refs6.trackHorizontal,
	            trackVertical = _refs6.trackVertical,
	            thumbHorizontal = _refs6.thumbHorizontal,
	            thumbVertical = _refs6.thumbVertical;

	        view.removeEventListener('scroll', this.handleScroll);
	        if (!(0, _getScrollbarWidth2.default)()) return;
	        trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
	        trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
	        trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
	        trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
	        trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
	        trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
	        thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
	        thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
	        window.removeEventListener('resize', this.handleWindowResize);
	        // Possibly setup by `handleDragStart`
	        this.teardownDragging();
	    },
	    handleScroll: function handleScroll(event) {
	        var _this = this;

	        var _props3 = this.props,
	            onScroll = _props3.onScroll,
	            onScrollFrame = _props3.onScrollFrame;

	        if (onScroll) onScroll(event);
	        this.update(function (values) {
	            var scrollLeft = values.scrollLeft,
	                scrollTop = values.scrollTop;

	            _this.viewScrollLeft = scrollLeft;
	            _this.viewScrollTop = scrollTop;
	            if (onScrollFrame) onScrollFrame(values);
	        });
	        this.detectScrolling();
	    },
	    handleScrollStart: function handleScrollStart() {
	        var onScrollStart = this.props.onScrollStart;

	        if (onScrollStart) onScrollStart();
	        this.handleScrollStartAutoHide();
	    },
	    handleScrollStartAutoHide: function handleScrollStartAutoHide() {
	        var autoHide = this.props.autoHide;

	        if (!autoHide) return;
	        this.showTracks();
	    },
	    handleScrollStop: function handleScrollStop() {
	        var onScrollStop = this.props.onScrollStop;

	        if (onScrollStop) onScrollStop();
	        this.handleScrollStopAutoHide();
	    },
	    handleScrollStopAutoHide: function handleScrollStopAutoHide() {
	        var autoHide = this.props.autoHide;

	        if (!autoHide) return;
	        this.hideTracks();
	    },
	    handleWindowResize: function handleWindowResize() {
	        this.update();
	    },
	    handleHorizontalTrackMouseDown: function handleHorizontalTrackMouseDown(event) {
	        event.preventDefault();
	        var view = this.refs.view;
	        var target = event.target,
	            clientX = event.clientX;

	        var _target$getBoundingCl = target.getBoundingClientRect(),
	            targetLeft = _target$getBoundingCl.left;

	        var thumbWidth = this.getThumbHorizontalWidth();
	        var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
	        view.scrollLeft = this.getScrollLeftForOffset(offset);
	    },
	    handleVerticalTrackMouseDown: function handleVerticalTrackMouseDown(event) {
	        event.preventDefault();
	        var view = this.refs.view;
	        var target = event.target,
	            clientY = event.clientY;

	        var _target$getBoundingCl2 = target.getBoundingClientRect(),
	            targetTop = _target$getBoundingCl2.top;

	        var thumbHeight = this.getThumbVerticalHeight();
	        var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
	        view.scrollTop = this.getScrollTopForOffset(offset);
	    },
	    handleHorizontalThumbMouseDown: function handleHorizontalThumbMouseDown(event) {
	        event.preventDefault();
	        this.handleDragStart(event);
	        var target = event.target,
	            clientX = event.clientX;
	        var offsetWidth = target.offsetWidth;

	        var _target$getBoundingCl3 = target.getBoundingClientRect(),
	            left = _target$getBoundingCl3.left;

	        this.prevPageX = offsetWidth - (clientX - left);
	    },
	    handleVerticalThumbMouseDown: function handleVerticalThumbMouseDown(event) {
	        event.preventDefault();
	        this.handleDragStart(event);
	        var target = event.target,
	            clientY = event.clientY;
	        var offsetHeight = target.offsetHeight;

	        var _target$getBoundingCl4 = target.getBoundingClientRect(),
	            top = _target$getBoundingCl4.top;

	        this.prevPageY = offsetHeight - (clientY - top);
	    },
	    setupDragging: function setupDragging() {
	        (0, _domCss2.default)(document.body, _styles.disableSelectStyle);
	        document.addEventListener('mousemove', this.handleDrag);
	        document.addEventListener('mouseup', this.handleDragEnd);
	        document.onselectstart = _returnFalse2.default;
	    },
	    teardownDragging: function teardownDragging() {
	        (0, _domCss2.default)(document.body, _styles.disableSelectStyleReset);
	        document.removeEventListener('mousemove', this.handleDrag);
	        document.removeEventListener('mouseup', this.handleDragEnd);
	        document.onselectstart = undefined;
	    },
	    handleDragStart: function handleDragStart(event) {
	        this.dragging = true;
	        event.stopImmediatePropagation();
	        this.setupDragging();
	    },
	    handleDrag: function handleDrag(event) {
	        if (this.prevPageX) {
	            var clientX = event.clientX;
	            var _refs7 = this.refs,
	                view = _refs7.view,
	                trackHorizontal = _refs7.trackHorizontal;

	            var _trackHorizontal$getB = trackHorizontal.getBoundingClientRect(),
	                trackLeft = _trackHorizontal$getB.left;

	            var thumbWidth = this.getThumbHorizontalWidth();
	            var clickPosition = thumbWidth - this.prevPageX;
	            var offset = -trackLeft + clientX - clickPosition;
	            view.scrollLeft = this.getScrollLeftForOffset(offset);
	        }
	        if (this.prevPageY) {
	            var clientY = event.clientY;
	            var _refs8 = this.refs,
	                _view = _refs8.view,
	                trackVertical = _refs8.trackVertical;

	            var _trackVertical$getBou = trackVertical.getBoundingClientRect(),
	                trackTop = _trackVertical$getBou.top;

	            var thumbHeight = this.getThumbVerticalHeight();
	            var _clickPosition = thumbHeight - this.prevPageY;
	            var _offset = -trackTop + clientY - _clickPosition;
	            _view.scrollTop = this.getScrollTopForOffset(_offset);
	        }
	        return false;
	    },
	    handleDragEnd: function handleDragEnd() {
	        this.dragging = false;
	        this.prevPageX = this.prevPageY = 0;
	        this.teardownDragging();
	        this.handleDragEndAutoHide();
	    },
	    handleDragEndAutoHide: function handleDragEndAutoHide() {
	        var autoHide = this.props.autoHide;

	        if (!autoHide) return;
	        this.hideTracks();
	    },
	    handleTrackMouseEnter: function handleTrackMouseEnter() {
	        this.trackMouseOver = true;
	        this.handleTrackMouseEnterAutoHide();
	    },
	    handleTrackMouseEnterAutoHide: function handleTrackMouseEnterAutoHide() {
	        var autoHide = this.props.autoHide;

	        if (!autoHide) return;
	        this.showTracks();
	    },
	    handleTrackMouseLeave: function handleTrackMouseLeave() {
	        this.trackMouseOver = false;
	        this.handleTrackMouseLeaveAutoHide();
	    },
	    handleTrackMouseLeaveAutoHide: function handleTrackMouseLeaveAutoHide() {
	        var autoHide = this.props.autoHide;

	        if (!autoHide) return;
	        this.hideTracks();
	    },
	    showTracks: function showTracks() {
	        var _refs9 = this.refs,
	            trackHorizontal = _refs9.trackHorizontal,
	            trackVertical = _refs9.trackVertical;

	        clearTimeout(this.hideTracksTimeout);
	        (0, _domCss2.default)(trackHorizontal, { opacity: 1 });
	        (0, _domCss2.default)(trackVertical, { opacity: 1 });
	    },
	    hideTracks: function hideTracks() {
	        if (this.dragging) return;
	        if (this.scrolling) return;
	        if (this.trackMouseOver) return;
	        var autoHideTimeout = this.props.autoHideTimeout;
	        var _refs10 = this.refs,
	            trackHorizontal = _refs10.trackHorizontal,
	            trackVertical = _refs10.trackVertical;

	        clearTimeout(this.hideTracksTimeout);
	        this.hideTracksTimeout = setTimeout(function () {
	            (0, _domCss2.default)(trackHorizontal, { opacity: 0 });
	            (0, _domCss2.default)(trackVertical, { opacity: 0 });
	        }, autoHideTimeout);
	    },
	    detectScrolling: function detectScrolling() {
	        var _this2 = this;

	        if (this.scrolling) return;
	        this.scrolling = true;
	        this.handleScrollStart();
	        this.detectScrollingInterval = setInterval(function () {
	            if (_this2.lastViewScrollLeft === _this2.viewScrollLeft && _this2.lastViewScrollTop === _this2.viewScrollTop) {
	                clearInterval(_this2.detectScrollingInterval);
	                _this2.scrolling = false;
	                _this2.handleScrollStop();
	            }
	            _this2.lastViewScrollLeft = _this2.viewScrollLeft;
	            _this2.lastViewScrollTop = _this2.viewScrollTop;
	        }, 100);
	    },
	    raf: function raf(callback) {
	        var _this3 = this;

	        if (this.requestFrame) _raf3.default.cancel(this.requestFrame);
	        this.requestFrame = (0, _raf3.default)(function () {
	            _this3.requestFrame = undefined;
	            callback();
	        });
	    },
	    update: function update(callback) {
	        var _this4 = this;

	        this.raf(function () {
	            return _this4._update(callback);
	        });
	    },
	    _update: function _update(callback) {
	        var _props4 = this.props,
	            onUpdate = _props4.onUpdate,
	            hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

	        var values = this.getValues();
	        if ((0, _getScrollbarWidth2.default)()) {
	            var _refs11 = this.refs,
	                thumbHorizontal = _refs11.thumbHorizontal,
	                thumbVertical = _refs11.thumbVertical,
	                trackHorizontal = _refs11.trackHorizontal,
	                trackVertical = _refs11.trackVertical;
	            var scrollLeft = values.scrollLeft,
	                clientWidth = values.clientWidth,
	                scrollWidth = values.scrollWidth;

	            var trackHorizontalWidth = (0, _getInnerWidth2.default)(trackHorizontal);
	            var thumbHorizontalWidth = this.getThumbHorizontalWidth();
	            var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
	            var thumbHorizontalStyle = {
	                width: thumbHorizontalWidth,
	                transform: 'translateX(' + thumbHorizontalX + 'px)'
	            };
	            var scrollTop = values.scrollTop,
	                clientHeight = values.clientHeight,
	                scrollHeight = values.scrollHeight;

	            var trackVerticalHeight = (0, _getInnerHeight2.default)(trackVertical);
	            var thumbVerticalHeight = this.getThumbVerticalHeight();
	            var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
	            var thumbVerticalStyle = {
	                height: thumbVerticalHeight,
	                transform: 'translateY(' + thumbVerticalY + 'px)'
	            };
	            if (hideTracksWhenNotNeeded) {
	                var trackHorizontalStyle = {
	                    visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
	                };
	                var trackVerticalStyle = {
	                    visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
	                };
	                (0, _domCss2.default)(trackHorizontal, trackHorizontalStyle);
	                (0, _domCss2.default)(trackVertical, trackVerticalStyle);
	            }
	            (0, _domCss2.default)(thumbHorizontal, thumbHorizontalStyle);
	            (0, _domCss2.default)(thumbVertical, thumbVerticalStyle);
	        }
	        if (onUpdate) onUpdate(values);
	        if (typeof callback !== 'function') return;
	        callback(values);
	    },
	    render: function render() {
	        var scrollbarWidth = (0, _getScrollbarWidth2.default)();
	        /* eslint-disable no-unused-vars */

	        var _props5 = this.props,
	            onScroll = _props5.onScroll,
	            onScrollFrame = _props5.onScrollFrame,
	            onScrollStart = _props5.onScrollStart,
	            onScrollStop = _props5.onScrollStop,
	            onUpdate = _props5.onUpdate,
	            renderView = _props5.renderView,
	            renderTrackHorizontal = _props5.renderTrackHorizontal,
	            renderTrackVertical = _props5.renderTrackVertical,
	            renderThumbHorizontal = _props5.renderThumbHorizontal,
	            renderThumbVertical = _props5.renderThumbVertical,
	            tagName = _props5.tagName,
	            hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
	            autoHide = _props5.autoHide,
	            autoHideTimeout = _props5.autoHideTimeout,
	            autoHideDuration = _props5.autoHideDuration,
	            thumbSize = _props5.thumbSize,
	            thumbMinSize = _props5.thumbMinSize,
	            universal = _props5.universal,
	            autoHeight = _props5.autoHeight,
	            autoHeightMin = _props5.autoHeightMin,
	            autoHeightMax = _props5.autoHeightMax,
	            style = _props5.style,
	            children = _props5.children,
	            props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
	        /* eslint-enable no-unused-vars */

	        var didMountUniversal = this.state.didMountUniversal;


	        var containerStyle = _extends({}, _styles.containerStyleDefault, autoHeight && _extends({}, _styles.containerStyleAutoHeight, {
	            minHeight: autoHeightMin,
	            maxHeight: autoHeightMax
	        }), style);

	        var viewStyle = _extends({}, _styles.viewStyleDefault, {
	            // Hide scrollbars by setting a negative margin
	            marginRight: scrollbarWidth ? -scrollbarWidth : 0,
	            marginBottom: scrollbarWidth ? -scrollbarWidth : 0
	        }, autoHeight && _extends({}, _styles.viewStyleAutoHeight, {
	            // Add scrollbarWidth to autoHeight in order to compensate negative margins
	            minHeight: (0, _isString2.default)(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
	            maxHeight: (0, _isString2.default)(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
	        }), autoHeight && universal && !didMountUniversal && {
	            minHeight: autoHeightMin,
	            maxHeight: autoHeightMax
	        }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

	        var trackAutoHeightStyle = {
	            transition: 'opacity ' + autoHideDuration + 'ms',
	            opacity: 0
	        };

	        var trackHorizontalStyle = _extends({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
	            display: 'none'
	        });

	        var trackVerticalStyle = _extends({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
	            display: 'none'
	        });

	        return (0, _react.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: 'container' }), [(0, _react.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: 'view' }, children), (0, _react.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: 'trackHorizontal' }, (0, _react.cloneElement)(renderThumbHorizontal({ style: _styles.thumbHorizontalStyleDefault }), { ref: 'thumbHorizontal' })), (0, _react.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: 'trackVertical' }, (0, _react.cloneElement)(renderThumbVertical({ style: _styles.thumbVerticalStyleDefault }), { ref: 'thumbVertical' }))]);
	    }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var containerStyleDefault = exports.containerStyleDefault = {
	    position: 'relative',
	    overflow: 'hidden',
	    width: '100%',
	    height: '100%'
	};

	// Overrides containerStyleDefault properties
	var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
	    height: 'auto'
	};

	var viewStyleDefault = exports.viewStyleDefault = {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    overflow: 'scroll',
	    WebkitOverflowScrolling: 'touch'
	};

	// Overrides viewStyleDefault properties
	var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
	    position: 'relative',
	    top: undefined,
	    left: undefined,
	    right: undefined,
	    bottom: undefined
	};

	var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
	    overflow: 'hidden',
	    marginRight: 0,
	    marginBottom: 0
	};

	var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
	    position: 'absolute',
	    height: 6
	};

	var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
	    position: 'absolute',
	    width: 6
	};

	var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
	    position: 'relative',
	    display: 'block',
	    height: '100%'
	};

	var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
	    position: 'relative',
	    display: 'block',
	    width: '100%'
	};

	var disableSelectStyle = exports.disableSelectStyle = {
	    userSelect: 'none'
	};

	var disableSelectStyleReset = exports.disableSelectStyleReset = {
	    userSelect: ''
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getInnerHeight;
	function getInnerHeight(el) {
	    var clientHeight = el.clientHeight;

	    var _getComputedStyle = getComputedStyle(el),
	        paddingTop = _getComputedStyle.paddingTop,
	        paddingBottom = _getComputedStyle.paddingBottom;

	    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getInnerWidth;
	function getInnerWidth(el) {
	    var clientWidth = el.clientWidth;

	    var _getComputedStyle = getComputedStyle(el),
	        paddingLeft = _getComputedStyle.paddingLeft,
	        paddingRight = _getComputedStyle.paddingRight;

	    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getScrollbarWidth;

	var _domCss = __webpack_require__(1);

	var _domCss2 = _interopRequireDefault(_domCss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollbarWidth = false;

	function getScrollbarWidth() {
	    if (scrollbarWidth !== false) return scrollbarWidth;
	    /* istanbul ignore else */
	    if (typeof document !== 'undefined') {
	        var div = document.createElement('div');
	        (0, _domCss2.default)(div, {
	            width: 100,
	            height: 100,
	            position: 'absolute',
	            top: -9999,
	            overflow: 'scroll',
	            MsOverflowStyle: 'scrollbar'
	        });
	        document.body.appendChild(div);
	        scrollbarWidth = div.offsetWidth - div.clientWidth;
	        document.body.removeChild(div);
	    } else {
	        scrollbarWidth = 0;
	    }
	    return scrollbarWidth;
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = isString;
	function isString(maybe) {
	    return typeof maybe === 'string';
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = returnFalse;
	function returnFalse() {
	    return false;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	var div = null
	var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

	module.exports = function prefixStyle (prop) {
	  // re-use a dummy div
	  if (!div) {
	    div = document.createElement('div')
	  }

	  var style = div.style

	  // prop exists without prefix
	  if (prop in style) {
	    return prop
	  }

	  // borderRadius -> BorderRadius
	  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)

	  // find the vendor-prefixed prop
	  for (var i = prefixes.length; i >= 0; i--) {
	    var name = prefixes[i] + titleCase
	    // e.g. WebkitBorderRadius or webkitBorderRadius
	    if (name in style) {
	      return name
	    }
	  }

	  return false
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(12)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	var space = __webpack_require__(18)

	/**
	 * Export.
	 */

	module.exports = toCamelCase

	/**
	 * Convert a `string` to camel case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toCamelCase(string) {
	  return space(string).replace(/\s(\w)/g, function (matches, letter) {
	    return letter.toUpperCase()
	  })
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	
	/**
	 * Export.
	 */

	module.exports = toNoCase

	/**
	 * Test whether a string is camel-case.
	 */

	var hasSpace = /\s/
	var hasSeparator = /(_|-|\.|:)/
	var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

	/**
	 * Remove any starting case from a `string`, like camel or snake, but keep
	 * spaces and punctuation that may be important otherwise.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toNoCase(string) {
	  if (hasSpace.test(string)) return string.toLowerCase()
	  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
	  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
	  return string.toLowerCase()
	}

	/**
	 * Separator splitter.
	 */

	var separatorSplitter = /[\W_]+(.|$)/g

	/**
	 * Un-separate a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function unseparate(string) {
	  return string.replace(separatorSplitter, function (m, next) {
	    return next ? ' ' + next : ''
	  })
	}

	/**
	 * Camelcase splitter.
	 */

	var camelSplitter = /(.)([A-Z]+)/g

	/**
	 * Un-camelcase a `string`.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function uncamelize(string) {
	  return string.replace(camelSplitter, function (m, previous, uppers) {
	    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
	  })
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	
	var clean = __webpack_require__(17)

	/**
	 * Export.
	 */

	module.exports = toSpaceCase

	/**
	 * Convert a `string` to space case.
	 *
	 * @param {String} string
	 * @return {String}
	 */

	function toSpaceCase(string) {
	  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
	    return match ? ' ' + match : ''
	  }).trim()
	}


/***/ }
/******/ ])
});
;