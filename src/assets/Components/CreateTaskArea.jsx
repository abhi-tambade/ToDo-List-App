import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';

function CreateTaskArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
      }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    const [isExpand, setIsExpand] = useState(false);
    function expandArea() {
        console.log("isExpand: " + isExpand);
        setIsExpand(true);
    }

    return (
        <form style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <div className="grid mt-5 w-full max-w-sm items-center gap-1.5">
                <Label style={{color: "#242424", fontSize: "1rem", fontWeight: "bold"}} htmlFor="title">Title of Task</Label>
                <Input onClick={expandArea} name="title" value={note.title} onChange={handleChange} style={{color: "#242424", fontSize: "1rem", boxShadow: "0 2px 5px #ccc"}} type="text" id="title" placeholder="Enter title of the task" />
            </div>
            {isExpand && (
            <>
                <div className="grid mt-5 w-full max-w-sm items-center gap-1.5">
                    <Label style={{color: "#242424", fontSize: "1rem", fontWeight: "bold"}} htmlFor="message">Description of Task</Label>
                    <Textarea name="content" value={note.content} onChange={handleChange} style={{color: "#242424", fontSize: "1rem", boxShadow: "0 2px 5px #ccc"}} placeholder="Enter a brief description" id="message" />
                </div>
                <div className="grid m-5 w-full max-w-sm" style={{display: "flex", justifyContent: "flex-start"}}>
                    <Zoom in={true} style={{boxShadow: "0 2px 5px #ccc"}}>
                        <Button onClick={handleClick} style={{ backgroundColor: "#F3CA52", padding: "0 10px"}}>
                        <AddIcon style={{marginRight: "5px"}}/>
                            Create Task
                        </Button>
                    </Zoom>
                </div>
            </>
            )}
        </form>
    );
};

export default CreateTaskArea;