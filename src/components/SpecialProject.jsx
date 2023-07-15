import React, { useState, useEffect } from 'react';

const SpecialProject = () => {
    const [specialData, setSpecialData] = useState('');

    useEffect(() => {
        const fetchData = () => {
            // Simulating a delay to mimic an asynchronous operation
            setTimeout(() => {
                setSpecialData('Special data has been fetched!');
            }, 2000);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Special Project</h1>
            {specialData ? (
                <p>{specialData}</p>
            ) : (
                <p>Loading special data...</p>
            )}
        </div>
    );
};

export default SpecialProject;
