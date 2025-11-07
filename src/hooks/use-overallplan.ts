import { useContext } from "react";
import { OverallPlanContext } from "../contexts/OverallplanContext";

export function useOverallPlan() {
  return useContext(OverallPlanContext); 
}