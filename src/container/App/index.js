import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import {
    AsyncAppLayout,
    AsyncInternalServer,
    AsyncNotFound,
    AsyncForbidden,
    AsyncMovies,

} from './AsyncComponent';
import PublicRoute from '../../route/PublicRoute';

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/"  layout={AsyncAppLayout}  component={AsyncMovies} />
            <PublicRoute path="/403" layout={AsyncAppLayout} component={AsyncForbidden} />

            <Route path="/500" component={AsyncInternalServer} />
            <Route path="/404" component={AsyncNotFound} />
            <Route component={AsyncNotFound} />
        </Switch>
    </Fragment>
);

export default withRouter(App);
