import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Thank you for joining!</h1>
      <p className="text-lg mb-6 text-gray-700">We’ll get in touch with you soon.</p>
      <Link
        to="/"
        className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
