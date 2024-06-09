import classes from "./OS-taskbar.module.css";
import InfoTaskbar from "@/app/components/Basic OS UI/TaskbarItems/InfoTaskbar";

function OsTaskbar(props) {
    return (
        <div className={classes.taskbar}>
            <InfoTaskbar/>

        </div>
    );
}

export default OsTaskbar;