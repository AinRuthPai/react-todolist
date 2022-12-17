import styled from "styled-components";
import { useState } from "react";

const TodoHeadBlock = styled.div`
  padding-top: 32px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e9ecef;
  width: 80%;

  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 20px;
  }
  .day {
    display: inline;
    color: #868e96;
    font-size: 18px;
  }
  /* .time {
    display: inline;
    margin-left: 8px;
    font-size: 18px;
  } */
`;

function TodoHead() {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const date = time.toLocaleString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const weekday = time.toLocaleString("en-EN", { weekday: "long" });
  // const realTime = time.toLocaleTimeString();

  return (
    <TodoHeadBlock>
      <h1>{date}</h1>
      <div className='day'>{weekday.toUpperCase()}</div>
      {/* <div className='time'>{realTime}</div> */}
    </TodoHeadBlock>
  );
}

export default TodoHead;
