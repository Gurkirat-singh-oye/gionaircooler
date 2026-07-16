import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // logged in successfully
    navigate("/admin/dashboard"); // wherever your admin panel lives
  };

  return (
    <div className="  h-[100vh] flex flex-row items-center bg-gion-gray ">
      <div className=" mx-auto w-96 h-fit px-10 py-8 flex flex-col gap-10 items-center shadow-custom-shadow-big bg-gion-powder-blue rounded-lg ">
        <div className=" text-6xl text-gion-teal-3 font-doodle font-bold ">
          Login
        </div>
        <form onSubmit={handleLogin} className=" w-full flex flex-col gap-8 ">
          <input
            className=" px-2 text-xl "
            type="email"
            placeholder="Admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className=" px-2 text-xl "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className=" py-1 text-2xl text-gion-powder-blue bg-gion-teal-3 border border-gion-teal-4 hover:border-gion-powder-blue hover:bg-gion-teal-4 rounded-lg transition-all duration-300 "
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
