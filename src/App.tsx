import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );

  // const [isAlertVisible, setIsAlertVisible] = useState(false);

  // return (
  //   <div>
  //     {isAlertVisible && (
  //       <Alert
  //         isDismissing={true}
  //         handleCloseBtn={() => setIsAlertVisible(false)}
  //       >
  //         <div>hello</div>
  //       </Alert>
  //     )}

  //     <Button
  //       selectBtnType="primary"
  //       handleClick={() => setIsAlertVisible(true)}
  //     >
  //       My Button
  //     </Button>
  //   </div>
  // );
}

export default App;
