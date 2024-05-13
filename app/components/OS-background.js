import classes from "./OS-background.module.css";
import OSBackgroundShortcut from "@/app/components/OS-backgroundshortcut";

function OsBackground(props) {
    const {icons} = props;
    console.log(icons);

    return (
        <div className={classes.background}>
            <div className={classes.shortcut_container}>
                {icons.map(icon => <OSBackgroundShortcut name={icon.name} key={icon.name}/>)}
            </div>

        </div>
    );
}

export default OsBackground;