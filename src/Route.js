import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {HomePage } from './Homepage';
import {AddIngrediants} from './ingredents';
import {ReceipeSearchPage} from './receipe';
import {ShopingListPage } from './ShopingList'
const routes= [{
    path:'/',
    Component: HomePage,
    exact:true,
}, {
    path: '/recipes',
    Component: ReceipeSearchPage,
}, {
    path: '/add-ingredient',
    Component: AddIngrediants,
}, {
    path: '/shopping-list',
    Component: ShopingListPage,
}
];

export const Routes = () => (
    <Router>
        <Switch>
            {routes.map((route,index)=>(
            <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            >
                <route.Component/>
            </Route>
            ))}
        </Switch>
    </Router>
)