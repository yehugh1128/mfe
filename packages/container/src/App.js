import React, { Suspense, lazy, useState } from 'react';
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
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Routes>
                            <Route path='/auth/*' element={<AuthApp onSignIn={() => setIsSignedIn(true)} />} />
                            <Route path='/*' Component={MarketingApp} />
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}