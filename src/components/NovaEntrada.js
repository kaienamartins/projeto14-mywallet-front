import styled from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth";

export default function NovaEntrada() {
  const { entries, setEntries } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Wrapper>
      <Title>Nova entrada</Title>
      <InputArea>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
        />

        <input
          type="text"
          name="descrição"
          placeholder="Descrição"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={() => {
            setEntries([...entries, {value, description, type: "entrada"}]);
            setValue("");
            setDescription("");
          }}
        >
          Salvar entrada
        </button>
      </InputArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 375px;
  height: 667px;
  background-color: #925cbd;
  display: flex;
`;

const Title = styled.h1`
  position: absolute;
  left: 24px;
  top: 25px;
  color: #fff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 25px;
  top: 96px;

  input,
  button {
    margin-bottom: 13px;
    width: 326px;
    height: 58px;
    font-family: "Raleway", sans-serif;
    border-radius: 5px;
    border: 1px solid #925cbd;
    font-weight: 400;
    color: #101010;
    font-size: 20px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  button {
    background-color: #a328d6;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }

  input::placeholder {
    color: #181818;
    font-size: 21px;
    padding: 10px;
  }

  input::focus {
    border: none;
  }
`;
