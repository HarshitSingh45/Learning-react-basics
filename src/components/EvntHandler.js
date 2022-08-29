import React from "react";

class EvntHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false
        }
    }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }
    render() {
        return(
            <div>
                <h1>LEARNING EVENT HANDLING</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
            
        )
    }
}
export default EvntHandler;