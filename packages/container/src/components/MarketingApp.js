import { mount } from 'marketing/app';
import React, { useRef, useEffect } from 'react';
console.log(mount);
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        // mount(ref.current);
    });

    return <div ref={ref}>bbs</div>
}