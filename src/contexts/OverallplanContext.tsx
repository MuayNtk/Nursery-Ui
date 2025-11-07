import React, { createContext, ReactNode, useContext } from "react";
import axios from "../configs/axios";

// Type ของข้อมูล Policy
export type ChildcarePolicy = {
  Childcare_Policy: string;
  Method1: string;
  Method2: string;
  Method3: string;
  Method4: string;
  Method5: string;
  Method6: string;
};

export type OverallPlan = {
  id: string;
  year: string;
  Ideal_Image_Of_Children: string;
  Desired_Image_Of_Caregivers: string;
  createdAt: string;
};

export type OverallPlanForm = {
    year: string;
    Ideal_Image_Of_Children: string;
    Desired_Image_Of_Caregivers: string;
};

// Type ของ Context
type OverallPlanContextType = {
  fetchChildcarePolicy: () => Promise<ChildcarePolicy[]>;
  fetchOverallPlans: () => Promise<OverallPlan[]>;
  createOverallPlan: (form: OverallPlanForm) => Promise<void>;
};

// สร้าง Context
export const OverallPlanContext = createContext<OverallPlanContextType | undefined>(undefined);

export const useOverallPlan = () => {
  const context = useContext(OverallPlanContext);
  if (!context) {
    throw new Error("useOverallPlan must be used within OverallPlanProvider");
  }
  return context;
};

// Provider
export const OverallPlanProvider = ({ children }: { children: ReactNode }) => {
  // ฟังก์ชัน async ดึงข้อมูลจาก API
  const fetchOverallPlans = async (): Promise<OverallPlan[]> => {
    try {
      const response = await axios.get("/overallplan/getoverallplan");
      const data: OverallPlan[] = response.data.overallPlans;
      return data; // คืนค่าให้ Component
    } catch (error) {
      console.error("Error fetching overall plans:", error);
      throw error;
    }
  };

    const fetchChildcarePolicy = async (): Promise<ChildcarePolicy[]> => {
    try {
      const response = await axios.get("/overallplan/getchildcarepolicy");
      const data: ChildcarePolicy[] = response.data.policies;
      return data; // คืนค่าให้ Component
    } catch (error) {
      console.error("Error fetching childcare policy:", error);
      throw error;
    }
  };
  
    const createOverallPlan = async (form: OverallPlanForm): Promise<void> => {
    try {
      const response = await axios.post("/overallplan/createoverallplan", form);
      console.log("Overall Plan created:", response.data);
    } catch (error) {
      console.error("Error creating overall plan:", error);
      throw error;
    }
  };

  return (
    <OverallPlanContext.Provider value={{ fetchChildcarePolicy, createOverallPlan, fetchOverallPlans }}>
      {children}
    </OverallPlanContext.Provider>
  );
};
