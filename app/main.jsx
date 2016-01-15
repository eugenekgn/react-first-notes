(()=> {

    var Button = React.createClass({
        clickEvent: function () {
            this.props.clickEvent(this.props.label)
        },
        render: function () {
            return (
                <a className="waves-effect waves-light btn"
                   onClick={this.clickEvent}>
                    {this.props.label}
                </a>
            )
        }
    });

    var Result = React.createClass({
        render: function () {
            return (
                <div className="row">
                    <div>{this.props.count}</div>
                </div>
            )
        }
    });

    var Main = React.createClass({
        getInitialState: function () {
            return {counter: 0};
        },
        handleClick: function (val) {
            this.setState({counter: this.state.counter + parseInt(val)});
        },
        render: function () {
            return (
                <div>
                    <div>
                        <Button label={'1'} clickEvent={this.handleClick}/>
                        <Button label={'5'} clickEvent={this.handleClick}/>
                        <Button label={'10'} clickEvent={this.handleClick}/>
                        <Button label={'100'} clickEvent={this.handleClick}/>
                    </div>
                    <Result count={this.state.counter}/>
                </div>
            )
        }
    });

    ReactDOM.render(<Main />, document.getElementById('root'));

})();