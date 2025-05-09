import React from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';
import {useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../hooks/useAxiosSecure/UseAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: payments = [] , isLoading, isError, error } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    });
    // Conditional rendering
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Payment History</h1>

            {payments.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Transaction ID</th>
                                <th className="border border-gray-300 p-2">Amount ($)</th>
                                <th className="border border-gray-300 p-2">Status</th>
                                <th className="border border-gray-300 p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <tr key={payment.transactionId} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 p-2">{payment.transactionId}</td>
                                    <td className="border border-gray-300 p-2">{payment.price}</td>
                                    <td className="border border-gray-300 p-2">{payment.status}</td>
                                    <td className="border border-gray-300 p-2">
                                        {new Date(payment.date).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No payments found.</p>
            )}
        </div>
    );
};

export default PaymentHistory;