import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Auth";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function NovaSaida() {
  const { token } = useContext(AuthContext);
  const [form, setForm] = useState({value: "", description: ""});
  const [blocked, setBlocked] = useState(false);
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      type: "withdraw",
      day: dayjs().format("DD/MM")
    });
  }

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.get(`${URL}/transactions`, config);
    promise.then((res) => {
      alert("Saida realizada com sucesso!")
      navigate("/home");
    });
    promise.catch((err) => {
      alert(err.res.data.message);
      navigate("/");
    });

  }, [URL, navigate, token]);

  function create(e) {
    const body = { ...form };
    setBlocked(true);
    e.preventDefault();
    form.value = Number(form.value).toFixed(2);
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.post(`${URL}/registries`, body, config);
    promise.then((res) => {
      navigate("/home");
    });
    promise.catch((err) => {
      alert(err.res.data.message);
      navigate("/home");
    });
  }


  return (
    <Wrapper>
      <Title>Nova saida</Title>
      <InputArea onSubmit={create}>
        <input
          min="1"
          onChange={handleForm}
          type="text"
          disabled={blocked}
          pattern="[-+]?[0-9]*\.?[0-9]*"
          name="valor"
          placeholder="Valor"
          value={form.value}
          required
          data-test="registry-amount-input"
        />

        <input
          type="text"
          name="descrição"
          disabled={blocked}
          placeholder="Descrição"
          onChange={handleForm}
          value={form.description}
          required
          data-test="registry-name-input"
        />

        <button type="submit"
        data-test="registry-save"
        >
          Salvar saída
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
