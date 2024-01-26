import { useHistory } from "@docusaurus/router";
import axios from "axios";
import { create } from "zustand";

type User = {
  email: string;
  name: string;
  id: string;
};
type newUser = {
  email: string;
  name: string;
  
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
  signUp:(newUser:newUser)=>Promise <void>;
  logout: () => void;
}
export const useAuthStore = create<AuthState>((set) => {
   // Check for existing authentication on load
   const storedId =JSON.parse (localStorage.getItem("id"));
   const initialAuthState = {
     isAuthenticated: Boolean(storedId),
     user: null,
     isLoading: false,
     error: "",
   };
 
   set({ ...initialAuthState });
  return {
    ...initialAuthState,
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

          localStorage.setItem("id", JSON.stringify(id));
          localStorage.setItem("name", JSON.stringify(name));

        }
      } catch (error) {

        set({isLoading:false});
        if (axios.isCancel(error)) {
          // Handle cancellation
          console.error("Request canceled:", error.message);
        } else if (error.response) {
          // The request was made, but the server responded with an error status
          const status = error?.response?.status as number;
          const message= error.response?.message?.error as string
          
          if (status === 500) {
            // Handle Internal Server Error (status code 500)
            console.error("Internal Server Error:", message);   
              set({error:message})
          } else if (status === 401) {
            // Handle Not Found Error (status code 404)
            console.error("Unauthorized:", message);
            set({error:message})
          } else {
            // Handle other HTTP status codes if needed
            console.error("Server Error:", status, message);
            set({error:message})
          }
        } else if (error.request) {
          // The request was made, but no response was received
          // console.error("Request Error:", error.request);
      
          // Handle network errors
          if (!navigator.onLine) {
            set({error:"Network Error: No internet connection"});
            console.error("Network Error: No internet connection");
          } else {
            console.error("Network Error:", error.message);
            set({error:"something Went wrong.please try again later"});
          }
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
          set({error:"something Went wrong.please try again later"});
        }
        
      }finally{
        set({isLoading:false});
      }
    
      
    },
    signUp:async (newUser:newUser)=>{
      set({isLoading:true});
      try {
        const res = await axios.post(
          "http://localhost:8080/api/auth/signup",
          newUser,
         
      
        );
        const {  id, name } = res.data;
       
        if (res.status == 200 && id && name) {

          set({
            isAuthenticated: true,
            user: {
              name,
              email: newUser.email,
              id,
            },
            error:"",
            isLoading:false
          });
      
        }
      } catch (error) {
        set({isLoading:false});
        if (axios.isCancel(error)) {
          // Handle cancellation
          console.error("Request canceled:", error.message);
        } else if (error.response) {
          // The request was made, but the server responded with an error status
          const status = error?.response?.status as number;
          const message= error.response?.message?.error as string
          
          if (status === 500) {
            // Handle Internal Server Error (status code 500)
            console.error("Internal Server Error:", message);   
              set({error:message})
          } else if (status === 409) {
            // Handle Not Found Error (status code 404)
            console.error("Conflict Error:", message);
            set({error:message})
          } else {
            // Handle other HTTP status codes if needed
            console.error("Server Error:", status, message);
            set({error:message})
          }
        } else if (error.request) {
          // The request was made, but no response was received
          // console.error("Request Error:", error.request);
      
          // Handle network errors
          if (!navigator.onLine) {
            set({error:"Network Error: No internet connection"});
            console.error("Network Error: No internet connection");
          } else {
            console.error("Network Error:", error.message);
            set({error:"something Went wrong.please try again later"});
          }
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
          set({error:"something Went wrong.please try again later"});
        }
        
      }finally{
        set({isLoading:false});
      }
        
    },
    logout: () => {
      set({ isAuthenticated: false, user: null,  });

      localStorage.removeItem("id");
    },
  };
});
