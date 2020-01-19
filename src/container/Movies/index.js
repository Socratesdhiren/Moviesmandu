import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

// Import custom components
import List from './ListContainer';

import NotFound from '../Exception/NotFoundContainer';

const Movies = ({match}) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={List}/>

            <Route component={NotFound}/>
        </Switch>
    </Fragment>
);

export default Movies;
