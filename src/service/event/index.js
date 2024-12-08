export const event = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  });

  const result = await response.json();
  return result;
};

export const eventByCode = async (code) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/event/${code}`,
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
export const candidateByEvent = async (code) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/event/${code}/candidate`,
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
