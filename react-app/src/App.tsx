import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        <p>hello</p>
      </Alert>

      <Button selectBtnType="primary">Submit</Button>
    </div>
  );
}

export default App;
