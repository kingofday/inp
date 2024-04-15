const HeavyTabs = ({ isActive = true }: { isActive?: boolean }) => {
    let arr = [];
    for (let i = 0; i < 50000; i++) {
        arr.push(i);
    }
    if(!isActive) return null;
    return <div style={{ display: isActive ? "flex" : "none", flexWrap: "wrap" }}>
        {arr.map((x) => <span key={x} style={{ width: 100, backgroundColor: "#eee" }}>
            {x}
        </span>)}
    </div>
}
export default HeavyTabs;