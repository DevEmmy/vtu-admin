import { axiosConfig } from "../utils/apiClient";
import { useQuery } from 'react-query';


export const useAllTransactions = () => {
    const fetchTransactions = async () => {
        let response = await axiosConfig.get("/transaction/all")
        let data = response.data.payload;
        return data;
    }

    const { data: transactions, isError, isLoading } = useQuery("transaction", fetchTransactions)

    return { transactions, isError, isLoading };
}