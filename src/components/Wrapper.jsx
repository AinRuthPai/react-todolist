import styled from "styled-components";

const WrapperBlock = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

function Wrapper() {
  return <WrapperBlock></WrapperBlock>;
}

export default Wrapper;
