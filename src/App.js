import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel";
import "./css/animate.css";
import "./css/theme.css";
import "./css/style.css";
import "./css/index.css";
import "./assets/js/custom.js";
import { ContextAdmin } from "./Hooks/AdminContext";
import Routers from "./router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ContextAdmin>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Routers />
      </SnackbarProvider>
    </ContextAdmin>
  );
}

export default App;
