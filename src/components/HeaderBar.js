import "./styles/HeaderBar.css"

function HeaderBar(props) {
    return (
        <div className = "header">
            <h1>Employee Directory</h1>
            <div>Click on carrots to filter by heading or use the search box to narrow your results.</div>
        </div>
    )
}
export default HeaderBar;