import React from 'react';
import { RouterProvider } from 'react-router';
import { LanguageProvider } from './components/main';
import { router } from './routes';

function App() {
  return (
    <LanguageProvider>
        <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
