import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import CookieProvider from "./components/cookies/CookieProvider";

function App() {
  return (
    <CookieProvider>
      <AppRoutes />
    </CookieProvider>
  );
}

export default App;
