import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

interface Props {
    name: string;
    description: string;
    amount: number;
}

export const TransactionCard:React.FC<Props> = ({ name, description, amount }) => {
    return (
<div className="p-4 rounded-lg shadow flex justify-between items-center mb-4 font-sans w-full">
    {amount > 0 ? <div className="w-8 h-8 rounded border flex items-center justify-center"><IoIosArrowRoundDown/></div> : <div className="w-8 h-8 rounded border flex items-center justify-center"><IoIosArrowRoundUp /> </div>}
    <div>
      <h4 className="font-semibold text-sm">{name}</h4>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
    <div
      className={`font-bold text-xs ${
        amount > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {amount > 0 ? `+ ₦${amount}` : `- ₦${Math.abs(amount)}`}
    </div>
  </div>
    )
}

