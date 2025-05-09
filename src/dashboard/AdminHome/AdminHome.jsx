import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../hooks/useAxiosSecure/UseAxiosSecure';
import { FaDollarSign, FaUsers, FaBoxOpen, FaShoppingCart } from 'react-icons/fa';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  // Fetching Admin Stats
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Prepare PieChart Data
  const pieData = [
    { name: 'Revenue', value: stats?.revenue ?? 0 },
    { name: 'Customers', value: stats?.users ?? 0 },
    { name: 'Products', value: stats?.menus ?? 0 },
    { name: 'Orders', value: stats?.orders ?? 0 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="indicator">
        <div className="card border-base-300 border shadow-sm">
          <div className="card-body">
            <h2 className='text-3xl text-blue-600 font-bold'>Hi, Welcome to</h2>
            <h1 className='text-2xl font-bold'>
              {user?.displayName ? user.displayName : "back"}
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section>
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaDollarSign className="text-4xl text-green-500" />
            </div>
            <div className="stat-value text-primary">{stats?.revenue ?? 0}</div>
            <div className="stat-desc text-black text-xl">Revenue</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUsers className="text-4xl text-blue-500" />
            </div>
            <div className="stat-value text-primary">{stats?.users ?? 0}</div>
            <div className="stat-desc text-black text-xl">Customers</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaBoxOpen className="text-4xl text-orange-500" />
            </div>
            <div className="stat-value text-primary">{stats?.menus ?? 0}</div>
            <div className="stat-desc text-black text-xl">Products</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaShoppingCart className="text-4xl text-red-500" />
            </div>
            <div className="stat-value text-primary">{stats?.orders ?? 0}</div>
            <div className="stat-desc text-black text-xl">Orders</div>
          </div>
        </div>
      </section>

      {/* Pie Chart Section */}
      <section className="flex mt-8 justify-center">
        <div className="w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
