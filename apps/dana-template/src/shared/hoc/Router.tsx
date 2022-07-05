import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../../app/Home';
import Layout from './Layout';
const AuthenticationSignInPage = React.lazy(
    () =>
        import('../../app/authentication/signIn/pages/AuthenticationSignInPage')
);
const ScoreboardPage = React.lazy(
    () => import('../../app/scoreboard/pages/ScoreboardPage')
);
const FlightStatusPage = React.lazy(
    () => import('../../app/flightStatus/pages/FlightStatusPage')
);

export default () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/form/signin/basic"
                        element={<AuthenticationSignInPage />}
                    />
                    <Route
                        path="/form/signin/modern"
                        element={<AuthenticationSignInPage />}
                    />

                    <Route
                        path="/templates/game-summary"
                        element={<ScoreboardPage />}
                    />
                    <Route
                        path="/templates/flight-status"
                        element={<FlightStatusPage />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};
