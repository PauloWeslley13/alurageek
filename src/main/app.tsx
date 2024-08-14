import { ToastContainer } from "react-toastify";
import { RootRoutes } from "@/main/routes";
import { ThemeCustomization } from "@/presenter/theme";
import { useApp } from "@/main/hook/useApp";
import { ScrollTop } from "@/main/config/scroll-top";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const { loadThemeToastify } = useApp();

  return (
    <ThemeCustomization>
      <ScrollTop>
        <RootRoutes />
      </ScrollTop>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={loadThemeToastify}
      />
    </ThemeCustomization>
  );
}
