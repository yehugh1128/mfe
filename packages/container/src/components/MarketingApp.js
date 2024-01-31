import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const currentLocation = useLocation();
    const history = createMemoryHistory();
    useEffect(() => {
        history.push(currentLocation.pathname);
        mount(ref.current, {
            onNavigate: ({ location }) => {
                // if (currentLocation.pathname !== location.pathname){
                    navigate(location.pathname);
                // }         
            },
            history
        });
    },[currentLocation.pathname]);

    return <div ref={ref}></div>
}