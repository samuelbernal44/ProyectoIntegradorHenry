import styled from "styled-components";

export const ContainerSearchBar = styled.div`
  /* border: 1px solid white; */
  display: flex;
  margin: auto;
  margin-right: 40px;
  margin-top: 25px;
  width: 25%;
  padding: 10px;
  justify-content: flex-end;
  /* background-color: lightgray; */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px white;
`;

export const Input = styled.input`
  width: 50%;
  border-radius: 5px;
  height: 25px;
  margin-right: 20px;
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 50%;
  height: 25px;
  background-color: #318aac;
  color: white;
  border: 0px;
  padding: 0 10 0 10px;
  font-size: 15px;

  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;
