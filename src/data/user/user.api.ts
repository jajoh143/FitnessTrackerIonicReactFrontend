import axios from "axios";
import { constructUser } from "./user.model";
import { IUser } from "./user.types";

export const getUser = async(id: number): Promise<IUser> => {
    var userData = await axios.get(`http://localhost:3000/user/${id}`);
    console.log(userData);
    return constructUser(userData);
}

export const loginUser = async(username: string, password_hash: string): Promise<IUser> => {
    var postModel = {
        username,
        password_hash
    };
    var userData = await axios.post(`http://localhost:3000/user/login`, postModel);
    return constructUser(userData.data);
}