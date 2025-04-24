import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
// import axios from 'axios';
import UseAxiosSecure from '../../../hooks/useAxiosSecure/UseAxiosSecure';
import UseCart from '../../../hooks/useCart/UseCart';

const BuyCard = ({ item }) => {
    const axiosSecure = UseAxiosSecure()
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth(); // <- FIXED HERE
    const [cart, refetch] = UseCart();

    const navigate = useNavigate();
    const location = useLocation();
    //  const from = location.state?.from?.pathname || '/';

    const addToCart = () => {
        // console.log(item);
        if (user && user.email) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }

                })


        }
        else {
            Swal.fire({
                title: "Please login to add to the cart",
                text: "You won't be able to add this without logging in.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    };

    return (
        <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover"
                />
                <div className="p-5 flex flex-col space-y-3">
                    <h2 className="text-xl font-bold text-blue-700">{name}</h2>
                    <p className="text-gray-600 text-sm">
                        {recipe}
                        <Link className="text-blue-600 ml-2" to={`/order/${item._id}`}>
                            More Details...
                        </Link>
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold text-green-600">${price}</p>
                        <button
                            onClick={addToCart}
                            type="button"
                            className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyCard;
