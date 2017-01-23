import React,{Component} from 'react';

// export default class extends Component{
const MyComponet = class MyComponet extends Component {
    render(){
        return(
            <div className="wrapper">
                <div className="left">
                    <h1>webpack</h1>
                    <p>first of all,I should know how to use webpack!</p>
                </div>
                <div className="middle">
                    <h1>react</h1>
                    <p>second of all,I should know how to write react!</p>
                </div>
                <div className="right">
                    <h1>project</h1>
                    <p>At last,now it's time to write great codes!</p>
                </div>
            </div>
        ) ;       
    }
}

module.exports = MyComponet;

