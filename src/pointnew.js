import React from 'react';
import { useParams } from 'react-router-dom';

function Pointnew({ points }) {
    const { slug } = useParams();

    const point = points.find((point) => point.slug == slug);

    return <h1>hi from point</h1>
}

export default Pointnew;