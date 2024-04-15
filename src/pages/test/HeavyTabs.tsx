const HeavyTabs = () => {
    let arr = [];
    for (let i = 0; i < 50000; i++) {
        arr.push(i);
    }
    return <div style={{ display: "flex", flexWrap: "wrap" }}>
        {arr.map((x) => <span key={x} style={{ width: 100, backgroundColor: "#eee" }}>
            {x}
        </span>)}
    </div>
}
export default HeavyTabs;