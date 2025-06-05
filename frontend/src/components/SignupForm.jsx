import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SignupForm = () => {
  const { role } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "",
    state: "",
    role: role || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  const endpoint = "https://sheetdb.io/api/v1/eh6r751vmwqxc"; // Replace with your SheetDB API URL

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }), // SheetDB expects { data: {...} }
    });

    const result = await response.json();

    if (response.ok) {
      navigate("/thank-you");
    } else {
      setError("Something went wrong. Please try again.");
      console.error("SheetDB error:", result);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setError("Submission failed. Check your connection or SheetDB API.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-green-100 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-800">
          Join as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "Member"}
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full p-2 rounded border"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Phone Number</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full p-2 rounded border"
            value={formData.phone}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">District</label>
          <input
            name="district"
            type="text"
            required
            className="w-full p-2 rounded border"
            value={formData.district}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold">State</label>
          <input
            name="state"
            type="text"
            required
            className="w-full p-2 rounded border"
            value={formData.state}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        {error && (
          <div className="mb-4 text-red-600 font-semibold">{error}</div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
