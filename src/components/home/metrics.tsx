interface CardProps {
title: string;
value: number;
percentage: string;
}

export const MetricsCard:React.FC<CardProps> = ({ title, value, percentage }) => (
    <div className="bg-[#e8e8e820] rounded-md p-2 flex justify-between w-full">
        <div className="flex flex-col">
      <p className="text-[#64748B] text-xs font-sans">{title}</p>
      <p className="text-sm font-semibold font-sans">{value}</p>
        </div>
      <span className="text-green-500 text-[10px] text-center">{percentage}</span>
    </div>
  );
  