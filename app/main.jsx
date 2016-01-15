(()=> {

    var Button = React.createClass({
        render: function () {
            return (
                <a className="waves-effect waves-light btn"
                   onClick={this.props.clickEvent}>
                    {this.props.label}
                </a>
            )
        }
    });

    var Result = React.createClass({
        render: function () {
            return (
                <div class="row">
                    <div>{this.props.count}</div>
                </div>
            )
        }
    });

    var Main = React.createClass({
        getInitialState: function () {
            return {counter: 0};
        },
        handleClick: function () {
            this.setState({counter: this.state.counter + 1});
        },
        render: function () {
            return (
                <div className="container">
                    <Button label={'Count!'} clickEvent={this.handleClick}/>
                    <Result count={this.state.counter}/>
                </div>
            )
        }
    });

    ReactDOM.render(<Main />, document.getElementById('root'));

})();