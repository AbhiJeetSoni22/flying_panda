import { useState } from "react";
import { createAlert } from "../services/api";

const CreateAlertForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    visaType: "Tourist"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createAlert(formData);
      setFormData({ country: "", city: "", visaType: "Tourist" });
      onSuccess(); // refresh list
    } catch (err) {
      alert("Failed to create alert");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-lg font-semibold text-slate-700 mb-4">
        Create New Alert
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <select
          name="visaType"
          value={formData.visaType}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Tourist</option>
          <option>Business</option>
          <option>Student</option>
        </select>

        <div className="md:col-span-3 text-right">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Alert"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAlertForm;
