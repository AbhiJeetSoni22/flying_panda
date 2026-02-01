import { updateAlertStatus, deleteAlert } from "../services/api";

const statusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Booked":
      return "bg-blue-100 text-blue-700";
    case "Expired":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const AlertTable = ({ alerts, refresh }) => {
  const handleStatusUpdate = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "Active" ? "Booked" : "Active";

    await updateAlertStatus(id, nextStatus);
    refresh();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this alert?")) {
      await deleteAlert(id);
      refresh();
    }
  };

  if (alerts.length === 0) {
    return (
      <p className="text-center text-slate-500">
        No alerts available.
      </p>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b">
          <tr className="text-sm text-slate-600">
            <th className="py-3 px-4">Country</th>
            <th className="py-3 px-4">City</th>
            <th className="py-3 px-4">Visa</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr
              key={alert._id}
              className="border-b last:border-0 hover:bg-slate-50"
            >
              <td className="py-3 px-4 font-medium">{alert.country}</td>
              <td className="py-3 px-4">{alert.city}</td>
              <td className="py-3 px-4">{alert.visaType}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                    alert.status
                  )}`}
                >
                  {alert.status}
                </span>
              </td>
              <td className="py-3 px-4 text-right space-x-2">
                <button
                  onClick={() =>
                    handleStatusUpdate(alert._id, alert.status)
                  }
                  className="text-blue-600 hover:underline text-sm"
                >
                  Toggle Status
                </button>
                <button
                  onClick={() => handleDelete(alert._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
