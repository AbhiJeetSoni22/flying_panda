import { useEffect, useState } from "react";
import { getAlerts } from "./services/api";
import CreateAlertForm from "./components/CreateAlertForm";
import AlertTable from "./components/alertTable";


function App() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlerts = async () => {
    setLoading(true);
    const data = await getAlerts();
    setAlerts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Visa Slot Alerts
          </h1>
          <p className="text-slate-600 mt-2">
            Internal tracking tool
          </p>
        </div>

        <CreateAlertForm onSuccess={fetchAlerts} />

        {loading ? (
          <p className="text-center text-slate-500">Loading alerts...</p>
        ) : (
          <AlertTable alerts={alerts} refresh={fetchAlerts} />
        )}

        <p className="text-center text-sm text-slate-500 mt-8">
          The Flying Panda • Internship Assignment
        </p>
      </div>
    </div>
  );
}

export default App;
