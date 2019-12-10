// Routing Components
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
	<div class="logo center">
	<img src="https://www.mytuxedopark.com/wp-content/uploads/TuxedoPark_logo_FNL_cmyk.png" />
	</div>
	 <nav>
	  <ul>
	    <li><Link to='/'>Home</Link></li>
	    <li><Link to='/admin'>Area Amenities</Link></li>
	    <li><Link to='/contact'>Feature & Finishes</Link></li>
		<li><Link to='/contact'>Floor Plans</Link></li>
		<li><Link to='/register'>Register</Link></li>
		<li><Link to='/contact'>The Builder</Link></li>
			<li><Link to='/footer'>The footer</Link></li>

	  </ul>
	 </nav>
	</header>
)

export default Header