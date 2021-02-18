import React, { useState } from "react";
const styles = {
    img: {
        width: "10px",
        height: "90px"
    },
    employeeResult: {
        marginTop: "10px"
    },
    columnTitle: {
        fontWeight: "bold"
    },
    triangle: {
        position: "absolute",
        display: "inlineBlock",
        marginTop: "5px",
        marginLeft: "3px",
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid #f00"
        
    }
};

function EmployeeDirectory(props) {
    const [isShown, setIsShown] = useState(false);
    const [hoverColumn, setHoveredColumn] = useState("");

    function handleMouseEvent(isShown, hoverColumn) {
        setIsShown(isShown);
        setHoveredColumn(hoverColumn);
    }


    return (
        <div className="container">
            <div className="row columnTitle" style={styles.columnTitle}>
                <div className="col-md-2" >Image</div>
                <div className="col-md-2"
                    onMouseEnter={() => {
                        handleMouseEvent(true, "Name");
                    }}
                    onMouseLeave={() => {
                        handleMouseEvent(false, "");
                    }}
                    onClick={() => props.handleColumnClick("Name")}>Name {(isShown && hoverColumn === "Name") && (<span style={styles.triangle}></span>)}</div>
                <div className="col-md-3"
                    onMouseEnter={() => {
                        handleMouseEvent(true, "Phone");
                    }}
                    onMouseLeave={() => {
                        handleMouseEvent(false,"");
                    }}
                    onClick={() => props.handleColumnClick("Phone")}>Phone {(isShown && hoverColumn === "Phone") && (<span style={styles.triangle}></span>)}</div>
                <div className="col-md-3"
                    onMouseEnter={() => {
                        handleMouseEvent(true, "Email");
                    }}
                    onMouseLeave={() => {
                        handleMouseEvent(false,"");
                    }}
                    onClick={() => props.handleColumnClick("Email")}>Email {(isShown && hoverColumn === "Email") && (<span style={styles.triangle}></span>)}</div>
                <div className="col-md-2"
                    onMouseEnter={() => {
                        handleMouseEvent(true, "DOB");
                    }}
                    onMouseLeave={() => {
                        handleMouseEvent(false,"");
                    }}
                    onClick={() => props.handleColumnClick("DOB")}>DOB {(isShown && hoverColumn === "DOB") && (<span style={styles.triangle}></span>)}</div>
            </div>
            {props.results.map((result) => (
                <div className="row" key={result.id} style={styles.employeeResult}>
                    <img className="col-md-2" src={result.image} alt={result.name} style={styles.img} />
                    <div className="col-md-2">{result.name}</div>
                    <div className="col-md-3">{result.phone}</div>
                    <div className="col-md-3">{result.email}</div>
                    <div className="col-md-2">{result.dob}</div>
                </div>
            ))}
        </div>
    );
}

export default EmployeeDirectory;
