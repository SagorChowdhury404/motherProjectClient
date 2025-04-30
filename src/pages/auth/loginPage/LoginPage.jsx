import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginAnimation from '../../../assets/others/Animation login2.json';
import loginBgImg from '../../../assets/others/loginBgImg/authentication.png';
import './LOginPage.css';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialMediaLogin from '../socialLoginPage/SocialMediaLogin';

export default function LoginPage() {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [firebaseError, setFirebaseError] = useState('');

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
        setFirebaseError('');

        if (!captcha) {
            validationErrors.captcha = "Captcha is required!";
        } else if (!isCaptchaValid) {
            validationErrors.captcha = "Captcha did not match! Please check captcha.";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            signIn(data.email, data.password)
                .then(result => {
                    console.log(result)
                    Swal.fire({
                        title: "User login successfully",
                        icon: "success",
                        draggable: true
                    });
                    navigate(from, { replace: true });
                })
                .catch(error => {
                    setFirebaseError(error.message);
                });

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
                    <SocialMediaLogin></SocialMediaLogin>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaUser className="text-black mr-2" />
                                <input
                                    type="email"
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

                        {/* Firebase Error */}
                        {firebaseError && (
                            <div className="mb-4 text-center">
                                <small className="text-red-500">{firebaseError}</small>
                            </div>
                        )}

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
