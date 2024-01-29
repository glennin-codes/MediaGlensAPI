import axios from "axios";
import { create } from "zustand";

interface FileState {
    storageInfo:StorageInfo;
    Error:string;
  isLoading:boolean;
   
  
    getStorageInfo: (id:string) => Promise<void>;
    
  }
type StorageInfo={
  totalItems:number,
  bytes:number
};
  export const useStorageInforStore=create  <FileState>((set)=>{
    const initialFileState={
      isLoading:false,
      Error:"",
      storageInfo:{
        totalItems:0,
        bytes:0
       
      }
      
    }
    set({...initialFileState});
    return{
      ...initialFileState,
      getStorageInfo:async(id)=>{
        set({isLoading:true});

        try {
          axios.interceptors.request.use(config=>{
            config.withCredentials =true;
            return config;
          });
          const response = await axios.get(
            `http://localhost:8080/api/users/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
         if(response.status == 200){
          set({isLoading:false})
          const { bytes, totalItems } = await response?.data?.storage;
          set({storageInfo:{
            bytes:Number(bytes),
            totalItems:Number(totalItems)
          }});
         }
          
        } catch (Error) {
          set({isLoading:false});
          if (axios.isCancel(Error)) {
   
            console.error("Request canceled:", Error.message);
          } else if (Error.response) {
            const status = Error?.response?.status as number;
            const message = Error.response?.data?.Error as string;
  
            if (status === 500) {
              
              
              set({ Error: message });
            } else if (status === 404) {
            
            
              set({ Error: message });
            
            
            } else if (status === 401) {
            
            
              set({ Error: message });
            
            } else if (status === 403) {
              // Handle Not Found Error (status code 404)
            
              set({ Error: message });
            } else {
              // Handle other HTTP status codes if needed
             
              set({ Error: message });
            }
          } else if (Error.request) {
            // The request was made, but no response was received
           
            // Handle network Errors
            if (!navigator.onLine) {
              set({ Error: "Network Error: No internet connection" });
           
            } else {
            
              set({ Error: "something Went wrong.please try again later" });
            }
          } else {
            // Something happened in setting up the request that triggered an Error
          
            set({ Error: "something Went wrong.please try again later" });
          }
        } finally {
          set({ isLoading: false });
        }
      },
    }
  })