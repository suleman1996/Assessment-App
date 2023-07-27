import Link from "./instance";
import axios from "axios";
import apiCallBackStatus from "./apiCallBackStatus";

const get_request = async ({ target, link }) => {
    try {
        const instance = axios.create(
            {
                baseURL: Link,
            });
        const response = await instance.get(target, link).catch((error) => {
            apiCallBackStatus({ error })
        })
        var res = response
        return res

    } catch (error) {
        console.log("get error", error);
        return "Error"
    }
}

export { get_request }
