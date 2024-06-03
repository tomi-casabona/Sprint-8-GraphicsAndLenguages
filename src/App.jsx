import "./assets/App.css";
import { TotalBalance } from "./components/dataComponents/TotalBalance";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-red-300 underline">
        Hello world!
      </h1>
      <TotalBalance />
    </>
  );
}

export default App;
