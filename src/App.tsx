import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppContent } from "./routes";
import {routes} from './routes'

// type RouteType = {
//   id: string | number;
//   path: string;
//   component: () => JSX.Element;
//   requiresAuth: boolean;
//   roles: string[];
// };

// Update AppContentProps
// interface AppContentProps {
//   routes: RouteType[];
// }

// Update AppContent component
function App() {
  return (
    <div>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppContent  routes={routes}/>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
