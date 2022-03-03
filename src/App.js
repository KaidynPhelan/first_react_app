
import Todo from "./components/Todo.component";

function App() {
  return (
    <div>
      <h1>My Todos</h1>

      {/* Calling the component */}
      <Todo text = "Learn React" />
      <Todo text = "Take out the trash" />
    </div>
    
  );
}

export default App;
 