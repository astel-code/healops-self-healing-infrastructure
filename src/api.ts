const BASE_URL = "http://127.0.0.1:5000";

export async function simulateHeal() {
  const res = await fetch(`${BASE_URL}/simulate`);
  if (!res.ok) throw new Error(`Simulation failed: ${res.statusText}`);
  return res.json();
}

export async function triggerWebhook() {
  const res = await fetch(`${BASE_URL}/webhook`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      alerts: [{ labels: { alertname: "HighCPU" } }],
    }),
  });
  if (!res.ok) throw new Error(`Webhook failed: ${res.statusText}`);
  return res.json();
}
