import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/pricing' Component={Pricing}></Route>
                    <Route path='/' Component={Landing}></Route>
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
}