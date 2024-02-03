import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

//解决Css样式冲突
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history} location={history.location} navigator={history}>
                <Routes>
                    <Route exact path='/auth/signin' Component={Signin}></Route>
                    <Route path='/auth/signup' Component={Signup}></Route>
                </Routes>
            </Router>
        </StylesProvider>
    </div>
}