import React from 'react';
import { Link } from 'react-router-dom';

const ViewFullMenu = () => {
    return (
        <div className="text-center">
            <Link to='/ourShop'> <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></Link>
        </div>

    );
};

export default ViewFullMenu;