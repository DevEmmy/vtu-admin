import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TransactionCard } from "./transaction-card";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      name: "John Doe",
      description: "Payment for Order #1234",
      amount: 5000,
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Payment for Subscription",
      amount: 1200,
    },
    { id: 3, name: "Admin", description: "Transfer to Bank", amount: -3000 },
    {
      id: 4,
      name: "Emily Johnson",
      description: "Payment for Order #5678",
      amount: 7500,
    },
    { id: 5, name: "Admin", description: "Transfer to Bank", amount: -1500 },
    {
      id: 6,
      name: "Michael Brown",
      description: "Payment for Order #9876",
      amount: 2000,
    },
    { id: 7, name: "Admin", description: "Transfer to Bank", amount: -100 },
    {
      id: 8,
      name: "John Doe",
      description: "Payment for Order #1234",
      amount: 5000,
    },
  ];

  return (
    <div className="relative px-3 py-5 flex flex-col gap-7 min-h-screen">
      <div>
        <Link to={"/"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="text-xl font-bold">Transactions</h1>
      </div>
      <div className="w-full mx-auto">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            name={transaction.name}
            description={transaction.description}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
};
export default Transactions;
