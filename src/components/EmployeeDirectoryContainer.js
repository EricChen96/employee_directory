import HeaderBar from "./HeaderBar";
import SearchForm from "./SearchForm";
import EmployeeDirectory from "./EmployeeDirectory";
import React from "react";
import API from "../utils/API";

class EmployeeDirectoryContainer extends React.Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        API.searchUsers()
            .then((res) => {
                let tempUsers = [];
                for(let i = 0; i < 50; i++) {
                    tempUsers[i] = {
                        name: `${res.data.results[i].name.first} ${res.data.results[i].name.last}`,
                        phone: res.data.results[i].phone,
                        email: res.data.results[i].email,
                        dob: res.data.results[i].dob.date,
                        image: res.data.results[i].picture.thumbnail,
                        id: i
                    };
                };
                this.setState({ results: tempUsers});
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
        console.log(this.state.search);
      };

    render() {
        return (
            <div>
                <HeaderBar />
                <SearchForm handleInputChange={this.handleInputChange} search={this.state.search}/>
                <EmployeeDirectory results={this.state.results} />
            </div>
        );
    }
}

export default EmployeeDirectoryContainer;