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
            <div className="tile col-xs-4 col-md-4">
                <div className="thumbnail">
                    <img src={this.state.avatar_url} height="230" width="230"/>
                    <div className="caption">
                        <a href={this.state.html_url}>
                            <h3>{this.state.name}</h3>
                        </a>
                        <p>Text</p>
                    </div>
                </div>
            </div>
        );
    }
})


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
                <input ref="login" placeholder="github login"/>
                <button type="submit" className="btn btn-default">Add</button>
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
