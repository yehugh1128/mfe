import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Routes>
                            <Route path='/auth/*' Component={AuthApp} />
                            <Route path='/*' Component={MarketingApp} />
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}