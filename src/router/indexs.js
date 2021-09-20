import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Details from '../pages/details'

import Guard from './Guard'

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route path="/transaksi">
        <Details />
      </Route>
    </Switch>
  )
}

export default Router