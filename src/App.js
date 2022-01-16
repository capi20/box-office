import React from 'react'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <Routes>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        This is starred
      </Route>
      <Route>Page Not Found!</Route>
    </Routes>
  )
}

export default App;