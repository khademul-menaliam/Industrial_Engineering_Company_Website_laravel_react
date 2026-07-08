import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import FrontendApp from './frontend/FrontendApp';

ReactDOM.createRoot(document.getElementById('frontend-app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <FrontendApp />
        </BrowserRouter>
    </React.StrictMode>
);
