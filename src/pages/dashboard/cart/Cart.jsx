import React from 'react';
import UseCart from '../../../hooks/useCart/UseCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../hooks/useAxiosSecure/UseAxiosSecure';
const AxiosSecure = UseAxiosSecure()
const Cart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const formattedTotalPrice = totalPrice.toFixed(2);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosSecure.delete(`/carts/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="lg:px-8 py-6">
            {/* Header with total and pay */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-blue-600 text-white py-5 px-6 rounded-xl shadow-md">
                <h2 className="text-2xl md:text-3xl font-semibold">Items: {cart.length}</h2>
                <h2 className="text-2xl md:text-3xl font-semibold">Total: ${formattedTotalPrice}</h2>
                <button className="btn bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-md transition duration-300">
                    Pay Now
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-gray-300 text-gray-700 font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={item._id} className="hover:bg-slate-200  ">
                                    <td  >{index + 1}</td>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><button type="submit" className='text-blue-00 '>Details..</button> </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-outline btn-error btn-sm"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
