import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

interface Props {
  firstname: string;
  lastname: string;
  type: string;
  amount: number;
  status: string;
}

export const TransactionCard: React.FC<Props> = ({
  firstname,
  lastname,
  type,
  amount,
  status,
}) => {
  return (
    <div className="p-4 rounded-lg shadow flex justify-between items-center mb-4 font-sans w-full">
      <div className="flex items-center gap-2">
      {amount > 0 ? (
        <div className="w-8 h-8 rounded border flex items-center justify-center">
          <IoIosArrowRoundDown />
        </div>
      ) : (
        <div className="w-8 h-8 rounded border flex items-center justify-center">
          <IoIosArrowRoundUp />{" "}
        </div>
      )}
        <div>
        <h4 className="font-semibold text-sm">
          {firstname} {lastname}
        </h4>
        <p className="text-gray-500 text-xs">{type}</p>
        <small
          className={
            status === "FAILED"
              ? "text-red-500 text-[10px]"
              : status === "SUCCESS"
              ? "text-green-500 text-[10px]"
              : ""
          }
        >
          {status}
        </small>
        </div>
      </div>
      <div
        className={`font-bold text-xs ${
          amount > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {amount > 0 ? `+ ₦${amount}` : `- ₦${Math.abs(amount)}`}
      </div>
    </div>
  );
};
