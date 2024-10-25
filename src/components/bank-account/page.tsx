import { FaTrashAlt, FaRegCopy } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link }from "react-router-dom";


const AdminBankAccount = () => {
  return (
    <div className="flex flex-col items-center py-6 px-4">
      <div className="flex justify-start w-full mb-4">
        <Link to={"/site-admin"} className="text-lg font-bold">
        <FaArrowLeftLong />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">Admin Bank Account</h1>

      <div className="w-full max-w-lg p-4 border rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <img
            src="https://th.bing.com/th/id/R.c53ae42a805a267b059b31429c68b778?rik=Lxx5Rd6gcmYI4Q&pid=ImgRaw&r=0"
            alt="Wema Bank"
            className="w-12 h-12 mr-4"
          />
          <div className="flex-1">
            <p className="font-semibold text-lg">Account Number: 1234567890</p>
            <p className="text-gray-600">Name: Adeniyi Folarin</p>
          </div>
          <button className="flex items-center border border-sky-400 text-sky-400 px-3 py-1 rounded-md">
            <FaRegCopy className="mr-1" />
            Copy
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500">Wema Bank &nbsp; ₦50 charges</p>
          <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
            <FaTrashAlt className="mr-1" />
            Delete
          </button>
        </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-600">
        Add Bank
      </button>
    </div>
  );
};

export default AdminBankAccount;
