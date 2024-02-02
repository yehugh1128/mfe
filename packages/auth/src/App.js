import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

//解决Css样式冲突
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

const routes = [
    { path: '/', componnet: Signin },
    { path: '/auth/signin', componnet: Signin },
    { path: '/auth/signup', componnet: Signup },
];

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history} location={history.location} navigator={history} navigationType='PUSH'>
                <Routes>
                    {routes.map((route) => <Route path={route.path} Component={route.componnet} key={route.path} />)}
                </Routes>
            </Router>
        </StylesProvider>
    </div>
}