import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

//解决Css样式冲突
const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history} location={history.location} navigator={history}>
                <Routes>
                    <Route exact path='/auth/signin' element={<Signin onSignIn={onSignIn} />}>

                    </Route>
                    <Route path='/auth/signup' element={<Signup onSignIn={onSignIn} />}></Route>
                </Routes>
            </Router>
        </StylesProvider>
    </div>
}