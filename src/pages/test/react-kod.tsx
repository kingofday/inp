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
            <Tab title="tab2" key="1">
                <div>Tab 2</div>
            </Tab>
            <Tab title="tab3" key="2">
                <div style={{ display: "flex", gap: "10px",maxWidth:"100%",flexWrap:"wrap" }}>
                    {(() => {
                        let arr = [];
                        for (let i = 0; i < 1000; i++) {
                            arr.push(i);
                        }
                        return arr.map((x) => <span key={x}>
                            {x}
                        </span>)
                    })()}
                </div>
            </Tab>
        </Tabs>
    </div>;
}
export default RKTabs;