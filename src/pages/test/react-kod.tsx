import styles from "@/styles/test/react-kod-tabs.module.scss"
import { useState } from "react";
import { Tab, Tabs } from "react-kod";
const RKTabs = () => {
    const [activeTab, setActiveTab] = useState("0");
    const handleTabChange = (key: string) => {
        setActiveTab(key);
    }
    return <div className={styles.tabs}>
        <Tabs onChange={handleTabChange} activeTab={activeTab}>
            <Tab title="tab1" key="0">
                <div>Tab 1</div>
            </Tab>
            <Tab title="tab1" key="1">
                <div>Tab 2</div>
            </Tab>
        </Tabs>
    </div>;
}
export default RKTabs;