const API_BASE_URL = "http://127.0.0.1:8000";

export async function getHealthStatus() {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/health`
  );

  return response.json();
}