import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth/useAuth";
import UseAxiosSecure from "../../../hooks/useAxiosSecure/UseAxiosSecure";


const SocialMediaLogin = () => {
    const { googleSignIn } = useAuth();
    const AxiosSecure = UseAxiosSecure(); // your custom axios instance

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;

                const saveUser = {
                    uid: user.uid,
                    fullName: user.displayName,
                    phone: user.phoneNumber || "", // usually null from Google
                    email: user.email,
                    createdAt: new Date().toISOString(),
                    role: "user",
                };

                console.log(saveUser);

                // Now send user data using AxiosSecure
                AxiosSecure.post('/users', saveUser)
                    .then(response => {
                        console.log('User saved successfully', response.data);
                        // maybe redirect or show success toast
                    })
                    .catch(error => {
                        console.error('Error saving user:', error);
                        // maybe show error toast
                    });

            })
            .catch(error => {
                console.error('Error during Google SignIn:', error);
            });
    };

    
    return (
        <div>
            {/* Google Button */}
            <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-600 transition my-5"
            >
                <FaGoogle className="text-lg" />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialMediaLogin;
