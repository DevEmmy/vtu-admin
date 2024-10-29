import React, { Key } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "../ui/drawer";

interface Props {
  serviceType: string;
  amount: string;
  network: string;
  status: string;
  phoneNumber: string | number;
  transactionId: Key | null | undefined;
  createdAt: string;
}

export const UserTransactionCard: React.FC<Props> = ({
  serviceType,
  amount,
  network,
  createdAt,
  phoneNumber,
  transactionId,
  status,
}) => {
  const transactionDate = new Date(createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex justify-between items-center p-4 mb-4 border rounded-lg shadow-sm">
      <div>
        <p className="font-semibold text-base">{serviceType}</p>
        <p className="text-gray-600">Amount: ₦{amount}</p>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="border text-gray-600 px-4 py-1 rounded-md text-xs">
            View
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col p-4 mb-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold text-2xl">₦{amount}</p>
              <p className="text-gray-500">{transactionDate}</p>
              <div>
                <p
                  className={`text-${
                    status === "SUCCESS" ? "green" : "red"
                  }-500 uppercase font-semibold`}
                >
                  {status}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Transaction Purpose: </span>
                {serviceType}
              </p>
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Amount: </span>₦{amount}
              </p>
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Biller Name: </span>
                {network || "N/A"}
              </p>
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Phone Number: </span>
                {phoneNumber}
              </p>
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Transaction Date: </span>
                {transactionDate}
              </p>
              <p className="text-sm text-gray-700 border-b flex flex-col gap-2">
                <span className="text-gray-500">Transaction Reference: </span>
                {transactionId ? String(transactionId) : "N/A"}
              </p>
            </div>
          </div>
          <DrawerClose>
            <button className="px-3 py-1 mb-2 rounded-md text-white bg-sky-400">Close</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
