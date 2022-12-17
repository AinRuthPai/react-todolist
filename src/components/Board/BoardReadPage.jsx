import BoardTemplateBlock from "./BoardTemplate";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BtnWrapperBlock, BtnBlock, CancelBtn } from "./BoardWritePage";

const BoardReadTitle = styled.div`
  width: 90%;
  padding-top: 12px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Remove = styled.div`
  position: absolute;
  right: 0;
  font-size: 28px;
  color: #bec4ca;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const BoardReadText = styled.div`
  flex: 1;
  width: 90%;
  margin-top: 5rem;
  font-size: 20px;
  text-align: left;
  word-break: break-all;
`;

function BoardReadPage({ boardData }) {
  let { id } = useParams();
  const nav = useNavigate();
  const data = [...boardData].reverse();

  const handleClick = () => {
    nav("/react-todolist/write", {
      state: id,
    });
  };

  function onRemoveBoard() {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/board/${data[id - 1].id}`, {
        method: "DELETE",
      }).then((res) => {
        window.alert("삭제되었습니다.");
        nav("/react-todolist/board");
        window.location.reload();
      });
    } else {
      window.alert("취소되었습니다.");
    }
  }

  return (
    <>
      <BoardTemplateBlock>
        <BoardReadTitle>
          <h2>{data[id - 1].title}</h2>
          <Remove>
            <MdDelete onClick={onRemoveBoard} />
          </Remove>
        </BoardReadTitle>
        <BoardReadText>{data[id - 1].text}</BoardReadText>
      </BoardTemplateBlock>

      <BtnWrapperBlock>
        <BtnBlock onClick={handleClick}>수정하기</BtnBlock>
        <CancelBtn to='/react-todolist/board'>뒤로가기</CancelBtn>
      </BtnWrapperBlock>
    </>
  );
}

export default BoardReadPage;
