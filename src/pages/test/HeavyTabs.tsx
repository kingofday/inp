const HeavyTabs = () => {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push(i);
    }
    return arr.map((x) => <span key={x}>
        {x}
    </span>)
}
export default HeavyTabs;