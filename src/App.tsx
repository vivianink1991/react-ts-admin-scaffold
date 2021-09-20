import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={lazy(() => import('./views/Home'))}></Route>
            <Route path="/about" component={lazy(() => import('./views/About'))}></Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
