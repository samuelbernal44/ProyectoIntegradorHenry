import styled from "styled-components";

export const ContainerCard = styled.div`
  /* width: 300px; */
  /* background-color: lightgray; */
  /* border-radius: 10px;
  box-shadow: 0 0 10px white;
  overflow: hidden;
  margin: 10px; */
  user-select: none;
  max-width: 300px;
  margin: 1em;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 5%
  );
  box-shadow: 0 7px 20px 5px #fcfdfd85;
  border-radius: 0.7rem;
  /* backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px); */
  overflow: hidden;
  transition: 0.5s all;
  ::before{
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: .7s all;
  }
  &:hover{
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.09);
    /* filter: brightness(1); */
    ::before{
      filter: brightness(0.5);
      top: -100%;
      left: 200%;
`;

export const ContainerButton = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: flex-end;
  margin: 0px;
`;

export const ContainerData = styled.div`
  /* padding: 0px; */
  /* display: inline-block;
  justify-content: center; */
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  /* grid-template-rows: auto; */
  text-align: center;
`;

export const ContainerImage = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

export const Button = styled.button`
  background-color: salmon;
  color: white;
  border: 0px;
  border-radius: 2px;
  position: absolute;
  top: 3px;
  right: 4px;
`;

export const Title2 = styled.h2`
  margin: 2px;
  font-size: 14px;
  color: yellow;
  background-color: rgba(0, 0, 0, 0.5);
  width: 70%;
  position: absolute;
  left: 5px;
  bottom: 5px;
`;

export const Title4 = styled.h4`
  margin: 10px;
  font-size: 14px;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;
