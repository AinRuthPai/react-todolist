import styled from "styled-components";
import { useEffect, useState } from "react";

const TodoHeadBlock = styled.div`
  padding-top: 42px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    display: inline;
    color: #868e96;
    font-size: 21px;
  }
  .time {
    display: inline;
    margin-left: 8px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const date = time.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const weekday = time.toLocaleString("ko-KR", { weekday: "long" });
  const realTime = time.toLocaleTimeString();

  return (
    <TodoHeadBlock>
      <h1>{date}</h1>
      <div className='day'>{weekday}</div>
      <div className='time'>{realTime}</div>
      <div className='tasks-left'>To Do List</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
