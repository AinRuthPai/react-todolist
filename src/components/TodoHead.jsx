import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
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
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const timeString = today.toLocaleTimeString("ko-KR");

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='time'>{timeString}</div>
      <div className='tasks-left'>할 일</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
