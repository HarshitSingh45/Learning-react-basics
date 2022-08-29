import React from "react";

class ConditionalRenderingIFELSE extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prev => ({
            isLoggedIn: !prev.isLoggedIn
        }));
    }
    // render(){
    //     if(this.state.isLoggedIn){
    //         return (
    //             <div>
    //                 <h1>Welcome Back</h1>
    //                 <button onClick={this.handleClick}>Sign Out</button>
    //             </div>
    //         )
    //     }else{
    //         return (
    //             <div>
    //                 <h1>Click button to sign in</h1>
    //                 <button onClick={this.handleClick}>Sign In</button>
    //             </div>
    //         )
    //     }
    // }

    // render() {
    //     let message;
    //     if(this.state.isLoggedIn){
    //         message = (<div>
    //                     <h1>Welcome Back</h1>
    //                     <button onClick={this.handleClick}>Sign Out</button>
    //                    </div>)
    //     }else{
    //         message = (<div>
    //             <h1>Click button to sign in</h1>
    //             <button onClick={this.handleClick}>Sign In</button>
    //            </div>)
    //     }
    //     return(
    //         <div>
    //             {message}
    //         </div>
    //     )
    // }

    render() {
        return(
            <div>
                {this.state.isLoggedIn ? 
                 <div>
                    <h1>Welcome Back</h1>
                    <button onClick={this.handleClick}>Sign Out</button>
                 </div> 
                 :
                 <div>
                    <h1>Click button to sign in</h1>
                    <button onClick={this.handleClick}>Sign In</button>
                 </div>}
            </div> 
        )
    }

    // render() {
    //     return(
    //         this.state.isLoggedIn 
    //         && 
    //         <div>
    //             <h1>Welcome Back</h1>
    //             <button onClick={this.handleClick}>Sign Out</button>
    //         </div> 
    //     )
    // }
}
export default ConditionalRenderingIFELSE;