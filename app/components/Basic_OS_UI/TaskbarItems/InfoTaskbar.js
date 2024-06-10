"use client"
import classes from "./InfoTaskbar.module.css";
import {useEffect, useState} from "react";

function InfoTaskbar(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={classes.taskbarInfo}>
            <p className={classes.clock}>
                <b>
                    {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
                    <br/>
                    {date.toLocaleTimeString()}
                </b>
            </p>


        </div>
    );
}

export default InfoTaskbar;