import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Logo from 'components/logo'
import App from 'App'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/logo" component={Logo} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}
