import axios from "axios";

export default class UserService {
    constructor() {
        this.uri = "http://localhost:8880";
    }

    async authenticate(email, password) {
        return await axios.get(this.uri+"/login", {
            params:{"email":email,"passwd":password}
        }).then(response => {
            return response;
        });
    }

    async persist(user) {
        return await axios.post(this.uri+"/user", {user}).then(response => {
            console.log(response);
        });
    }
}
