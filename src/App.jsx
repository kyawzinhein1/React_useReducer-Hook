import { useReducer } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  PLUS: "plus",
  MINUS: "minus",
  UPDATE_KEY: "updateKey",
};

const App = () => {
  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })
        }
      />
      <h3>Your Key - {state.key} </h3>
      <button onClick={() => dispatch({ type: ACTION.MINUS })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: ACTION.PLUS })}>+</button>
    </div>
  );
};

export default App;
