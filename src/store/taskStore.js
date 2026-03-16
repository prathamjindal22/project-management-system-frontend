import { create } from "zustand";
import api from "../api/axios";

export const useTaskStore = create((set) => ({
    tasks: [],
    
    fetchTasks: async (projectId = "") => {
    
        const res = await api.get(`/tasks/project/${projectId}`);
    
        set({tasks: res.data});
    
    },

    updateTask: async (taskId, status) =>{

        const res = await api.put(`/tasks/${taskId}`, {status});
        
        set((state) => ({
            tasks: state.tasks.map((t) => t._id === taskId ? res.data : t)
        }))
        
        return res.data;
        
    }
}))