import React from 'react';
import { Route, BrowserRouter, Routes, MemoryRouter, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

//解决Css样式冲突
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            {/* <Router history={history} location={history.location} navigator={history}> */}
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route exact path='/' Component={Landing}></Route>
                    <Route path='/pricing' Component={Pricing}></Route>
                </Routes>
            </MemoryRouter>
            {/* </Router> */}
        </StylesProvider>
    </div>
}