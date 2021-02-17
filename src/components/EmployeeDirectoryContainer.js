import HeaderBar from "./HeaderBar";
import SearchForm from "./SearchForm";
import EmployeeDirectory from "./EmployeeDirectory";
import React from "react";
import API from "../utils/API";
let columnBooleans = {
    name: false,
    phone: false,
    email: false,
    dob: false
};
let allUsers = [];

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
                        dob: res.data.results[i].dob.date.substr(0, 10),
                        image: res.data.results[i].picture.large,
                        id: i
                    };
                };
                this.setState({ results: tempUsers });
                allUsers = [...this.state.results];
            }).catch((err) => {
                console.log(err);
            })
    }


    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        }, () => {
            this.filterUsersBySearch();
        })
    };

    filterUsersBySearch = () => {
        let tempArray = [];
        console.log(this.state.search);
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].name.indexOf(this.state.search) !== -1 || allUsers[i].email.indexOf(this.state.search) !== -1 || allUsers[i].phone.indexOf(this.state.search) !== -1 || allUsers[i].dob.indexOf(this.state.search) !== -1)
                tempArray.push(allUsers[i]);
        }
        this.setState({results: tempArray});
    }

    handleColumnClick = (target) => {
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
            if (columnBooleans.name) {
                columnBooleans.name = false;
            } else {
                columnBooleans.name = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("name", columnBooleans.name, (a) => a.toUpperCase())) });
        }
        else if (target === "Phone") {
            if (columnBooleans.phone) {
                columnBooleans.phone = false;
            } else {
                columnBooleans.phone = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("phone", columnBooleans.phone, (a) => a.toUpperCase())) });
        }
        else if (target === "Email") {
            if (columnBooleans.email) {
                columnBooleans.email = false;
            } else {
                columnBooleans.email = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("email", columnBooleans.email, (a) => a.toUpperCase())) });
        }
        else if (target === "DOB") {
            if (columnBooleans.dob) {
                columnBooleans.dob = false;
            } else {
                columnBooleans.dob = true;
            }
            this.setState({ results: this.state.results.sort(sort_by("dob", columnBooleans.dob, (a) => a.toUpperCase())) });
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