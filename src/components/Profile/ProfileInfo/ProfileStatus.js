import React from "react";

class ProfileStatus extends React.Component {
    state={
        editMode: false,
        status: this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    statusChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate=(prevprops, prevstate)=>{
        if(prevprops.status!=this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.editMode?
                <input style={{color: "#2867B2", outline: "none", border: "1px solid blue"}} onChange={(e)=>this.statusChange(e)} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode}/>:
                <div style={{color: "#2867B2"}} onDoubleClick={this.activateEditMode}>{this.props.status|| "-----"}</div>}
            </div>
        )
    }
}

export default ProfileStatus;