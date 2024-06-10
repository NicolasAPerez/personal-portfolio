"use client"
import classes from "./NotificationTaskbar.module.css";
import {useState} from "react";

function NotificationTaskbar(props) {
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div className={classes.popup} onClick={() => setVisible(false)}>
                <p className={classes.popupText}>
                    {props.text}
                </p>
            </div>
        );
    }
    else{
        return (<div></div>);
    }
}

export default NotificationTaskbar;