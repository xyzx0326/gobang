import {Home, Play} from '@/pages';
import {store} from "@/stores";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/play/:mode" element={<Play/>}/>
                <Route path="/play/:mode/:roomId" element={<Play/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
