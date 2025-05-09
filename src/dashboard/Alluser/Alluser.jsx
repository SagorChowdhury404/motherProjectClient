import React from 'react';
import { FaCheck, FaRegTrashAlt, FaUser, FaUserCheck, FaUserShield } from 'react-icons/fa';
import UseAxiosSecure from '../../hooks/useAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';


const AllUser = () => {
    const axiosSecure = UseAxiosSecure ();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            
            return res.data;
        }
    })

    const handleDelateUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`).then(res => {
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
    }

    const handleChangeRole = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Change Role this!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it role!"
        }).then((result) => {
            if (result.isConfirmed) {
 
                axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: `${user.name} is admin now`,
                            text: "Your did change role ",
                            icon: "success"
                        });
                    }
                });

            }
        });
    }


    return (
        <div className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden py-4">
                <h2 className="text-2xl font-bold mb-4">Total items: {users.length}</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center">
                        <thead>
                            <tr className="bg-yellow-500 text-white">
                                <th className="py-3 px-4"> </th>
                                <th className="py-3 px-4">USER Name</th>
                                <th className="py-3 px-4">USER EMAIL</th>
                                <th className="py-3 px-4">PHONE NUMBER</th>
                                <th className="py-3 px-4"> Join DATE</th>
                                <th className="py-3 px-4">Role</th>
                                <th className="py-3 px-4">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50 transition-all ">
                                    <td className="py-3 px-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">{user.fullName}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">{user.email}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">{user.phone}</td>
                                    <td className="py-3 px-4 whitespace-nowrap">{user.createdAt}</td>

                                    <td onClick={() => handleChangeRole(user)} className="py-3 px-4 whitespace-nowrap flex items-center gap-2 justify-center hover:bg-gray-200 ">
                                        {user.role === "admin" ? (
                                            <FaUserShield className="text-blue-600 text-xl" /> // admin icon
                                        ) : (
                                            <FaUser className="text-gray-600 text-xl" /> // user icon
                                        )}
                                        <span className="capitalize">{user.role}</span>
                                    </td>



                                    <td className="py-3 px-4">
                                        <button onClick={() => handleDelateUser(user._id)}
                                            className="w-9 h-9 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 mx-auto"
                                            title="Delete"
                                        >
                                            <FaRegTrashAlt className="text-lg" />
                                        </button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;
