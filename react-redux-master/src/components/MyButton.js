import { useDispatch } from "react-redux";
import increment from "../actions";

const MyButton = () => {
  let dispatch = useDispatch();
  return <button onClick={() => dispatch(increment(1))}>Increase</button>;
};

export default MyButton;
