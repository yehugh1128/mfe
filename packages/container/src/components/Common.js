import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export default ({ mount, callback }) => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const currentLocation = useLocation();
    const history = createMemoryHistory();
    useEffect(() => {
        //container 及 组件 的路由行为都会执行
        history.push(currentLocation.pathname);
        mount(ref.current, {
            onNavigate: ({ location }) => {
                // 只有组件路由行为才会执行
                // if (currentLocation.pathname !== location.pathname){
                navigate(location.pathname);
                // }         
            },
            history,
            callback
        });
    }, [currentLocation.pathname]);

    return <div ref={ref}></div>
}