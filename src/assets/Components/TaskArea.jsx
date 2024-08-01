import React from "react";

import AddTaskIcon from '@mui/icons-material/AddTask';

function TaskArea(props) {
    function handleClick() {
        //console.log("<TaskArea />: handleClick() called...")
        props.onDelete(props.id);
    }

    return (
        <div style={{width: "15rem", margin: "1rem", color: "#242424", }}>
            <div style={{backgroundColor: "white", padding: "1rem", border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: "0.375rem", boxShadow: "0 2px 5px #ccc"}}>
                <h1 style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", wordWrap: "break-word", whiteSpace: "pre-wrap"}}>
                    {props.title}
                </h1>
                <p style={{wordWrap: "break-word", whiteSpace: "pre-wrap", marginBottom: "0.5rem"}}>
                    {props.content}
                </p>
                <div style={{display: "flex", justifyContent: "flex-end",}}>
                    <button onClick={handleClick}>
                        <AddTaskIcon style={{ fontSize: "1.5rem", color: "#F3CA52" }} />
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default TaskArea;