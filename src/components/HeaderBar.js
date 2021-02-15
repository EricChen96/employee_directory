const styles = {
    header: {
        textAlign: "center",
        color: "white",
        backgroundColor: "rgb(15, 15, 92)",
        padding: "6ex",
        borderStyle: "solid",
        borderBottomColor: "red",
        borderBottomWidth: "1ex"
    }
};

function HeaderBar(props) {
    return (
        <div style={styles.header}>
            <h1>Employee Directory</h1>
            <div>Click on carrots to filter by heading or use the search box to narrow your results.</div>
        </div>
    )
}
export default HeaderBar;