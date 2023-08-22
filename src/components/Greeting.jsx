import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreetings } from "../redux/greet/greetingsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h3>{`${greeting}, Welcome to my app`}</h3>
    </div>
  );
}

export default Greeting;