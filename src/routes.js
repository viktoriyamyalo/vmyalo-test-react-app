import { Route, IndexRoute } from 'react-router';
import React from 'react';

import App from './components/app';
import HomePage from './components/home_page';
import SignupPage from './components/signup_page';

export default(
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/signup" component={SignupPage} />
    </Route>
);