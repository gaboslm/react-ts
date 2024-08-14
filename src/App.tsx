import { Counter } from './components/Counter';
import { Auth } from './components/Auth';
import { Timer } from './components/Timer';
import { Reducer } from './components/Reducer';
import { Form } from './components/Form';

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
