import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppContent } from "./routes";

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppContent />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
