import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Routes>
                            <Route path='/auth/*' element={isSignedIn && <Navigate to="/dashboard" /> || <AuthApp onSignIn={() => setIsSignedIn(true)} />} />
                            <Route exact path='/dashboard' element={isSignedIn && <DashboardApp /> || <Navigate to="/" />} />
                            <Route path='/*' Component={MarketingApp} />
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}