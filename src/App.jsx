import "./assets/App.css";
import { WeeklyReport } from "./components/dataComponents/WeeklyReport";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <div className="w-screen h-screen bg-slate-300">
      <WeeklyReport />
    </div>
    </Suspense>
  );
}

export default App;
