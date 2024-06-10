import classes from "./OS-taskbar.module.css";
import InfoTaskbar from "@/app/components/Basic_OS_UI/TaskbarItems/InfoTaskbar";
import NotificationTaskbar from "@/app/components/Basic_OS_UI/TaskbarItems/NotificationTaskbar";

function OsTaskbar(props) {
    return (
        <div className={classes.taskbar}>
            <InfoTaskbar/>
            {props.notification && <NotificationTaskbar text={props.notification}/>}

        </div>
    );
}

export default OsTaskbar;