import "./assets/App.css";
import { TotalBalance } from "./components/dataComponents/TotalBalance";
import { WeeklyGraphic } from "./components/dataComponents/WeeklyGraphic";
import { WeeklyReport } from "./components/dataComponents/WeeklyReport";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <WeeklyReport />
    </div>
  );
}

export default App;
