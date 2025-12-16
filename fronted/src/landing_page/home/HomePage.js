import { useEffect, useState } from "react";
import axios from "../../axiosConfig";

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("/home");
        console.log("HOME API:", res.data);

        if (res.data.status) {
          setUser(res.data.user);
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("AUTH ERROR:", error);
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user} 👋</h1>
    </div>
  );
}

export default HomePage;
