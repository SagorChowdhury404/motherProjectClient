import React from 'react';
import UseAxiosSecure from '../useAxiosSecure/UseAxiosSecure';
import useAuth from '../useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';

const UseCart = () => {
    // tan stack query --
    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]


};

export default UseCart;