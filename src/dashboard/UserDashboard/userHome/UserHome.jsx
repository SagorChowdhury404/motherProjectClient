import React from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>AdminHome</h1>
            <h2>hi WellCome to </h2>
            {
                user?.displayName ? user?.displayName :" back"
            }
        </div>
    );
};

export default UserHome;