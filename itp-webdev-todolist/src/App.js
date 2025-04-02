import TaskContainer from "./components/TaskContainer";

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
    </div>
  );
}

export default App;
