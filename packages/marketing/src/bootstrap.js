import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';
const mount = (el, { onNavigate, history }) => {
    if (onNavigate && history) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const defaultHistory = createBrowserHistory();
    const devRoot = document.querySelector('#_marketing-dev-root');
    let pathname = '';
    if (devRoot) {
        mount(devRoot, {
            onNavigate: ({ location }) => {
                if (pathname !== location.pathname) {
                    pathname = location.pathname;
                    ReactDOM.render(
                        <App history={defaultHistory} />,
                        devRoot
                    );
                }
            },
            history: defaultHistory
        });
    }
}

export { mount }