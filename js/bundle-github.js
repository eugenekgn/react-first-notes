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
/*!**********************************!*\
  !*** ./app/github-card/main.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _github = __webpack_require__(/*! ./github.model */ 2);
	
	var _github2 = _interopRequireDefault(_github);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Card = React.createClass({
	    displayName: "Card",
	    getInitialState: function getInitialState() {
	        return {};
	    },
	    componentDidMount: function componentDidMount() {
	        var that = this;
	        var gitHubModule = new _github2.default();
	        gitHubModule.getData(this.props.login).then(function (data) {
	            that.setState(data);
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "tile col-xs-4 col-md-4" },
	            React.createElement(
	                "div",
	                { className: "thumbnail" },
	                React.createElement("img", { src: this.state.avatar_url, height: "230", width: "230" }),
	                React.createElement(
	                    "div",
	                    { className: "caption" },
	                    React.createElement(
	                        "a",
	                        { href: this.state.html_url },
	                        React.createElement(
	                            "h3",
	                            null,
	                            this.state.name
	                        )
	                    ),
	                    React.createElement(
	                        "p",
	                        null,
	                        "Text"
	                    )
	                )
	            )
	        );
	    }
	});
	
	var Form = React.createClass({
	    displayName: "Form",
	    handleSubmit: function handleSubmit(e) {
	        e.preventDefault();
	        var loginInput = React.findDOMNode(this.refs.login);
	        // Add the card
	        this.props.addCard(loginInput.value);
	        // reset input to empty
	        loginInput.value = '';
	    },
	    render: function render() {
	        return React.createElement(
	            "form",
	            { onSubmit: this.handleSubmit },
	            React.createElement("input", { ref: "login", placeholder: "github login" }),
	            React.createElement(
	                "button",
	                { type: "submit", className: "btn btn-default" },
	                "Add"
	            )
	        );
	    }
	});
	
	var Main = React.createClass({
	    displayName: "Main",
	    getInitialState: function getInitialState() {
	        return {
	            logins: []
	        };
	    },
	    addCard: function addCard(login) {
	        this.setState({ logins: this.state.logins.concat(login) });
	    },
	    render: function render() {
	        var cards = this.state.logins.map(function (login) {
	            return React.createElement(Card, { login: login });
	        });
	        return React.createElement(
	            "div",
	            { className: "container" },
	            React.createElement(Form, { addCard: this.addCard }),
	            React.createElement(
	                "div",
	                { className: "row" },
	                cards
	            )
	        );
	    }
	});
	
	ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */
/*!*****************************************!*\
  !*** ./app/github-card/github.model.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Eugene on 1/18/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _github = __webpack_require__(/*! ./github.config */ 3);
	
	var _github2 = _interopRequireDefault(_github);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GitHubModel = function () {
	    function GitHubModel() {
	        _classCallCheck(this, GitHubModel);
	    }
	
	    _createClass(GitHubModel, [{
	        key: 'getData',
	        value: function getData(userName) {
	            var config = new _github2.default();
	            var url = config.gitHubLinkTemplate + userName;
	            return $.get(url);
	        }
	    }]);
	
	    return GitHubModel;
	}();
	
	exports.default = GitHubModel;

/***/ },
/* 3 */
/*!******************************************!*\
  !*** ./app/github-card/github.config.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Eugene on 1/18/16.
	 */
	
	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	
	        this._gitHubLinkTemplate = 'https://api.github.com/users/';
	    }
	
	    _createClass(_class, [{
	        key: 'gitHubLinkTemplate',
	        get: function get() {
	            return this._gitHubLinkTemplate;
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle-github.js.map