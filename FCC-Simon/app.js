class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="container">
                        <div className="firstRow">
                            <div className="box red">Hello</div>
                        <div className="box red">Hello</div>
                        </div>

                        <div className="secondRow">
                            <div className="box red">Hello</div>
                        <div className="box red">Hello</div>
                        </div>
                        
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));