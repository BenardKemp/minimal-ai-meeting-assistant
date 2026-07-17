const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL;



export async function getHealthStatus() {
  const response = await fetch(
    `${API_BASE_URL}/api/v1/health`
  );

  return response.json();
}