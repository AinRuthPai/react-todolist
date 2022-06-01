import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import dummy from "../db/dummy.json";
import BoardItem from "./BoardItem";

const BoardListBlock = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BoardList() {
  const [data, setData] = useState(dummy.board);

  useEffect(() => {
    const reverseData = [...data].reverse();
    setData(reverseData);
  }, []);

  return (
    <BoardListBlock>
      {data.map((data) => (
        <BoardItem key={data.id} data={data} />
      ))}
    </BoardListBlock>
  );
}

export default BoardList;
