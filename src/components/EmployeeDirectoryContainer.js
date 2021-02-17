import HeaderBar from "./HeaderBar";
import SearchForm from "./SearchForm";
import EmployeeDirectory from "./EmployeeDirectory";
import React from "react";
import API from "../utils/API";

const employeeList = [
    {
        name: "John Smith",
        phone: "100-000-0000",
        email: "johnSmith@gmail.com",
        dob: "Jan 1, 1990",
        image: "https://c8.alamy.com/comp/BPNT8G/brad-pitt-mr-and-mrs-smith-mr-and-mrs-smith-mr-mrs-smith-mr-mrs-smith-BPNT8G.jpg",
        id: 1
    },
    {
        name: "Jane Smith",
        phone: "100-000-0000",
        email: "janeSmith@gmail.com",
        dob: "Jan 30, 1990",
        image: "https://cdn.onebauer.media/one/empire-tmdb/films/787/images/n4GhKs24bQK2XsdlZ5bZFljzlsK.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg",
        id: 2
    },
    {
        name: "John Wick",
        phone: "100-000-0000",
        email: "chosenOne@gmail.com",
        dob: "Jan 30, 1990",
        image: "https://www.indiewire.com/wp-content/uploads/2019/05/07956f40-77c4-11e9-9073-657a85982e73.jpg?w=780",
        id: 3
    }
];

class EmployeeDirectoryContainer extends React.Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {

    }

    

    render() {
        return (
            <div>
                <HeaderBar />
                <SearchForm />
                <EmployeeDirectory results={employeeList} />
            </div>
        );
    }
}

export default EmployeeDirectoryContainer;