import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export default function AppRoute(props) {
  return (
    <Suspense fallback={''}>
      <Switch>
        <Route path="/" component={(p) => <Redirect to="/customer" /> } exact />
        <Route path="/customer" component={lazy(() => import('./components/customer/Index'))} exact />
        <Route path="/customer/create" component={lazy(() => import('./components/customer/Create'))} exact />
        <Route path="/customer/:id/" component={lazy(() => import('./components/customer/Detail'))} exact />
        <Route path="/customer/edit/:id/" component={lazy(() => import('./components/customer/Edit'))} exact />
        <Route path="/customer/delete/:id/" component={lazy(() => import('./components/customer/Delete'))} exact />
      </Switch>
    </Suspense>
  )
}