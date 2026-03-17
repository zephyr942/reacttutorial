import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  return (
    <div>
      {isAlertVisible && (
        <Alert
          isDismissing={true}
          handleCloseBtn={() => setIsAlertVisible(false)}
        >
          <div>hello</div>
        </Alert>
      )}

      <Button
        selectBtnType="primary"
        handleClick={() => setIsAlertVisible(true)}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
