import { create } from "zustand";
import api from "../api/axios";

export const useProjectStore = create((set) =>({

    projects: [],
    
    fetchProjects: async () =>{
        
        try {
            
            const res = await api.get("/projects");
            
            set({projects: res.data || []});
            
        } catch (error) {
            
            console.error(error)

        }


    }

}))