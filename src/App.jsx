import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Favorite from "./Pages/Favorite";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        staleTime: 60 * 1000,
        retry: 1,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
