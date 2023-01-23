import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Cadastro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ",",
  });

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [signUp, setSignUp] = useState();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function createAccount(e) {
    e.preventDefault();
    const URL = process.env.REACT_APP_API_URL;
    const body = { ...form };
    setDisabled(true);
    const promise = axios.post(`${URL}/sign-up`, body);

    promise.then((res) => {
      console.log(res.data);
      setSignUp(
        <ThreeDots
          color="fafafa"
          radius="9"
          ariaLabel="tail-spin-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
      setTimeout(() => {
        navigate("/");
      }, 5000);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <WrapperContent>
      <Heading>
        <h1>MyWallet</h1>
      </Heading>
      <InputWrapper>
        <input
          name="name"
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={handleForm}
          required
          disabled={disabled}
          data-test="name"
        />

        <input
          name="email"
          type="text"
          placeholder="E-mail"
          value={form.email}
          onChange={handleForm}
          required
          disabled={disabled}
          data-test="email"
        />

        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          required
          disabled={disabled}
          data-test="password"
        />

        <input
          name="password"
          type="password"
          placeholder="Confirme a senha"
          value={form.password}
          onChange={handleForm}
          required
          disabled={disabled}
          data-test="conf-password"
        />

        <Button
          type="submit"
          value="Cadastrar"
          required
          onClick={createAccount}
          data-test="sign-up-submit"
        >
          {disabled ? <Loading>{signUp}</Loading> : "Cadastrar"}
        </Button>
        <Link to={`/`}>Já tem uma conta? Faça login!</Link>
      </InputWrapper>
    </WrapperContent>
  );
}

const WrapperContent = styled.div`
  width: 375px;
  height: 667px;
  background-color: #925cbd;
  display: flex;
`;

const Heading = styled.div`
  text-align: center;
  position: absolute;
  width: 147px;
  height: 50px;
  left: 113px;
  top: 95px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    font-weight: 400;
    color: #fff;
    line-height: 50px;
  }
`;

const InputWrapper = styled.div`
  width: 375px;
  margin: auto 25px auto 20px;
  position: relative;

  input {
    width: 326px;
    height: 58px;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    color: #101010;
    font-size: 20px;
  }
  input:nth-child(1),
  input:nth-child(2),
  input:nth-child(3),
  input:nth-child(4) {
    padding-left: 10px;
  }
  a {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #52b6ff;
    margin: auto;
    padding-left: 60px;
    position: relative;
    top: 15px;
    text-decoration: none;
    color: red;
  }
  a:visited {
    color: #fff;
  }

  input::placeholder {
    color: #181818;
    font-size: 21px;
  }
`;

const Button = styled.button`
  background-color: #a328d6;
  color: #fff;
  font-size: 21px;
  width: 342px;
  height: 46px;
  margin-top: 15px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  border: none;
`;

const Loading = styled.div`
  width: 160px;
  height: 160px;
  line-height: normal;
  display: inline-block;
  vertical-align: middle;
  margin-left: 60px;
  margin-top: -15px;
`;
