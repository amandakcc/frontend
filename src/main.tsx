import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {BrowserRouter, Route, Routes} from "react-router";
import {App} from "./App";
import {MantineProvider} from "@mantine/core";
import {Notifications} from '@mantine/notifications'

import '@mantine/core/styles.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider defaultColorScheme="dark">
              <Notifications position='top-right'/>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<App/>}/>
                  </Routes>
              </BrowserRouter>
      </MantineProvider>
  </StrictMode>,
)
