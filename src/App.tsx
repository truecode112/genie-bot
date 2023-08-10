import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Chooseyourgenie from "./pages/Chooseyourgenie";
import Token from "./pages/Token";
import CheckOut from "./pages/CheckOut";
import CheckOut30 from "./pages/CheckOut30";
import CheckOut90 from "./pages/CheckOut90";
import Login from "./pages/Login";
import Features from "./pages/Features";
import Terms from "./pages/Terms";
import Success from "./pages/Success" 
import Setup from "./pages/Setup"
import MyGenie from "./pages/MyGenie"; 
import Waitlist from "./pages/Waitlist"
import Leaderboard from "./pages/Leaderboard"
import Dashboard from "./pages/Dashboard"
import Rules from "./pages/Rules"
import Train from "./pages/Train";
import Configuration from "./pages/Configuration";
import { useEffect } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains";
import { HelmetProvider } from 'react-helmet-async';
import "./global.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  let query = useQuery();

  useEffect(() => {
    let ref = query.get("ref");

    // Store `ref` in session storage
    if (ref) {
      sessionStorage.setItem('affiliateCode', ref);
    }
  }, []);

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/chooseyourgenie":
        title = "";
        metaDescription = "";
        break;
      case "/token":
        title = "";
        metaDescription = "";
        break;
      case "/check-out":
        title = "";
        metaDescription = "";
        break;
      case "/check-out-30":
        title = "";
        metaDescription = "";
        break;
      case "/check-out-90":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/features":
        title = "";
        metaDescription = "";
        break;
      case "/terms":
       title = "";
       metaDescription = "";
       break;
      case "/success":
      title = "";
      metaDescription = "";
      break;
      case "/setup":
      title = "";
      metaDescription = "";
      break;
      case "/MyGenie":
      title = "";
      metaDescription = "";
      break;
      case "/Waitlist":
      title = "";
      metaDescription = "";
      break;
      case "/Leaderboard":
      title = "";
      metaDescription = "";
      break;
      case "/Rules":
      title = "";
      metaDescription = "";
      break;
      case "/Dashboard":
      title = "";
      metaDescription = "";
      break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <HelmetProvider>
      <ThirdwebProvider
        activeChain={Ethereum}
        authConfig={{
          // This domain should match the backend
          domain: process.env.REACT_APP_THIRDWEB_AUTH_DOMAIN || "",
          // Pass the URL of the auth endpoints
          authUrl: "/api/auth",
          // login redirect
          // loginRedirect: `/`,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chooseyourgenie" element={<Chooseyourgenie />} />
          <Route path="/token" element={<Token />} />
          <Route path="/check-out" element={<CheckOut />} />
          <Route path="/check-out-30" element={<CheckOut30 />} />
          <Route path="/check-out-90" element={<CheckOut90 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/success" element={<Success />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/mygenie" element={<MyGenie />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/config" element={<Configuration />} />
        </Routes>
      </ThirdwebProvider>
    </HelmetProvider>
  );
}
export default App;
