import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-green-300">
      <h1 className="text-4xl font-bold mb-6 text-green-900">🌾 Welcome to UKI Agri Services</h1>
      <p className="mb-10 text-lg text-gray-700">Helping farmers & buyers connect with ease.</p>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800"
          onClick={() => navigate("/signup/farmer")}
        >
          Join as Farmer
        </button>
        <button
          className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600"
          onClick={() => navigate("/signup/buyer")}
        >
          Join as Buyer
        </button>
      </div>
    </div>
  );
};

export default HomePage;
