import HeaderBar from "./HeaderBar";
import SearchForm from "./SearchForm";
import EmployeeDirectory from "./EmployeeDirectory";
import React from "react";
import API from "../utils/API";
let nameBool = false;
let phoneBool = false; 
let emailBool = false; 
let dobBool = false;

class EmployeeDirectoryContainer extends React.Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        API.searchUsers()
            .then((res) => {
                let tempUsers = [];
                for (let i = 0; i < 50; i++) {
                    tempUsers[i] = {
                        name: `${res.data.results[i].name.first} ${res.data.results[i].name.last}`,
                        phone: res.data.results[i].phone,
                        email: res.data.results[i].email,
                        dob: res.data.results[i].dob.date.substr(0,10),
                        image: res.data.results[i].picture.thumbnail,
                        id: i
                    };
                };
                this.setState({ results: tempUsers });
            }).catch((err) => {
                console.log(err);
            })
    }

    
    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    };


    handleColumnClick = (event) => {
        const target = event.target.textContent;
        const sort_by = (field, reverse, primer) => {

            const key = primer ?
                function (x) {
                    return primer(x[field])
                } :
                function (x) {
                    return x[field]
                };

            reverse = !reverse ? 1 : -1;

            return function (a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
            }
        };

        
        if (target === "Name") {
            if (nameBool) {
                nameBool = false;
            } else {
                nameBool = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("name", nameBool, (a) => a.toUpperCase())) });
        }
        else if (target === "Phone") {
            if (phoneBool) {
                phoneBool = false;
            } else {
                phoneBool = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("phone", phoneBool, (a) => a.toUpperCase())) });
        }
        else if (target === "Email") {
            if (emailBool) {
                emailBool = false;
            } else {
                emailBool = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("email", emailBool, (a) => a.toUpperCase())) });
        }
        else if (target === "DOB") {
            if (dobBool) {
                dobBool = false;
            } else {
                dobBool = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("dob", dobBool, parseFloat)) });
        }
    }

    render() {
        return (
            <div>
                <HeaderBar />
                <SearchForm handleInputChange={this.handleInputChange} search={this.state.search} />
                <EmployeeDirectory results={this.state.results} handleColumnClick={this.handleColumnClick} />
            </div>
        );
    }
}

export default EmployeeDirectoryContainer;