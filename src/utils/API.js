import axios from "axios";

export default {
    searchUsers: function (query) {
        return axios.get(
            `https://randomuser.me/api/?results=50&nat=us`
        );
    },
};
