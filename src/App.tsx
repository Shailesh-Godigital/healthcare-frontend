import { BrowserRouter as Router } from "react-router-dom";
import { AppContent } from "./routes";

function App() {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
