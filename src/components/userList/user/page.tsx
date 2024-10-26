import { FaArrowLeftLong } from "react-icons/fa6";
import { Key, useEffect } from "react";
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

  const userInfo = users && Array.isArray(users) 
  ? users.find((user: { _id: string }) => user._id === userId)
  : null;
  
  const userTransactions = transactions && Array.isArray(transactions) 
  ? transactions.filter((transaction: { _id: string }) => transaction._id === userId) 
  : [];

  const infoStyle = "border-b flex flex-col gap-y-2";

  const navigate = useNavigate();
 console.log(userTransactions);
 console.log(userInfo)
  useEffect(() => {
    if(!user) {
      navigate("/sign-in")
    };
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
                <span>{user.firstName} {user.lastName}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Email</span>
                <span>{user.email}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Account Balance</span>
                <span>₦ {user.accountBalance}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Phone Number</span>
                <span>{user.phone}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Registration Date</span>
                <span>{user.createdAt}</span>
              </div>
            </TabsContent>
            <TabsContent value="transactions">
              {/* <div className="p-4">
                {userTransactions.map((transaction: { id: Key | null | undefined; serviceType: string; amount: string; }) => (
                  <UserTransactionCard
                    key={transaction.id}
                    serviceType={transaction.serviceType}
                    amount={transaction.amount}
                  />
                ))}
              </div> */}
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
