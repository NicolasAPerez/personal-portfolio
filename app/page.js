import Image from "next/image";
import styles from "./page.module.css";
import OSBackground from "@/app/components/Basic_OS_UI/OS-background";
import OSTaskbar from "@/app/components/Basic_OS_UI/OS-taskbar";
import FwWindow from "@/app/components/FauxWindows/FW-Window";

export default function Home() {
    const listApps = ["SwitchToSimple","AboutMe", "ContactMe", "Projects", "Resume", "SourceCode", "MineSweeper", "Spellbound"];
    const propsApps = listApps.map((string) => ({name: string}));
    let notification = "This is a test of the notification system! Click to close!";

    return (
        <main>
            <OSBackground icons={propsApps}/>
            <OSTaskbar notification={notification}/>
        </main>
    );
}
