import React, { useEffect, useState } from 'react';


const UseMenu = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
            });
    }, []);
    
    return [data, loading]
};

export default UseMenu;