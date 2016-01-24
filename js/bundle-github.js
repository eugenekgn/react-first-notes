/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	"use strict";

	var StarsFrame = React.createClass({
	    displayName: "StarsFrame",
	    render: function render() {

	        var numberOfStars = this.props.numberOfStars;
	        var stars = [];
	        for (var i = 0; i < numberOfStars; i++) {
	            stars.push(React.createElement("span", { key: i, className: "glyphicon glyphicon-star" }));
	        }

	        return React.createElement(
	            "div",
	            { id: "stars-frame" },
	            React.createElement(
	                "div",
	                { className: "well" },
	                stars
	            )
	        );
	    }
	});

	var ButtonFrame = React.createClass({
	    displayName: "ButtonFrame",
	    render: function render() {
	        var disabled = undefined,
	            button = undefined,
	            correct = this.props.correct;

	        switch (correct) {
	            case true:
	                button = React.createElement(
	                    "button",
	                    { className: "btn btn-success btn-lg" },
	                    React.createElement("span", { className: "glyphicon glyphicon-ok" })
	                );
	                break;
	            case false:
	                button = React.createElement(
	                    "button",
	                    { className: "btn btn-danger btn-lg" },
	                    React.createElement("span", { className: "glyphicon glyphicon-remove" })
	                );
	                break;
	            default:
	                disabled = this.props.selectedNumbers.length === 0;
	                button = React.createElement(
	                    "button",
	                    { className: "btn btn-primary btn-lg",
	                        disabled: disabled,
	                        onClick: this.props.checkAnswer
	                    },
	                    "="
	                );
	        }
	        return React.createElement(
	            "div",
	            { id: "button-frame" },
	            button
	        );
	    }
	});

	var AnswerFrame = React.createClass({
	    displayName: "AnswerFrame",
	    render: function render() {
	        console.log(this.props.selectedNumbers);
	        var properties = this.props;
	        var selectedNumbers = properties.selectedNumbers.map(function (num) {
	            return React.createElement(
	                "span",
	                { key: num, onClick: properties.deselectNumber.bind(null, num) },
	                num
	            );
	        });

	        return React.createElement(
	            "div",
	            { id: "answer-frame" },
	            React.createElement(
	                "div",
	                { className: "well" },
	                selectedNumbers
	            )
	        );
	    }
	});

	var NumbersFrame = React.createClass({
	    displayName: "NumbersFrame",
	    render: function render() {

	        var numbers = 9,
	            className = undefined,
	            selectNumber = this.props.selectNumber,
	            selectedNumbers = this.props.selectedNumbers;

	        var numbersList = [];
	        for (var i = 1; i <= numbers; i++) {

	            className = 'number selected-' + (selectedNumbers.indexOf(i) >= 0);
	            numbersList.push(React.createElement(
	                "div",
	                { key: i, onClick: selectNumber.bind(null, i),
	                    className: className },
	                i
	            ));
	        }

	        return React.createElement(
	            "div",
	            { id: "numbers-frame" },
	            React.createElement(
	                "div",
	                { className: "well" },
	                numbersList
	            )
	        );
	    }
	});

	var Main = React.createClass({
	    displayName: "Main",
	    getInitialState: function getInitialState() {
	        return {
	            numberOfStars: Math.floor(Math.random() * 9) + 1,
	            selectedNumbers: [],
	            usedNumbers: [],
	            correct: null
	        };
	    },
	    selectNumber: function selectNumber(num) {

	        if (this.state.selectedNumbers.indexOf(num) < 0) {
	            this.setState({
	                selectedNumbers: this.state.selectedNumbers.concat(num),
	                correct: null
	            });
	        }
	    },
	    deselectNumber: function deselectNumber(number) {
	        var selectedNumbers = this.state.selectedNumbers;
	        var idx = selectedNumbers.indexOf(number);

	        selectedNumbers.splice(idx, 1);
	        this.setState({
	            selectedNumbers: selectedNumbers,
	            correct: null
	        });
	    },
	    sumOfSelectedNumbers: function sumOfSelectedNumbers() {
	        return this.state.selectedNumbers.reduce(function (x, y) {
	            return x + y;
	        }, 0);
	    },
	    checkAnswer: function checkAnswer() {
	        var correctAnswer = this.state.numberOfStars === this.sumOfSelectedNumbers();

	        this.setState({ correct: correctAnswer });
	    },
	    acceptAnswer: function acceptAnswer() {},
	    render: function render() {
	        var selectedNumbers = this.state.selectedNumbers;
	        var numberOfStars = this.state.numberOfStars;
	        var correct = this.state.correct;
	        return React.createElement(
	            "div",
	            { id: "game" },
	            React.createElement(
	                "h2",
	                null,
	                "Play Nine"
	            ),
	            React.createElement("hr", null),
	            React.createElement(
	                "div",
	                { className: "clearfix" },
	                React.createElement(StarsFrame, { numberOfStars: numberOfStars }),
	                React.createElement(ButtonFrame, {
	                    checkAnswer: this.checkAnswer,
	                    selectedNumbers: selectedNumbers,
	                    correct: correct
	                }),
	                React.createElement(AnswerFrame, {
	                    deselectNumber: this.deselectNumber,
	                    selectedNumbers: selectedNumbers })
	            ),
	            React.createElement(NumbersFrame, {
	                selectNumber: this.selectNumber,
	                selectedNumbers: selectedNumbers })
	        );
	    }
	});

	ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));

/***/ }
/******/ ]);