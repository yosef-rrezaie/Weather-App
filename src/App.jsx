import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Favorite from "./Pages/Favorite";
import Layout from "./layout/Layout";
import { createContext, useState } from "react";


export const ComponentsContext = createContext();

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

  const [currentCity, setCurrentCity] = useState("");
  const [cityName, setCityName] = useState(["تهران"]);
  const [language, setLanguage] = useState("fa");
  const [units, setUnits] = useState("metric");
  const [favorite, setFavorite] = useState(false);
  const [country, setCountry] = useState(["IR"]);

  function changeHandler(e) {
    setCurrentCity(e.target.value);
  }

  function clickHandler() {
    if (currentCity === "") return;
    // if (cityName.find((item) => item === currentCity)) {
    //   return;
    // }
    setCityName([...cityName, currentCity]);
  }

  return (
      <QueryClientProvider client={queryClient}>
        <ComponentsContext.Provider
          value={{
            favorite,
            setFavorite,
            cityName,
            setCityName,
            language,
            units,
            setUnits,
            changeHandler,
            currentCity,
            clickHandler,
            country,
            setCountry,
          }}
        >
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ComponentsContext.Provider>
      </QueryClientProvider>
  );
}

export default App;
