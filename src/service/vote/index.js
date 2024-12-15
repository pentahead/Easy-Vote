export const vote = async (request) => {
  const code = request.code;
  const candidate_id = request.candidate_id;
  const token = localStorage.getItem("token");
  const url = `${import.meta.env.VITE_API_URL}/api/event/${code}/vote/${candidate_id}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `${token}`,
    },
  });

  const result = await response.json();
  return result;
};
