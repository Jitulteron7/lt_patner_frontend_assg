import React from "react";
import classes from "./tabs.module.css";

const Tab = (props) => {
    const clickAction = (e) => {
        e.preventDefault();
        console.log('click action');
    }
    return (
        <>
            <div onClick={clickAction} style={props.tab?{backgroundColor:"#d7edffc5",color:"#3096f6"}:{}} className={classes.container}>
                {props.title}
            </div>
        </>)
}

export default Tab;