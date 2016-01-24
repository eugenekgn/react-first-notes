var StarsFrame = React.createClass({
    render(){

        var numberOfStars = this.props.numberOfStars;
        var stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            stars.push(
                <span key={i} className="glyphicon glyphicon-star">

                </span>
            );
        }

        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>

        )
    }
});

var ButtonFrame = React.createClass({
    render(){
        let disabled,
            button,
            correct = this.props.correct;

        switch (correct) {
            case true:
                button = (
                    <button className="btn btn-success btn-lg">
                        <span className="glyphicon glyphicon-ok">

                        </span>
                    </button>
                );
                break;
            case false:
                button = (
                    <button className="btn btn-danger btn-lg">
                        <span className="glyphicon glyphicon-remove">

                        </span>
                    </button>
                );
                break;
            default:
                disabled = this.props.selectedNumbers.length === 0;
                button = (
                    <button className="btn btn-primary btn-lg"
                            disabled={disabled}
                            onClick={this.props.checkAnswer}
                    >
                        =
                    </button>
                )
        }
        return (
            <div id="button-frame">
                {button}
            </div>
        )
    }
});

var AnswerFrame = React.createClass({

        render()
        {
            console.log(this.props.selectedNumbers);
            let properties = this.props;
            let selectedNumbers = properties.selectedNumbers.map(
                num => {
                    return <span key={num} onClick={properties.deselectNumber.bind(null, num)}>
                        {num}
                    </span>
                }
            );

            return (
                <div id="answer-frame">
                    <div className="well">
                        {selectedNumbers}
                    </div>
                </div>
            )
        }
    })
    ;

var NumbersFrame = React.createClass({
    render(){

        let numbers = 9,
            className,
            selectNumber = this.props.selectNumber,
            selectedNumbers = this.props.selectedNumbers;


        let numbersList = [];
        for (let i = 1; i <= numbers; i++) {

            className = 'number selected-' + (selectedNumbers.indexOf(i) >= 0);
            numbersList.push(<div key={i} onClick={selectNumber.bind(null, i)}
                                  className={className}>{i}</div>)
        }

        return (
            <div id="numbers-frame">
                <div className="well">
                    {numbersList}
                </div>
            </div>
        )
    }
});

let Main = React.createClass({
    getInitialState(){
        return {
            numberOfStars: Math.floor(Math.random() * 9) + 1,
            selectedNumbers: [],
            usedNumbers: [],
            correct: null
        }
    },
    selectNumber(num) {

        if (this.state.selectedNumbers.indexOf(num) < 0) {
            this.setState({
                    selectedNumbers: this.state.selectedNumbers.concat(num),
                    correct: null
                }
            )
        }
    },
    deselectNumber(number){
        let selectedNumbers = this.state.selectedNumbers;
        let idx = selectedNumbers.indexOf(number);

        selectedNumbers.splice(idx, 1);
        this.setState({
            selectedNumbers: selectedNumbers,
            correct: null
        });
    },
    sumOfSelectedNumbers(){
        return this.state.selectedNumbers.reduce((x, y) => {
            return x + y;
        }, 0);
    },
    checkAnswer(){
        var correctAnswer = (this.state.numberOfStars === this.sumOfSelectedNumbers());

        this.setState({correct: correctAnswer})
    },
    acceptAnswer(){

    },
    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let numberOfStars = this.state.numberOfStars;
        let correct = this.state.correct;
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                    <StarsFrame numberOfStars={numberOfStars}/>
                    <ButtonFrame
                        checkAnswer={this.checkAnswer}
                        selectedNumbers={selectedNumbers}
                        correct={correct}
                    />
                    <AnswerFrame
                        deselectNumber={this.deselectNumber}
                        selectedNumbers={selectedNumbers}/>
                </div>

                <NumbersFrame
                    selectNumber={this.selectNumber}
                    selectedNumbers={selectedNumbers}/>
            </div>

        )
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
