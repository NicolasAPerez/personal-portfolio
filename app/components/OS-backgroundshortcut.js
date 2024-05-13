import Image from "next/image";
import classes from "./OS-backgroundshortcut.module.css";

function OSBackgroundShortcut(props) {
    const iconName = props.name;

    if (iconName === undefined){
        return;
    }
    return (
        <button type="button" className={classes.shortcutButton}>

            <Image src={"/IconSets/" + iconName + ".png"} alt={iconName} width={100} height={100}/>
            <p className={classes.shortcutTitle}>
                {iconName.replace(/([A-Z])/g, ' $1').trim()}
            </p>
        </button>
    );
}

export default OSBackgroundShortcut;