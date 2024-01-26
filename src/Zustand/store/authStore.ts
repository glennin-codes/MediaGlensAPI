import { useHistory } from "@docusaurus/router";
import axios from "axios";
import { create } from "zustand";

type User = {
  email: string;
  name: string;
  id: string;
};
interface Values  {
  email: string;
  password: string;
 
};

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading:boolean;
  error:string;
  login: (values: Values) => Promise<void>;
  logout: () => void;
}
const TOKEN_STORAGE_KEY: string = "id";

export const useAuthStore = create<AuthState>((set) => {
  const storedToken: string = localStorage.getItem(TOKEN_STORAGE_KEY);
  return {
    isAuthenticated: Boolean(storedToken),
    user: null,
    isLoading:false,
    error:"",
    login: async (values: Values) => {
      try {
        set({isLoading:true});
        axios.interceptors.request.use(
          (config) => {
            config.withCredentials = true
            return config
          },
          (error) => {
            return Promise.reject(error)
          }
        )
        const res = await axios.post(
          "http://localhost:8080/api/auth/login",
          values,
      
        );
        const {  id, name } = res.data;
       
        if (res.status == 200 && id && name) {

          set({
            isAuthenticated: true,
            user: {
              name,
              email: values.email,
              id,
            },
            error:"",
            isLoading:false
          });

          localStorage.setItem("id", id);
           
          
        }
      } catch (error) {

        set({isLoading:false});
        console.error(error);
        set({error:error?.response?.data?.message || "an error ocured"})
      }
    },
    logout: () => {
      set({ isAuthenticated: false, user: null,  });

      localStorage.removeItem("id");
    },
  };
});
