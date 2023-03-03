// Dependencies
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import { SearchParams } from './SearchParams';
import DetailsErrorBoundary from './Details';
import { useState } from 'react';
import { AdoptedPetContext } from './AdoptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <div
      className="m-0 p-0"
      style={{
        background: 'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
            </header>
            <h1>Adopt Me!</h1>
            <Routes>
              <Route path="/details/:id" element={<DetailsErrorBoundary />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
