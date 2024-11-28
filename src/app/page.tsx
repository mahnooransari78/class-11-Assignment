
import ParentComponent from "./component/parentComponent";
import State from "./component/state";

export default function Home() {
  return (
    <main>
      <State />
      <ParentComponent />
    </main>
  );
}
