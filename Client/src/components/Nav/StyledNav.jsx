import styled from "styled-components";

export const ContainerNav = styled.div`
  /* border: 1px solid white; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 15vh;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 5%
  );
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 0.9) !important;
  margin: 1em;
  border-radius: 0.5em;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: #318aac;
  border: 2px solid;
  border-color: #318aac;
  position: relative;
  &:hover {
    color: rgba(255, 255, 255, 1) !important;
    box-shadow: 0 4px 12px #ffffff;
    transition: all 0.2s ease;
  }
`;
