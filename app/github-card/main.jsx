import GitHubModel from './github.model'

let Card = React.createClass({
    getInitialState(){
        return {};
    },
    componentDidMount() {
        var that = this;
        var gitHubModule = new GitHubModel();
        gitHubModule.getData(this.props.login).then(function (data) {
            that.setState(data);
        });
    },
    render () {
        return (
            <div id={this.state.id} className="tile col-xs-4 col-md-4">
                <div className="thumbnail">
                    <img src={this.state.avatar_url} height="230" width="230"/>
                    <div className="caption">
                        <a href={this.state.html_url}>
                            <h3>{this.state.name}</h3>
                        </a>
                        <a href={this.state.url}>{this.state.login }</a>
                    </div>
                </div>
            </div>
        );
    }
});


let Form = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login);
        // Add the card
        this.props.addCard(loginInput.value);
        // reset input to empty
        loginInput.value = '';
    },
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input type="text" ref="login" className="form-control" placeholder="github login"/>
                            <span className="input-group-btn">
                             <button className="btn btn-default" type="submit">Go!</button>
                         </span>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

let Main = React.createClass({
    getInitialState(){
        return {
            logins: []
        }
    },
    addCard(login){
        this.setState({logins: this.state.logins.concat(login)});
    },
    render() {
        var cards = this.state.logins.map((login)=> {
            return (<Card login={login}/>);
        });
        return (
            <div className="container">
                <Form addCard={this.addCard}/>
                <div className="row">
                    {cards}
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));
