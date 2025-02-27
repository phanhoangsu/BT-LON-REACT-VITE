import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { fullName, email, password, phone } = formData;

    // Kiểm tra input
    if (!fullName || !email || !password || !phone) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (!email.includes("@")) {
      setError("Email không hợp lệ. ");
      return;
    }
    if (password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }
    if (!/^[0-9]+$/.test(phone)) {
      setError("Vui lòng nhập lại Phone");
      return;
    }

    // Kiểm tra email đã tồn tại chưa
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      setError("Email đã tồn tại.");
      return;
    }

    // Lưu user vào localStorage
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://res.cloudinary.com/dbpqjnu0o/image/upload/v1740578420/banner1_l4xyda.jpg')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded hover:opacity-80"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
