import React from "react";

class LearningForm extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }
handleSubmit = (e) => {
    alert("hello");
    e.preventDefault();
}
handleChange = (e) => {
    this.setState({
        text: e.target.value
    })
}
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label >Name</label>
                    <input type="text" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}
export default LearningForm;