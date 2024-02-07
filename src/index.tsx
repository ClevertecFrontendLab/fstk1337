import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from '@app';

import 'normalize.css';
import './index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);
