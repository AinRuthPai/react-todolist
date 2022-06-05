import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import BoardReadPage from "./BoardReadPage";

const BoardListBlock = styled.div`
  flex: 1;
  width: 80%;
  padding: 20px 32px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardList() {
  const [data, setData] = useState([]);
  const url = `http://localhost:3001/board/`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const reverseData = [...data].reverse();
        setData(reverseData);
      });
  }, [url]);

  return (
    <>
      <BoardListBlock>
        {data.map((data) => (
          <BoardItem key={data.id} data={data} />
        ))}
      </BoardListBlock>
      <BoardReadPage data={data} />
    </>
  );
}

export default BoardList;
