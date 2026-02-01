const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAlerts = async () => {
  const res = await fetch(`${API_BASE_URL}/alerts`);
  return res.json();
};

export const createAlert = async (data) => {
  const res = await fetch(`${API_BASE_URL}/alerts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateAlertStatus = async (id, status) => {
  const res = await fetch(`${API_BASE_URL}/alerts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
  return res.json();
};

export const deleteAlert = async (id) => {
  const res = await fetch(`${API_BASE_URL}/alerts/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
