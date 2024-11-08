import Button from "./components/Button";
import NormalListItem from "./components/NormalListItem";
import "./styles/myreset.css";
import "./styles/tailwind.css";

function App() {
  return (
    <>
      <Button isPrimary={true} isDisabled={false}></Button>
      <Button isPrimary={false} isDisabled={false}></Button>
      <Button isPrimary={true} isDisabled={true}></Button>
      <Button isPrimary={false} isDisabled={true}></Button>
      <NormalListItem width={12}></NormalListItem>
      <NormalListItem width={8}></NormalListItem>
    </>
  );
}

export default App;
