import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/globalStyles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<Home />
	</React.StrictMode>
);

reportWebVitals();
