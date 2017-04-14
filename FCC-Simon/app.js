class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lit: 0,
            lighting: false,
            gameSequence: [2, 3, 1, 4, 3]
        };
    }

    lightUp(num){
        this.setState({
            lit: num
        }, () => {
            setTimeout(() => {
         this.setState({
             lit: 0
         })   
        }, 500)
        })
    }

    gameStart(){
        let i = 0;
        var interval = setInterval(() => {
            // let random = Math.floor(Math.random() * 4) + 1;
            // console.log(random);
            this.lightUp(this.state.gameSequence[i]);
            i++;
            if(i === this.state.gameSequence.length - 1){
                clearInterval(interval);
            } 
        }, 700);
    }
    render() {

        return (
            <div>
                <button onClick={() => this.gameStart()}>Start</button>
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