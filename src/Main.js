// Main js
import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Contact from './Contact'
import Register from './Register'


const Main = () => (
 <main>
  <Switch>
	<Route exact path='/' component={Home}/>
	<Route path='/admin' component={Admin}/>
	<Route path='/contact' component={Contact} />
	<Route path='/register' component={Register} />

  </Switch>
 </main>
)

export default Main