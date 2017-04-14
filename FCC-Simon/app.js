class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lit: 0
        };
    }

    lightUp(num){
        this.setState({
            lit: num
        }, setTimeout(() => {
         this.setState({
             lit: 0
         })   
        }, 500))
    }
    render() {

        return (
            <div>
                <div className="container">
                    <div className="firstRow">
                        <div className={classNames('box red faded', {lit: this.state.lit === 1})}onClick={ () => this.lightUp(1) }></div>
                        <div className={classNames('box blue faded', {lit: this.state.lit === 2})}onClick={ () => this.lightUp(2) }></div>
                    </div>

                    <div className="secondRow">
                        <div className={classNames('box green faded', {lit: this.state.lit === 3})}onClick={ () => this.lightUp(3) }></div>
                        <div className={classNames('box yellow faded', {lit: this.state.lit === 4})}onClick={ () => this.lightUp(4) }></div>
                    </div>

                </div>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));