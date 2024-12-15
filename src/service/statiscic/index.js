export const statistic = async (code) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/event/${code}/count`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    }
  );

  const result = await response.json();
  return result;
};
