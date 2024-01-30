import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        mount(ref.current, {
            onNavigate: ({ location }) => {
                navigate(location.pathname);
                console.log(location)
            }
        });
    });

    return <div ref={ref}></div>
}