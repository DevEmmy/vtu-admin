import { useEffect, useState } from "react";
import { axiosConfig } from "@/utils/apiClient";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

const saveToStorage = (token: string, user: any) => {
    localStorage.setItem("AdminToken", token)
    localStorage.setItem("user", JSON.stringify(user))
}

export const useLogin = () => {
    const router = useNavigate();

    const [isError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState();

    const loginFn = async (data: any) => {
        try {
            setIsLoading(true);
            setError(false);
            let response = await axiosConfig.post("/auth/admin-sign-in", data);
            
            if (response.status === 200) {
                setResponse(response.data);
                const { token, user } = response.data.payload;
                saveToStorage(token, user);
                toastSuccess(response.data.message);
                console.log(response.data)
                router("/"); 
            } else {
                toastError(response.data.message); 
                setError(true);
            }
        } catch (err: any) {
            console.log(err);
            toastError(err.response.data.message);
            setIsLoading(false);
            setError(true);
            
            const errorMessage = err?.response?.data?.message || "An error occurred. Please try again.";
            toastError(errorMessage);
        } finally {
            setIsLoading(false); 
        }
    };

    return { isError, isLoading, response, loginFn };
};


export const useUser = ()=>{
  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user") as string))

  const fetchUser = async ()=>{
      let response = await axiosConfig.get("/auth/my-details");
      localStorage.setItem("user", JSON.stringify(response.data.payload))
      setUser(response.data.payload);
  }
  
  useEffect(()=>{
      fetchUser()
  }, [])

  return {user}
}

export const useLogout = () => {
    const navigate = useNavigate();
  
    const logout = () => {
      localStorage.removeItem("user");

      navigate("/sign-in");
    };
  
    return { logout };
  }

