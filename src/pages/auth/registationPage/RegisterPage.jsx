
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginBgImg from "../../../assets/others/loginBgImg/authentication.png";
import loginAnimation from "../../../assets/others/AnimationSignIn.json";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("Registration Data:", data);
        reset();
    };

    const passwordValue = watch("password");

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${loginBgImg})` }}
        >
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="hidden md:block w-80">
                    <Lottie animationData={loginAnimation} />
                </div>

                <div className="card w-96 shadow-xl p-6 rounded-2xl bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                        <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

                        {/* Full Name */}
                        <div className="mb-3">
                            <label className="block mb-1 text-sm font-medium">Full Name</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaUser className="text-black mr-2" />
                                <input
                                    {...register("fullName", { required: "Full Name is required", minLength: { value: 3, message: "At least 3 characters" } })}
                                    placeholder="Enter your full name"
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                        </div>

                        {/* Phone */}
                        <div className="mb-3">
                            <label className="block mb-1 text-sm font-medium">Phone Number</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaPhone className="text-black mr-2" />
                                <input
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: { value: /^\+?\d{10,15}$/, message: "Invalid phone number" }
                                    })}
                                    placeholder="Enter your phone number"
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaEnvelope className="text-black mr-2" />
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" }
                                    })}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaLock className="text-black mr-2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: { value: /^(?=.*[A-Z])(?=.*\d).{8,}$/, message: "At least 8 characters, one uppercase & one number" }
                                    })}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Re-enter Password</label>
                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <FaLock className="text-black mr-2" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) => value === passwordValue || "Passwords do not match"
                                    })}
                                    placeholder="Re-enter your password"
                                    className="input input-bordered w-full bg-transparent focus:outline-none"
                                />
                                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="ml-2">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>

                        <button type="submit" className="w-full px-4 py-2 rounded-lg text-white font-semibold bg-blue-700 hover:bg-blue-800 transition duration-300 mb-3">
                            Create Account
                        </button>

                        <Link to="/login">
                            <button type="button" className="w-full px-4 py-2 rounded-lg text-white font-semibold bg-green-700 hover:bg-green-800 transition duration-300">
                                Have an account? Login
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}




// import Lottie from "lottie-react";
// import { useState } from "react";
// import { FaUser, FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import loginBgImg from "../../../assets/others/loginBgImg/authentication.png";
// import loginAnimation from "../../../assets/others/AnimationSignIn.json";

// export default function RegisterPage() {
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const isValidEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   const isValidPhone = (phone) => {
//     const phoneRegex = /^\+?\d{10,15}$/;
//     return phoneRegex.test(phone);
//   };

//   const isValidFullName = (name) => {
//     return name.trim().length > 2;
//   };

//   const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     let errors = {};

//     if (!fullName) {
//       errors.fullName = "Full Name is required!";
//     } else if (!isValidFullName(fullName)) {
//       errors.fullName = "Full Name must be at least 3 characters long!";
//     }
//     if (!phone) {
//       errors.phone = "Phone number is required!";
//     } else if (!isValidPhone(phone)) {
//       errors.phone = "Invalid phone number!";
//     }
//     if (!email) {
//       errors.email = "Email is required!";
//     } else if (!isValidEmail(email)) {
//       errors.email = "Invalid email format!";
//     }
//     if (!password) {
//       errors.password = "Password is required!";
//     } else if (!isValidPassword(password)) {
//       errors.password =
//         "Password must be at least 8 characters, include one uppercase letter and one number!";
//     }
//     if (password !== confirmPassword) {
//       errors.confirmPassword = "Passwords do not match!";
//     }

//     setError(errors);

//     if (Object.keys(errors).length === 0) {
//       console.log(
//         "Registration Data:",
//         fullName,
//         phone,
//         email,
//         password,
//         confirmPassword
//       );

//       // Reset form values
//       setFullName("");
//       setPhone("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setError({});
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${loginBgImg})` }}
//     >
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         {/* Animation */}
//         <div className="hidden md:block w-80">
//           <Lottie animationData={loginAnimation} />
//         </div>

//         {/* Form Card */}
//         <div className="card w-96 shadow-xl p-6 rounded-2xl bg-white">
//           <form onSubmit={handleRegister} autoComplete="on">
//             <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>

//             {/* Full Name */}
//             <div className="mb-3">
//               <label className="block mb-1 text-sm font-medium">Full Name</label>
//               <div className="flex items-center border rounded-lg px-3 bg-gray-50">
//                 <FaUser className="text-black mr-2" />
//                 <input
//                   type="text"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   placeholder="Enter your full name"
//                   autoComplete="name"
//                   className="input input-bordered w-full bg-transparent focus:outline-none"
//                 />
//               </div>
//               {error.fullName && (
//                 <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div className="mb-3">
//               <label className="block mb-1 text-sm font-medium">Phone Number</label>
//               <div className="flex items-center border rounded-lg px-3 bg-gray-50">
//                 <FaPhone className="text-black mr-2" />
//                 <input
//                   type="text"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   placeholder="Enter your phone number"
//                   className="input input-bordered w-full bg-transparent focus:outline-none"
//                 />
//               </div>
//               {error.phone && (
//                 <p className="text-red-500 text-sm mt-1">{error.phone}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="mb-3">
//               <label className="block mb-1 text-sm font-medium">Email</label>
//               <div className="flex items-center border rounded-lg px-3 bg-gray-50">
//                 <FaEnvelope className="text-black mr-2" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   autoComplete="email"
//                   className="input input-bordered w-full bg-transparent focus:outline-none"
//                 />
//               </div>
//               {error.email && (
//                 <p className="text-red-500 text-sm mt-1">{error.email}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="mb-3">
//               <label className="block mb-1 text-sm font-medium">Password</label>
//               <div className="flex items-center border rounded-lg px-3 bg-gray-50">
//                 <FaLock className="text-black mr-2" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   autoComplete="new-password"
//                   className="input input-bordered w-full bg-transparent focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="ml-2"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {error.password && (
//                 <p className="text-red-500 text-sm mt-1">{error.password}</p>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium">Re-enter Password</label>
//               <div className="flex items-center border rounded-lg px-3 bg-gray-50">
//                 <FaLock className="text-black mr-2" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="Re-enter your password"
//                   autoComplete="new-password"
//                   className="input input-bordered w-full bg-transparent focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="ml-2"
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {error.confirmPassword && (
//                 <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 rounded-lg text-white font-semibold bg-blue-700 hover:bg-blue-800 transition duration-300 mb-3"
//             >
//               Create Account
//             </button>

//             <Link to="/login">
//               <button
//                 type="button"
//                 className="w-full px-4 py-2 rounded-lg text-white font-semibold bg-green-700 hover:bg-green-800 transition duration-300"
//               >
//                 Have an account? Login
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


