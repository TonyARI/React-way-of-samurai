import React, { useEffect, useState } from "react";


function ProfileStatusWithHoc(props) {
    let [editMode, setEditMode]=useState(false);
    let [status, setStatus]=useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    
    let activateEditMode=()=>{
        setEditMode(true)
    }
    let deactivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(status);
    }
    let changeStatus=(e)=>{
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {editMode?
            <input style={{color: "#2867B2", outline: "none", border: "1px solid blue"}} value={status} onChange={(e)=>changeStatus(e)} onBlur={deactivateEditMode} autoFocus={true}/>:
            <div onDoubleClick={activateEditMode} style={{color: "#2867B2"}}>{status|| "-----"}</div>}
        </div>
    )
}

export default ProfileStatusWithHoc;