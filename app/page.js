import Image from "next/image";
import styles from "./page.module.css";
import OSBackground from "@/app/components/OS-background";
import OSTaskbar from "@/app/components/OS-taskbar";

export default function Home() {
    const listApps = ["SwitchToSimple","AboutMe", "ContactMe", "Projects", "Resume", "SourceCode", "MineSweeper", "Spellbound"];
    const propsApps = listApps.map((string) => ({name: string}));

    return (
        <main>
            <OSBackground icons={propsApps}/>
            <OSTaskbar/>
        </main>
    );
}
