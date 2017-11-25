// import React from 'react';
// import ReactDOM from 'react-dom';
// import CelebrityJokes from './components/CelebrityJokes';
// import FoodJokes from './components/FoodJokes';
// import { Router, Route } from 'react-router';
// import { BrowserRouter } from 'react-router-dom'
// import history from './history'

// const Root = () => {
//     return (
//         <div className="container">
//             <BrowserRouter>
//                 <Router history={history}>
//                     <Route path="/" component={FoodJokes} />
//                     <Route path="/special" component={CelebrityJokes} />
//                 </Router>
//             </BrowserRouter>
//         </div>
//     )
// }

// ReactDOM.render(<Root />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


const middleWare = [thunk];

if (process.env.NODE_ENV !== 'priduction') {
    middleWare.push(createLogger());
}

const store = (
    createStore,
    applyMiddleware(...middleWare)
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
//registerServiceWorker();
