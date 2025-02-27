// import React, { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const { dispatch } = useContext(UserContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setError("");

//     const { email, password } = formData;
//     if (!email || !password) {
//       setError("Vui lòng nhập đầy đủ thông tin.");
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (!user) {
//       setError("Email hoặc password không đúng.");
//       setFormData({ ...formData, password: "" });
//       return;
//     }

//     localStorage.setItem("currentUser", JSON.stringify(user));
//     dispatch({ type: "ON_LOGIN", payload: user });

//     alert("Log in successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[url('https://res.cloudinary.com/dbpqjnu0o/image/upload/v1740578420/banner1_l4xyda.jpg')] bg-cover bg-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-[80vw] max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
//         <div className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-black text-white py-2 rounded hover:opacity-80"
//           >
//             Sign In
//           </button>
//         </div>
//         <p className="text-center text-sm mt-4">
//           Create an account?
//           <a href="/signup" className="text-blue-500">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
