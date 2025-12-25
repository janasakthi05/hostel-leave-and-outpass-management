import { BrowserRouter } from "react-router-dom";
import StudentRoutes from "./student/StudentRoutes";

function App() {
  return (
    <BrowserRouter>
      <StudentRoutes />
    </BrowserRouter>
  );
}

export default App;
