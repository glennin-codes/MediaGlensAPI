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
  password:string;
};

interface Values {
  email: string;
  password: string;

}
type Verify ={
  email: string;
  code:string;
  expirationTimestamp:string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string;
  success: string ;

  login: (values: Values) => Promise<void>;
  signUp: (newUser: newUser) => Promise<void>;
  verify:(verify:Verify) => Promise<void>;
  logout: () => void;
  resetState:()=>void;
}
export const useAuthStore = create<AuthState>((set) => {
  // Check for existing authentication on load
  const id =
  typeof window !== "undefined" ? localStorage.getItem("id") : null;

  const initialAuthState = {
    isAuthenticated: Boolean(id),
    user: null,
    isLoading: false,
    error: "",
    success: "",
  };

  set({ ...initialAuthState });
  return {
    ...initialAuthState,
    login: async (values: Values) => {
      set({error:""});
      set({success:""});
      try {
        set({ isLoading: true });
        axios.interceptors.request.use(
          (config) => {
            config.withCredentials = true;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        const res = await axios.post(
          "http://localhost:8080/api/auth/login",
          values
        );
        const { id, name } = res.data;

        if (res.status == 200 && id && name) {
          set({
            isAuthenticated: true,
            user: {
              name,
              email: values.email,
              id,
            },
            error: "",
            isLoading: false,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
          }
        }
      } catch (error) {
        set({success:""})
        set({ isLoading: false });
        if (axios.isCancel(error)) {
          // Handle cancellation
          console.error("Request canceled:", error.message);
        } else if (error.response) {
          // The request was made, but the server responded with an error status
          const status = error?.response?.status as number;
          const message = error.response?.message?.error as string;

          if (status === 500) {
            
            console.error("Internal Server Error:", message);
            set({ error: message });
          } else if (status === 401) {
            
            console.error("Unauthorized:", message);
            set({ error: message });
          } else {
           
            console.error("Server Error:", status, message);
            set({ error: message });
          }
        } else if (error.request) {
        
          if (!navigator.onLine) {
            set({ error: "Network Error: No internet connection" });
            console.error("Network Error: No internet connection");
          } else {
            console.error("Network Error:", error.message);
            set({ error: "something Went wrong.please try again later" });
          }
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
          set({ error: "something Went wrong.please try again later" });
        }
      } finally {
        set({ isLoading: false });
      }
    },
    signUp: async (newUser:newUser) => {
      set({ isLoading: true });
      set({error:""});
      set({success:""});
      try {
        const res = await axios.post(
          "http://localhost:8080/api/auth/signup",
          newUser
        );
        const { message } = res.data;
console.log(res.data);
console.log(message);
        if (res.status == 201 ) {
          set({
            isAuthenticated: false,
            user: {
              name: newUser.name,
              email: newUser.email,
              id: "",
            },
            error: "",
            success: String(message),
            isLoading: false,
          });
        }
      } catch (error) {
        set({success:""})
        set({ isLoading: false });
        console.log(error?.response);
        if (axios.isCancel(error)) {
   
          console.error("Request canceled:", error.message);
        } else if (error.response) {
          const status = error?.response?.status as number;
          const message = error.response?.data?.error as string;

          if (status === 500) {
            
            console.error("Internal Server Error:", message);
            set({ error: message });
          } else if (status === 409) {
            // Handle Not Found Error (status code 404)
            console.error("Conflict Error:", message);
            set({ error: message });
          } else {
            // Handle other HTTP status codes if needed
            console.error("Server Error:", status, message);
            set({ error: message });
          }
        } else if (error.request) {
          // The request was made, but no response was received
          // console.error("Request Error:", error.request);

          // Handle network errors
          if (!navigator.onLine) {
            set({ error: "Network Error: No internet connection.Please Check your Connections and Try again" });
            console.error("Network Error: No internet connection.Please Check your Connections and Try again");
          } else {
            set({ error: "something Went wrong.please try again later" });
            console.error("frontend error", error.message);
            
          }
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
          set({ error: "something Went wrong.please try again later" });
        }
      } finally {
        set({ isLoading: false });
      }
    },
    verify:async(verify:Verify)=>{
      set({error:""});
      set({success:""})
      try {
        axios.interceptors.request.use(
          (config) => {
            config.withCredentials = true;
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        const res = await axios.post(
          "http://localhost:8080/api/auth/verify",
         verify
        );
        const { id, name,message } = res.data;

        if (res.status == 200 ) {
          set({
            isAuthenticated: true,
            user: {
              name,
              email: verify.email,
              id,
            },
            error: "",
            success:String(message),
            isLoading: false,
          });
          if (typeof window !== "undefined") {
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
          }
        }
        
      } catch (error) {
        set({ isLoading: false });
        set({success:""})
       
        if (axios.isCancel(error)) {
   
          console.error("Request canceled:", error.message);
        } else if (error.response) {
          const status = error?.response?.status as number;
          const message = error.response?.data?.error as string;

          if (status === 500) {
            
            
            set({ error: message });
          } else if (status === 400) {
          
          
            set({ error: message });
          
          } else if (status === 409) {
            // Handle Not Found Error (status code 404)
          
            set({ error: message });
          } else {
            // Handle other HTTP status codes if needed
           
            set({ error: message });
          }
        } else if (error.request) {
          // The request was made, but no response was received
         
          // Handle network errors
          if (!navigator.onLine) {
            set({ error: "Network Error: No internet connection" });
         
          } else {
          
            set({ error: "something Went wrong.please try again later" });
          }
        } else {
          // Something happened in setting up the request that triggered an error
        
          set({ error: "something Went wrong.please try again later" });
        }
      } finally {
        set({ isLoading: false });
      }
    },
    logout: () => {
      set({ isAuthenticated: false, user: null });

      if (typeof window !== "undefined") {
        localStorage.removeItem("id");
        localStorage.removeItem("name");
      }
    },
resetState:()=>{
  set({ ...initialAuthState });
}
  };
});
