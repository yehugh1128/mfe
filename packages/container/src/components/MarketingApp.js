// import { mount } from 'marketing/app';
import Landing from 'marketing/Landing';
import React, { useRef, useEffect } from 'react';
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        // mount(ref.current);
    });

    return <div ref={ref}><Landing /></div>
}