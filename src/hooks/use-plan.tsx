import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from "@/utils/apiClient";
import { toastError, toastSuccess } from "@/utils/toast";

type Plan = {
  id: string;
  network: string;
  amount: number;
};

export default function usePlans() {
  const [plansData, setPlans] = useState<Record<string, Plan[]>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Plans
  const fetchPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosConfig.get("/plans"); // Replace with actual API
      setPlans(response.data.data);
    } catch (err) {
      setError("Failed to fetch plans");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update Plan
  const updatePlan = async (network: string, planId: string, newAmount: number) => {
    try {
      await axiosConfig.patch(`/admin-data/plan/${planId}`, { price: newAmount }); // Replace with actual API
      setPlans((prevPlans) => ({
        ...prevPlans,
        [network]: prevPlans[network].map((plan) =>
          plan.id === planId ? { ...plan, amount: newAmount } : plan
        ),
      }));
      toastSuccess("Plan updated successfully");
      return true;
    } catch (err) {
      console.error("Failed to update plan:", err);
        toastError("Failed to update plan");
      return false;
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return { plansData, loading, error, fetchPlans, updatePlan };
}
