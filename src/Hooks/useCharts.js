import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCharts = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('chartData.json')
            .then(data => setData(data.data))
    }, []);

    return [data, setData];
};

export default useCharts;