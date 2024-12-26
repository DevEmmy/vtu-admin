import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { TransactionCard } from "./transaction-card";
import { Key, useEffect } from "react";
import { useUser } from "@/hooks/Auth";
import { useAllTransactions } from "@/hooks/use-transactions";

const Transactions = () => {
  const { user } = useUser();
  const { transactions } = useAllTransactions();
  const navigate = useNavigate();
 
  
  useEffect(() => {
    if(!user){
      navigate("/sign-in");
    }
  },[user, navigate]);
  
  if(!user){
    return null;
  }
  console.log(transactions);


  if (!transactions || !Array.isArray(transactions)) {
    return <div>No transactions found</div>; // Fallback if transactions is undefined or not an array
}
  return (
    <div className="relative px-3 py-5 flex flex-col gap-7 min-h-screen">
      <div>
        <Link to={"/"} className="text-xl">
          <FaArrowLeftLong />
        </Link>
        <h1 className="text-xl font-bold">Transactions</h1>
      </div>
      <div className="w-full mx-auto">
        {transactions.map((transaction: {
          user: any;
          type: string; id: Key | null | undefined; name: string; amount: number; status: string;
}) => (
          <TransactionCard
          firstname={transaction.user?.firstName}
          lastname={transaction.user?.lastName}
          key={transaction.id}
            status={transaction.status}
            type={transaction.type}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
};
export default Transactions;
