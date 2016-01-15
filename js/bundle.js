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
/*!**********************!*\
  !*** ./app/main.jsx ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	(function () {
	
	    var Button = React.createClass({
	        displayName: "Button",
	
	        clickEvent: function clickEvent() {
	            this.props.clickEvent(this.props.label);
	        },
	        render: function render() {
	            return React.createElement(
	                "a",
	                { className: "waves-effect waves-light btn",
	                    onClick: this.clickEvent },
	                this.props.label
	            );
	        }
	    });
	
	    var Result = React.createClass({
	        displayName: "Result",
	
	        render: function render() {
	            return React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    null,
	                    this.props.count
	                )
	            );
	        }
	    });
	
	    var Main = React.createClass({
	        displayName: "Main",
	
	        getInitialState: function getInitialState() {
	            return { counter: 0 };
	        },
	        handleClick: function handleClick(val) {
	            this.setState({ counter: this.state.counter + parseInt(val) });
	        },
	        render: function render() {
	            return React.createElement(
	                "div",
	                null,
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(Button, { label: '1', clickEvent: this.handleClick }),
	                    React.createElement(Button, { label: '5', clickEvent: this.handleClick }),
	                    React.createElement(Button, { label: '10', clickEvent: this.handleClick }),
	                    React.createElement(Button, { label: '100', clickEvent: this.handleClick })
	                ),
	                React.createElement(Result, { count: this.state.counter })
	            );
	        }
	    });
	
	    ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map