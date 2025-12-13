import { useEffect, useState } from "react";
import axios from "../../axiosConfig";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/home").then((res) => {
      console.log(res.data);
      if (res.data.status) {
        setUser(res.data.user);
      } else {
        window.location.href = "/login"; // redirect if not logged in
      }
    });
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user} 👋</h1>
    </div>
  );
}

export default HomePage;