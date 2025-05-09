import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../pages/shared/sectionTittle/SectionTittle';
import AxiosPublic from '../../hooks/axiosPublic/AxiosPublic';
import UseAxiosSecure from '../../hooks/useAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const UpdateItems = () => {
    const { name, image, category, price, recipe, _id } = useLoaderData();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const axiosPublic = AxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const watchCategory = watch('category');

    const onSubmit = async (data) => {
        try {
            const finalCategory = data.newCategory?.trim()
                ? data.newCategory
                : data.category;

            if (!finalCategory) {
                alert("Please select or enter a category.");
                return;
            }

            let imageUrl = image; // Keep existing image by default

            if (data.image && data.image.length > 0) {
                const imageFile = new FormData();
                imageFile.append('image', data.image[0]);

                const uploadRes = await axiosPublic.post(
                    `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
                    imageFile,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );

                if (!uploadRes.data.success) {
                    console.error("Image upload failed", uploadRes.data);
                    alert("Image upload failed");
                    return;
                }

                imageUrl = uploadRes.data.data.display_url;
            }

            const menuItem = {
                name: data.name,
                category: finalCategory,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: imageUrl,
            };

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Item updated successfully!",
                    icon: "success",
                    confirmButtonColor: '#3085d6',
                });
                reset();
            } else {
                console.error("Failed to update menu item:", menuRes.data);
                alert("No changes were made or update failed.");
            }
        } catch (error) {
            console.error("Upload or Save Error:", error);
            alert("An error occurred. Please check the console.");
        }
    };

    return (
        <div className="min-h-screen text-white w-full">
            <SectionTitle heading="Update Items" subHeading="--- What's new UpdateIte ---" />
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-gray-900 rounded-2xl shadow-md p-6 md:p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                defaultValue={name}
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full bg-gray-800 text-white"
                                placeholder="Item name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>

                        {/* Category & Price */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Category</label>
                                <select
                                    defaultValue={category}
                                    {...register("category")}
                                    className="select select-bordered w-full bg-gray-800 text-white"
                                >
                                    <option value="">Select category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Price</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    defaultValue={price}
                                    {...register("price", { required: "Price is required" })}
                                    className="input input-bordered w-full bg-gray-800 text-white"
                                    placeholder="14.99"
                                />
                                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                            </div>
                        </div>

                        {/* Custom Category */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Custom Category (if not listed)</label>
                            <input
                                type="text"
                                {...register("newCategory", {
                                    validate: value =>
                                        watchCategory || value.trim()
                                            ? true
                                            : "Select a category or enter a new one",
                                })}
                                className="input input-bordered w-full bg-gray-800 text-white"
                                placeholder="Enter custom category"
                            />
                            {errors.newCategory && (
                                <p className="text-red-500 text-sm">{errors.newCategory.message}</p>
                            )}
                        </div>

                        {/* Recipe */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Recipe</label>
                            <textarea
                                defaultValue={recipe}
                                {...register("recipe", { required: "Recipe is required" })}
                                className="textarea textarea-bordered w-full min-h-[180px] bg-gray-800 text-white"
                                placeholder="Write recipe or description"
                            />
                            {errors.recipe && <p className="text-red-500 text-sm">{errors.recipe.message}</p>}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Image (upload new to replace)</label>
                            <input
                                type="file"
                                {...register("image")}
                                className="file-input file-input-bordered w-full bg-gray-800 text-white"
                            />
                            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-primary w-full mt-4">
                            Update Item
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;
