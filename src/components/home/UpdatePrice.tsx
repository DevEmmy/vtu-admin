import usePlans from "@/hooks/use-plan";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

type Plan = {
  _id: string;
  network: string;
  price: number;
  code: string;
};

export default function PlanUpdatePage() {
  const { updatePlan, plansData } = usePlans();
  const [totalPlans, setTotalPlans] = useState<any>(plansData || []);
  const [networks, setNetwork] = useState(Object.keys(plansData));
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: { price: 0 },
  });

  console.log(totalPlans);

  useEffect(() => {
    setTotalPlans(plansData);
    setNetwork(Object.keys(plansData));
  }, [plansData]);

  useEffect(() => {
    if (selectedNetwork) {
      setPlans(totalPlans[selectedNetwork]);
      setSelectedPlan(null);
      reset();
    }
  }, [selectedNetwork, reset]);

  useEffect(() => {
    if (selectedPlan) {
      setValue("price", selectedPlan.price);
    }
  }, [selectedPlan, setValue]);

  const onSubmit = (data: { price: number }) => {
    if (!selectedPlan) return;

    // Simulating API update
    console.log("Updating Plan:", { ...selectedPlan, price: data.price });

    updatePlan(selectedPlan.network, selectedPlan._id, data.price);
  };

  return (
    <div className="relative px-3 py-5 flex flex-col gap-7 min-h-screen">
      <div>
        <Link to={"/"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="text-xl font-bold">Update Plan Price</h1>
      </div>

      {/* Select Network */}
      <label className="block text-gray-700">Select Network</label>
      <select
        className="w-full p-2 border rounded-lg mt-2"
        value={selectedNetwork}
        onChange={(e) => setSelectedNetwork(e.target.value)}
      >
        <option value="">-- Select Network --</option>
        {networks.map((network) => (
          <option key={network} value={network}>
            {network.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Select Plan */}
      {plans.length > 0 && (
        <>
          <label className="block text-gray-700 mt-4">Select Plan</label>
          <select
            className="w-full p-2 border rounded-lg mt-2"
            value={selectedPlan?._id || ""}
            onChange={(e) =>
              setSelectedPlan(
                plans.find((plan) => plan._id === e.target.value) || null
              )
            }
          >
            <option value="">-- Select Plan --</option>
            {plans.map((plan) => (
              <option key={plan._id} value={plan._id}>
                Plan ID: {plan.code} - ₦{plan.price}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Update Price Form */}
      {selectedPlan && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <label className="block text-gray-700">New Price</label>
          <input
            type="number"
            {...register("price", { required: true, min: 1 })}
            className="w-full p-2 border rounded-lg mt-2"
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Update Price
          </button>
        </form>
      )}
    </div>
  );
}
