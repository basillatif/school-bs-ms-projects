import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Components/Landing/Landing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
