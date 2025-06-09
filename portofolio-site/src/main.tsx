import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MantineProvider } from '@mantine/core';
import Routing from './navigation/Routing.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Routing>
        </Routing>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
)
