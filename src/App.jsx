import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Favorite from "./Pages/Favorite";
import Layout from "./layout/Layout";
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ComponentsContext = createContext();

function App() {
  const addFavorite = useSelector((store) => store.Favorite.favoriteObject);
  console.log(addFavorite);

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
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar="true"
        newestOnTop={false}
        // closeOnClick
        rtl={true}
        theme="light"
      />
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
          setCurrentCity,
        }}
      >
        <BrowserRouter
          future={{
            v7_relativeSplatPath: true,
          }}
        >
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/Homepage" />} />{" "}
              <Route path="/Homepage" element={<HomePage />} />
              <Route path="/Favorite" element={<Favorite />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ComponentsContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
