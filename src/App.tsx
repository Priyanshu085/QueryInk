import CodeDisplay from "./components/CodeDisplay";
import MessageDisplay from "./components/MessageDisplay";

const App = () => {
  return (
    <div className="app">
      <div className="app">
        <MessageDisplay />
        <input/>
        <CodeDisplay/>
        <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-chat">Clear Chat</button>
        </div>
        </div>
    </div>
  );
}

export default App;
