//import React from "react";
const styles = {
    img: {
        width: "50px",
        height: "90px"
    },
    employeeResult: {
        marginTop: "10px"
    }
};

function EmployeeDirectory(props) {
    return (
        <div className="container">
            <div className="row columnTitle">
                <div className="col-md-2">Image</div>
                <div className="col-md-2">Name</div>
                <div className="col-md-3">Phone</div>
                <div className="col-md-3">Email</div>
                <div className="col-md-2">DOB</div>
            </div>
            {props.results.map((result) => (
                <div className="row" key = {result.id} style = {styles.employeeResult}>
                    <img className="col-md-2" src={result.image} alt={result.name} style={styles.img}/>
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
