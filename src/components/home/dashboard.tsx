import { Link, useNavigate } from "react-router-dom";
import Nav from "./nav";
import { CiBellOn } from "react-icons/ci";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import balance from "/BALANCE.png";
import frame from "/Frame 399.png";
import { useEffect, useState } from "react";
import { MetricsCard } from "./metrics";
import { TransactionCard } from "../Transaction/transaction-card";
import { useUser } from "@/hooks/Auth";
import { useAllTransactions } from "@/hooks/use-transactions";
import { useAdminData } from "@/hooks/use-admin-data";
// import Each from "../Transaction/Each";
// import useMonnify from "../../hooks/useMonnify";
// import formatPrice from "../../utils/formatPrice";

function dashboard() {
  const { adminData } = useAdminData();

  console.log(adminData)
  const { transactions } = useAllTransactions();
  const [hideBalance, setHideBalance] = useState(true);
  const navigate = useNavigate();
  const { user } = useUser();

  const [cardData, setCardData] = useState<any>(null);

  useEffect(()=>{
    setCardData([
      { title: "Total Users", value: adminData?.totalUsers, percentage: "+13.24%" },
      { title: "Active Users", value: adminData?.totalUsers, percentage: "+13.24%" },
      { title: "Total Transactions", value: adminData?.totalTransactions, percentage: "+13.24%" },
      { title: "Total Revenue", value: adminData?.totalRevenue, percentage: "+13.24%" },
    ])
  }, [adminData])

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-5 p-3 relative pb-[100px]">
        <div className="flex w-full pt-3 items-center">
          <div className="mr-2">
            <img
              src={
                "https://static.vecteezy.com/system/resources/previews/026/966/960/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              }
              alt=""
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold ">Hi, {user.firstName}</h1>
            <p className="text-[0.65rem] sm:text-sm text-gray-400">
              welcome to your Admin Dashboard!
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <CiBellOn
              className="text-3xl cursor-pointer"
              onClick={() => navigate("/notifications")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center relative w-full">
          <img src={balance} alt="" className="z-10 w-full" />
          <img src={frame} alt="" className="-mt-2 w-full" />
          <div className="absolute z-30 w-full -mt-2 text-white h-full flex flex-col justify-center pl-6">
            <div className="flex items-center gap-3">
              <h3 className="text-lg text-gray-100 font-bold">
                Wallet Balance
              </h3>
              <p
                onClick={() => setHideBalance(!hideBalance)}
                className="cursor-pointer"
              >
                {!hideBalance ? <RiEyeLine /> : <RiEyeCloseLine />}
              </p>
            </div>
            <div className="flex text-2xl items-center gap-1 font-bold">
              <h1>
                ₦{hideBalance ? "****" : adminData?.totalBalance}
                {/* formatPrice(user.accountBalance)}  */}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-2">
          {cardData?.map((item: any, index: number) => (
            <MetricsCard
              key={index}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
            />
          ))}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <p className="font-sans text-sm font-semibold">Transactions</p>
            <Link to={"/transactions"} className="text-xs text-sky-400">
              {" "}
              View all{" "}
            </Link>
          </div>
          <div className="w-full mx-auto">
            {transactions?.slice(0, 5)?.map((transaction: any) => (
              <TransactionCard
                key={transaction._id}
                firstname={transaction.user?.firstName}
                lastname={transaction.user?.lastName}
                type={transaction.type}
                status={transaction.status}
                amount={transaction.amount}
              />
            ))}
          </div>
        </div>

      </div>
      <Nav dashboard={true} siteAdmin={false} settings={false} />
    </div>
  );
}

export default dashboard;
