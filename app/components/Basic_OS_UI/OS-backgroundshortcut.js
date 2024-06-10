"use client"
import Image from "next/image";
import classes from "./OS-backgroundshortcut.module.css";
import {useState} from "react";

function OSBackgroundShortcut(props) {
    const iconName = props.name;
    const [windowOpen, setWindowOpen] = useState(false)

    function toggleWindowOpen(){
        setWindowOpen((prevStatus) => !prevStatus);
    }

    if (iconName === undefined){
        return;
    }
    return (
        <button type="button" className={classes.shortcutButton} onClick={toggleWindowOpen}>

            <Image src={"/IconSets/" + iconName + ".png"} alt={iconName} width={100} height={100}/>
            <p className={classes.shortcutTitle}>
                {iconName.replace(/([A-Z])/g, ' $1').trim()}
            </p>
        </button>
    );
}

export default OSBackgroundShortcut;