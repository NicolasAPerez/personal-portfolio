import Image from "next/image";
import styles from "./page.module.css";
import OSBackground from "@/app/components/OS-background";
import OSTaskbar from "@/app/components/OS-taskbar";

export default function Home() {
  return (
      <main>
            <OSBackground/>
            <OSTaskbar/>

      </main>

  );
}
