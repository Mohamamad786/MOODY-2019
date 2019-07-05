// Main js
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Contact from './Contact'

const Main = () => (
 <main>
  <Switch>
	<Route exact path='/' component={Home}/>
	<Route path='/admin' component={Admin}/>
	<Route path='/contact' component={Contact} />
  </Switch>
 </main>
)

export default Main