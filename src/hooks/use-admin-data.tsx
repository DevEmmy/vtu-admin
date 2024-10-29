import { axiosConfig } from "../utils/apiClient";
import { useQuery } from 'react-query';


export const useAdminData = () => {
    const fetchAdminData = async () => {
        let response = await axiosConfig.get("/admin-data")
        let data = response.data.payload;
        return data;
    }

    const { data: adminData, isError, isLoading } = useQuery("admin-data", fetchAdminData)

    return { adminData, isError, isLoading };
}