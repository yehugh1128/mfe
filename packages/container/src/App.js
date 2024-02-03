import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Routes>
                        <Route path='/auth/*' Component={AuthApp} />
                        <Route path='/*' Component={MarketingApp} />
                    </Routes>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}