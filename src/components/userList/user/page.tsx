import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Nav from "@/components/home/nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTransactionCard } from "../userTransaction-card";

const userList = [
  { id: 1, name: "Aisha Malik", phone: "0800123456", status: "Active" },
  { id: 2, name: "John Smith", phone: "0800987654", status: "Inactive" },
  { id: 3, name: "Emma Johnson", phone: "0800567890", status: "Active" },
  { id: 4, name: "David Lee", phone: "0800345678", status: "Active" },
  { id: 5, name: "Sophia Brown", phone: "0800234567", status: "Inactive" },
  { id: 6, name: "Michael Wang", phone: "0800567890", status: "Active" },
];

const transactions = [
  { id: 1, serviceType: "Data Purchase", amount: "₦5,000" },
  { id: 2, serviceType: "Bill Payment", amount: "₦5,000" },
  { id: 3, serviceType: "Data Purchase", amount: "₦5,000" },
  { id: 4, serviceType: "TV Subscription", amount: "₦5,000" },
  { id: 5, serviceType: "Airtime To Cash", amount: "₦5,000" },
  { id: 6, serviceType: "Data Purchase", amount: "₦5,000" },
];

const UserDetails = () => {
  const { userId } = useParams();
  const user = userList.find((user) => user.id === parseInt(userId ?? ""));
  const infoStyle = "border-b flex flex-col gap-y-2";
  return (
    <div className="p-4">
      {user ? (
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
              <TabsTrigger value="service">Service Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="flex flex-col gap-y-6">
              <div className={infoStyle}>
                <span className="text-[#64748B]">Name</span>
                <span>{user.name}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Phone</span>
                <span>{user.phone}</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]"></span>
                <span>No1 adekola street alimosho Lagos State</span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Status</span>
                <span
                  className={
                    user.status === "Active" ? "text-green-500" : "text-red-500"
                  }
                >
                  {user.status}
                </span>
              </div>
              <div className={infoStyle}>
                <span className="text-[#64748B]">Registration Date</span>
                <span>01/09/2024</span>
              </div>
            </TabsContent>
            <TabsContent value="transactions">
              <div className="p-4">
                {transactions.map((transaction) => (
                  <UserTransactionCard
                    key={transaction.id}
                    serviceType={transaction.serviceType}
                    amount={transaction.amount}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="service">Service Usage</TabsContent>
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
