import './App.css';
import { Sidebar } from "./MyComponents/Sidebar";
import { MainContent } from "./MyComponents/MainContent";
import { Widgets } from "./MyComponents/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <Widgets />
    </div>
  );
}

export default App;
