//import React from "react";
const styles = {
    searchBar: {
        margin: "auto",
        marginTop: "2ex",
        width: "25%",
    },
    submitButton: {
        display: "inlineBlock"
    }
};

function SearchForm(props) {
    return (
        <form>
            <div className="form-group" style={styles.searchBar}>
                <input
                    // onChange={props.handleInputChange}
                    // value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="search"
                    onChange = {props.handleInputChange}
                    value={props.search}
                />
                <button
                    onClick={props.handleFormSubmit}
                    className= {`btn btn-primary mt-3 ${styles.submitButton}`}
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
