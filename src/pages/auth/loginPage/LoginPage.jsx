import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginAnimation from '../../../assets/others/Animation login2.json';
import loginBgImg from '../../../assets/others/loginBgImg/authentication.png';
import './LOginPage.css';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [errors, setErrors] = useState({});

    const { register, handleSubmit, formState: { errors: formErrors }, reset } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6, 'captchaCanvas', '#333', '#f5f5f5');
    }, []);

    const isValidPassword = (password) => {
        const minLength = /.{8,}/;
        const hasUppercase = /[A-Z]/;
        const hasNumber = /[0-9]/;
        return minLength.test(password) && hasUppercase.test(password) && hasNumber.test(password);
    };

    const onSubmit = (data) => {
        let validationErrors = {};
        if (!captcha) {
            validationErrors.captcha = "Captcha is required!";
        } else if (!isCaptchaValid) {
            validationErrors.captcha = "Captcha did not match! Please check captcha.";
        }
        setErrors(validationErrors);


        
        if (Object.keys(validationErrors).length === 0) {
            console.log("Logged In!", data);









            // Reset form and captcha
            reset();
            setCaptcha('');
            setIsCaptchaValid(false);
            loadCaptchaEnginge(6, 'captchaCanvas', '#333', '#f5f5f5');
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${loginBgImg})` }}
        >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 my-10">

                {/* Animation */}
                <div className="hidden md:block w-80">
                    <Lottie animationData={loginAnimation} />
                </div>

                {/* Login Form */}
                <div className="card-body card w-96 shadow-xl p-6 rounded-2xl bg-white">
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaUser className="text-black mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                    className="w-full bg-transparent focus:outline-none"
                                />
                            </div>
                            {formErrors.email && <small className="text-red-500">{formErrors.email.message}</small>}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaLock className="text-black mr-2" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Password is required",
                                        validate: (value) => isValidPassword(value) || "Password must be at least 8 characters, include 1 uppercase letter, and 1 number"
                                    })}
                                    className="w-full bg-transparent focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="ml-2 text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {formErrors.password && <small className="text-red-500">{formErrors.password.message}</small>}
                        </div>

                        {/* Captcha */}
                        <div className="mb-4">
                            <div className="captcha-wrapper mb-4">
                                <LoadCanvasTemplate reloadColor="#007bff" />
                            </div>

                            <div className="flex items-center border rounded-lg px-3 h-12 mt-2 bg-gray-50">
                                <input
                                    type="text"
                                    placeholder="Enter captcha text"
                                    value={captcha}
                                    onChange={(e) => setCaptcha(e.target.value)}
                                    className="w-full bg-transparent focus:outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsCaptchaValid(validateCaptcha(captcha))}
                                    className="ml-2 px-3 py-1 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
                                >
                                    Check
                                </button>
                            </div>
                            {errors.captcha && <small className="text-red-500">{errors.captcha}</small>}
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={!isCaptchaValid}
                            className={`w-full px-4 py-2 mt-2 rounded-lg text-white font-semibold transition ${isCaptchaValid ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            Login
                        </button>
                    </form>

                    <div className="text-center my-3">
                        <Link to="/forgotPassword" className="text-blue-600 hover:underline text-sm">Forgot password?</Link>
                    </div>

                    <div className="mt-3 text-center">
                        <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
}



// import React, { useState, useEffect } from 'react';
// import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import loginAnimation from '../../../assets/others/Animation login2.json';
// import loginBgImg from '../../../assets/others/loginBgImg/authentication.png';
// import './LOginPage.css';

// export default function LoginPage() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [captcha, setCaptcha] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [isCaptchaValid, setIsCaptchaValid] = useState(false);

//     useEffect(() => {
//         loadCaptchaEnginge(6, 'captchaCanvas', '#333', '#f5f5f5');
//     }, []);

//     const isValidEmail = (email) =>
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

//     const isValidPassword = (password) => {
//         const minLength = /.{8,}/;
//         const hasUppercase = /[A-Z]/;
//         const hasNumber = /[0-9]/;
//         return minLength.test(password) && hasUppercase.test(password) && hasNumber.test(password);
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         let validationErrors = {};

//         if (!email) validationErrors.email = "Email is required!";
//         else if (!isValidEmail(email)) validationErrors.email = "Invalid email format!";

//         if (!password) {
//             validationErrors.password = "Password is required!";
//         } else if (!isValidPassword(password)) {
//             validationErrors.password = "Password must be at least 8 characters, include 1 uppercase letter and 1 number!";
//         }

//         if (!captcha) {
//             validationErrors.captcha = "Captcha is required!";
//         } else if (!isCaptchaValid) {
//             validationErrors.captcha = "Captcha did not match! Please check captcha.";
//         }

//         setErrors(validationErrors);

//         if (Object.keys(validationErrors).length === 0) {
//             console.log("Logged In!", email, password);














//             setEmail('');
//             setPassword('');
//             setCaptcha('');
//             setIsCaptchaValid(false);
//             loadCaptchaEnginge(6, 'captchaCanvas', '#333', '#f5f5f5');
//         }
//     };

//     return (
//         <div
//             className="flex justify-center items-center min-h-screen bg-cover bg-center"
//             style={{ backgroundImage: `url(${loginBgImg})` }}
//         >
//             <div className="flex flex-col md:flex-row-reverse items-center gap-8 my-10">

//                 {/* Animation */}
//                 <div className="hidden md:block w-80">
//                     <Lottie animationData={loginAnimation} />
//                 </div>

//                 {/* Login Form */}
//                 <div className="card-body card w-96 shadow-xl p-6 rounded-2xl bg-white">
//                     <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

//                     <form onSubmit={handleLogin} autoComplete="on">

//                         {/* Email */}
//                         <div className="mb-4">
//                             <label className="block mb-1 text-sm font-medium">Email</label>
//                             <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
//                                 <FaUser className="text-black mr-2" />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     autoComplete="email"
//                                     placeholder="Enter your email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full bg-transparent focus:outline-none"
//                                     required
//                                 />
//                             </div>
//                             {errors.email && <small className="text-red-500">{errors.email}</small>}
//                         </div>

//                         {/* Password */}
//                         <div className="mb-4">
//                             <label className="block mb-1 text-sm font-medium">Password</label>
//                             <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
//                                 <FaLock className="text-black mr-2" />
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     name="password"
//                                     autoComplete="current-password"
//                                     placeholder="Enter your password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="w-full bg-transparent focus:outline-none"
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="ml-2 text-gray-600"
//                                 >
//                                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                                 </button>
//                             </div>
//                             {errors.password && <small className="text-red-500">{errors.password}</small>}
//                         </div>

//                         {/* Captcha */}
//                         <div className="mb-4">
//                             <div className="captcha-wrapper mb-4">
//                                 <LoadCanvasTemplate reloadColor="#007bff" />
//                             </div>

//                             <div className="flex items-center border rounded-lg px-3 h-12 mt-2 bg-gray-50">
//                                 <input
//                                     type="text"
//                                     placeholder="Enter captcha text"
//                                     value={captcha}
//                                     onChange={(e) => setCaptcha(e.target.value)}
//                                     className="w-full bg-transparent focus:outline-none"
//                                     required
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsCaptchaValid(validateCaptcha(captcha))}
//                                     className="ml-2 px-3 py-1 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
//                                 >
//                                     Check
//                                 </button>
//                             </div>
//                             {errors.captcha && <small className="text-red-500">{errors.captcha}</small>}
//                         </div>

//                         {/* Login Button */}
//                         <button
//                             type="submit"
//                             disabled={!isCaptchaValid}
//                             className={`w-full px-4 py-2 mt-2 rounded-lg text-white font-semibold transition ${isCaptchaValid ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'}`}
//                         >
//                             Login
//                         </button>
//                     </form>

//                     <div className="text-center my-3">
//                         <Link to="/forgotPassword" className="text-blue-600 hover:underline text-sm">Forgot password?</Link>
//                     </div>

//                     <div className="mt-3 text-center">
//                         <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link></p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }
