import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  status: string;
}

export const UserCard: React.FC<Props> = ({ id, firstname, lastname, email, status }) => {
  return (
    <div className="flex justify-between items-center p-4 mb-4 border rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded border flex items-center justify-center text-3xl">
          <CiUser />
        </div>
        <div>
          <p className="font-semibold text-sm">{firstname} {lastname}</p>
          <p className="text-gray-600 text-xs">{email}</p>
          <p
            className={`font-medium text-xs ${
              status === "Active" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        </div>
      </div>
      <Link
        to={`/user-list/${id}`}
        className="border text-gray-600 px-4 py-1 rounded-md text-xs"
      >
        View
      </Link>
    </div>
  );
};
