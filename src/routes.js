import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ProductActionPage from './pages/ProductAction/ProductActionPage';
import ProductsPage from './pages/Products/ProductsPage';

const routes = [
    {
        path: '/',
        exact: true,
        main:() => <HomePage/>
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductsPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={ history }/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={ match } history={ history }/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;