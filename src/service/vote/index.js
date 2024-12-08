export const vote = async (code, candidate_id) => {
  const token = localStorage.getItem("token");
  let url = `${import.meta.env.VITE_API_URL}event/${code}}/vote/${candidate_id}}`;

  const response = await fetch(url, {
    method: "POST",
    authorization: `${token}`,
  });

  const result = await response.json();
  return result;
};
