import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import AppRouter from '@/router';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppRouter/>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
} else {
    console.error("Failed to find the root element");
}
