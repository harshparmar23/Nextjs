import axios from "axios";

async function fetchdata() {
  const response = await axios.get("http://localhost:3000/api/user");

  await new Promise((t) => setTimeout(t, 3000));
  return response.data;
}

export default async function page() {
  const data = await fetchdata();

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
