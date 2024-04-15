import { title } from "process";
import { useState } from "react";
import styles from "@/styles/test/tabs.module.scss"
const tabs = [{
    key: "0",
    title: "title1"
},
{
    key: "1",
    title: "title2"
},
{
    key: "2",
    title: "title3"
}];
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("0");
    const handleTabChange = (key: string) => {
        setActiveTab(key);
    }
    return <div className={styles.tabs}>
        <div className={styles.tabButtons}>
            {tabs.map((x) => <button key={x.key} onClick={() => handleTabChange(x.key)} className={x.key===activeTab?styles.active:""}>
                {x.title}
            </button>)}
        </div>
        {tabs.map((x) => <div key={x.key} className={`${styles.tabContent} ${x.key === activeTab ? styles.active : ""}`}>
            {x.title}
        </div>)}
    </div>;
}
export default Tabs;