import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get("/home");

        if (res.data.status) {
          setUser(res.data.user);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("AUTH ERROR:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [navigate]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user?.username || user?.email} 👋</h1>
    </div>
  );
}

export default HomePage;
