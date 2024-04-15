import styles from "@/styles/test/react-kod-tabs.module.scss"
import { useState } from "react";
import { Tab, TabButtons, Tabs } from "react-kod";
import HeavyTabs from "./HeavyTabs";
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
const RKTabs = () => {
    const [activeTab, setActiveTab] = useState("0");
    const handleTabChange = (key: string) => {
        setActiveTab(key);
    }
    return <div className={styles.tabs}>
        <TabButtons
            onChange={handleTabChange}
            tabs={tabs.map(x => ({
                key: x.key,
                text: x.title
            }))}
        />
        {
            ((() => {
                switch (activeTab) {
                    case "0":
                        return <div>Tab 1</div>
                    case "1":
                        return <div>Tab 2</div>
                    case "2":
                        return <HeavyTabs />
                    default:
                        return <></>
                }
            })())
        }
    </div>;
}
export default RKTabs;