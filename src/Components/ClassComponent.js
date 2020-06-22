import React from 'react';

export default class ClassComonent extends React.Component {

    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    run = ()=>{
        this.inputRef.current.focus();
    }

    render(){
        return <div>
            hi from class

            <input ref={this.inputRef} />

            <button onClick={this.run}>run</button>
        </div>
    }

}
