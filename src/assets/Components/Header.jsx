import React from "react";
import "./Header.css"
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function Header() {
    return (
        <div className="header">
            <AssignmentTurnedInIcon style={{fontSize: 40, margin: "10px"}}/>
            <h1> Keeper App</h1>
        </div>
    );
}

export default Header