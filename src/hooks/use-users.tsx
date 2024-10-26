import { axiosConfig } from "../utils/apiClient";
import { useQuery } from 'react-query';


export const useAllUsers = () => {
    const fetchUsers = async () => {
        let response = await axiosConfig.get("/auth")
        let data = response.data.payload
        return data;
    }

    const { data: users, isError, isLoading } = useQuery("users", fetchUsers)


    return { users, isError, isLoading };
}