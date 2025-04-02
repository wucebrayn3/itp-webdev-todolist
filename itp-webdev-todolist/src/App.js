import TaskContainer from "./components/TaskContainer";
import About from "./components/About";

function App() {
  return (
    <div className="App" style={{gap: "10px", 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center", 
                          justifyContent: "flex-start", 
                          height: "auto", 
                          boxSizing: "border-box"
                          }}>
        <TaskContainer />
        <About />
    </div>
  );
}

export default App;
