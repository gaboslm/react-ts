import { Counter } from './modules/Counter/components/Counter';
import { Auth } from './modules/Auth/components/Auth';
import { Timer } from './modules/Timer/components/Timer';
import { Reducer } from './modules/Counter/components/Reducer';
import { Form } from './modules/Form/components/Form';

function App() {
  return (
    <>
    <nav className="d-flex justify-content-between border-bottom py-2">
      <h1>React + Typescript</h1>
      <Auth />
    </nav>

    <Counter />
    <hr />
    <Timer />
    <hr />
    <Reducer />
    <hr />
    <Form />
    </>
  );
}

export default App;
