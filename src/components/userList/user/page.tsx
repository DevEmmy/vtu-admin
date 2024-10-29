import { FaArrowLeftLong } from "react-icons/fa6";
import { Key, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "@/components/home/nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTransactionCard } from "../userTransaction-card";
import { useAllUsers } from "@/hooks/use-users";
import { useUser } from "@/hooks/Auth";
import { useAllTransactions } from "@/hooks/use-transactions";

const UserDetails = () => {
  const { userId } = useParams();
  const { transactions } = useAllTransactions();
  const { user } = useUser();
  const { users } = useAllUsers();

  const [userTransactions, setUserTransactions] = useState([]);

  const userInfo =
    users && Array.isArray(users)
      ? users.find((u: { _id: string }) => u._id === userId)
      : null;


  useEffect(() => {
    if (userInfo && transactions) {
      const filteredTransactions = transactions.filter(
        (transaction: any) => transaction.user._id === userInfo._id
      );
      setUserTransactions(filteredTransactions);
    }
  }, [userInfo, transactions]);
  const infoStyle = "border-b flex flex-col gap-y-2";

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return (
    <div className="p-4">
      {userInfo ? (
        <div className="">
          <div className="flex flex-col gap-y-5">
            <Link to={"/user-list"} className="text-lg">
              <FaArrowLeftLong />
            </Link>
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
          </div>
          <Tabs defaultValue="general" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="transactions">
                Transaction History
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="flex flex-col gap-y-6">
              <div className={infoStyle}>
                <span className="text-[#64748B]">Name</span>
                <span>
                  {userInfo.firstName} {userInfo.lastName}
                </span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Email</span>
                <span>{userInfo.email}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Account Balance</span>
                <span>₦ {userInfo.accountBalance}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Phone Number</span>
                <span>{userInfo.phone}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Registration Date</span>
                <span>{userInfo.createdAt}</span>
              </div>
            </TabsContent>
            <TabsContent value="transactions">
              <div className="p-4">
                {userTransactions.map(
                  (transaction: {
                    _id: Key | null | undefined;
                    details: any;
                    type: string;
                    status: string;
                    amount: string;
                    createdAt: string;
                  }) => (
                    <UserTransactionCard
                      key={transaction._id}
                      serviceType={transaction.type}
                      status={transaction.status}
                      network={transaction.details.network}
                      phoneNumber={transaction.details.phone || transaction.details.phoneNumber}
                      transactionId={transaction._id}
                      amount={transaction.amount}
                      createdAt={transaction.createdAt}
                    />
                  )
                )}
                {userTransactions.length == 0 && <p>No Transactions yet.</p>}
              </div>
            </TabsContent>
          </Tabs>
          <Nav dashboard={false} siteAdmin={true} settings={false} />
        </div>
      ) : (
        <p>User not found!</p>
      )}
    </div>
  );
};

export default UserDetails;
