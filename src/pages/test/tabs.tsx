import { title } from "process";
import { useState, useTransition } from "react";
import styles from "@/styles/test/tabs.module.scss"
import HeavyTab from "./HeavyTab";
import TabButton from "./TabButton";
const tabs = [{
    key: "0",
    title: "title0"
},
{
    key: "1",
    title: "title1"
},
{
    key: "2",
    title: "title2"
}];
const Tabs = () => {
    const [activeTab, setActiveTab] = useState("0");
    const handleTabChange = (key: string) => {
        setActiveTab(key);
    }
    return <div className={styles.tabs}>
        <div className={styles.tabButtons}>
            {tabs.map((x) => <TabButton isActive={activeTab === x.key} key={x.key} className={x.key === activeTab ? styles.active : ""} onClick={() => handleTabChange(x.key)}>
                {x.title}
            </TabButton>)}
        </div>
        {activeTab === "0" && <div>Content 0</div>}
        {activeTab === "1" && <div>Content 1</div>}
        {activeTab === "2" && <HeavyTab />}
    </div>;
}
export default Tabs;