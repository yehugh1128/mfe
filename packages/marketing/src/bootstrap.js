import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, history }) => {
    if (onNavigate && history) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history || createMemoryHistory()} />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, {
            history: createBrowserHistory()
        });
    }
}

export { mount }