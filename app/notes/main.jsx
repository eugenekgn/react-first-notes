(()=> {

    var Button = React.createClass({
        clickEvent () {
            this.props.clickEvent(this.props.toAdd)
        },
        render: function () {
            return (
                <button type="button" className="btn btn-default"
                        onClick={this.clickEvent}>
                    Add {this.props.toAdd}
                </button>
            )
        }
    });

    var Result = React.createClass({
        render () {
            return (
                <input type="text" className="form-control" value={this.props.count}/>
            )
        }
    });

    var Main = React.createClass({
        getInitialState () {
            return {counter: 0};
        },
        handleClick (val) {
            this.setState({counter: this.state.counter + parseInt(val)});
        },
        render () {
            return (
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-xs-6">
                            <div className="btn-group">
                                <Button toAdd={1} clickEvent={this.handleClick}/>
                                <Button toAdd={5} clickEvent={this.handleClick}/>
                                <Button toAdd={10} clickEvent={this.handleClick}/>
                                <Button toAdd={100} clickEvent={this.handleClick}/>
                            </div>
                        </div>
                        <div className="col-xs-2">
                            <Result count={this.state.counter}/>
                        </div>
                    </div>
                </div>
            )
        }
    });

    ReactDOM.render(<Main />, document.getElementById('root'));

})();