import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Footer from './pages/Footer/Footer';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../src/pages/Home/Home.scss';
import '../src/pages/Product/Product.scss';
import '../src/pages/Footer/Footer.scss';
import './styles/triblio_bundle.css';

function App() {
	return (
		<Router>
			<>
				<Route exact path="/" component={Home} />
				<Route path="/product" component={Product} />
				<Route path="/footer" component={Footer} />
			</>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
