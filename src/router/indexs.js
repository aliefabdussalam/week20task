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
      <Guard path="/product" component={Product} />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Guard path="/detail/:id" component={Details} />
    </Switch>
  )
}

export default Router