import React from "react";

interface Props {
    serviceType: string;
    amount: string;
}

export const UserTransactionCard:React.FC<Props> = ({ serviceType, amount }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-4 border rounded-lg shadow-sm">
      <div>
        <p className="font-semibold text-lg">Service Type: {serviceType}</p>
        <p className="text-gray-600">Amount: {amount}</p>
      </div>
      <button className="border text-gray-600 px-4 py-1 rounded-md text-xs">
        View
      </button>
    </div>
  );
};

