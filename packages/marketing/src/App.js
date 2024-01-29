import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

//解决Css样式冲突
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/pricing' Component={Pricing}></Route>
                    <Route path='/' Component={Landing}></Route>
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
}