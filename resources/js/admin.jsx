import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AdminApp from './admin/AdminApp';

ReactDOM.createRoot(document.getElementById('admin-app')).render(
    <React.StrictMode>
        <BrowserRouter basename="/titan-secure">
            <AdminApp />
        </BrowserRouter>
    </React.StrictMode>
);
