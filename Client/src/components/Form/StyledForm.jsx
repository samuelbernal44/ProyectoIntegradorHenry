import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 500px;
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  padding: 40px;
  box-shadow: 0 0 10px white;
  margin: 10% auto;
  border-radius: 15px;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 5%
  );
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 25px;
  margin-right: 20px;
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
