import React from 'react';
import SectionTitle from '../../pages/shared/sectionTittle/SectionTittle';
import UseAxiosSecure from '../../hooks/useAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const ManageItems = () => {
    const axiosSecure = UseAxiosSecure();
  
    const { data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')

            return res.data;
        }
    })

    // const handleEditMenu = (id) => {
    //     Swal.fire({
    //         title: "Are you sure you want to update?",
    //         text: "You won't be able to revert this!",
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, update it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             console.log("hello update")
    //             // axiosSecure.delete(`/menu/${id}`).then(res => {
    //             //     if (res.data.deletedCount > 0) {
    //             //         refetch();
    //             //         Swal.fire({
    //             //             title: "Deleted!",
    //             //             text: "Your item has been update.",
    //             //             icon: "success"
    //             //         });
    //             //     }
    //             // });
    //         }
    //     });
    // }

    const handleDelateMenu = (id) => {
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
                axiosSecure.delete(`/menu/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    }
                    else {
                        console.log("heelo delete probelm")
                    }
                });
            }
        });
    }

    return (
        <div>
            <SectionTitle heading='MY BOOKINGS' subHeading="---Excellent Ambience---"></SectionTitle>
            <h1>ManageItems</h1>
            <table className="w-full text-sm text-center">
                <thead>
                    <tr className="bg-yellow-500 text-white">
                        <th className="py-3 px-4"> </th>
                        <th className="py-3 px-4">menu Name</th>
                        <th className="py-3 px-4">Image</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">Update</th>
                        <th className="py-3 px-4">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu, index) => (
                        //category image name price _id
                        <tr key={index} className="border-b hover:bg-gray-50 transition-all ">
                            <td className="py-3 px-4 whitespace-nowrap">{index + 1}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{menu.name}</td>
                            <td className="py-3 px-4 whitespace-nowrap w-12"> <img src={menu.image} alt="" srcset="" /> </td>

                            <td className="py-3 px-4 whitespace-nowrap">{menu.price}</td>



                            <td className="py-3 px-4">
                                <Link to={`/dashboard/updateItems/${menu._id}`}>
                                    <button
                                        //updateItems  onClick={() => handleEditMenu(menu._id)}

                                        className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 mx-auto"
                                        title="Edit"
                                    >
                                        <FaEdit />
                                    </button>
                                </Link>
                            </td>

                            <td className="py-3 px-4">
                                <button onClick={() => handleDelateMenu(menu._id)}
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
    );
};

export default ManageItems;