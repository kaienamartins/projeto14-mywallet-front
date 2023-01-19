import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState();

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function Login(e) {
    e.preventDefault();
    const URL = "http://localhost:5000/login";
    const body = { ...form };
    const promise = axios.post(URL, body);

    promise.then((res) => {
      setDisabled(true);
      setLoginSuccess(
        <ThreeDots
          color="fafafa"
          radius="9"
          ariaLabel="tail-spin-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      );
    });
    setTimeout(() => {
      navigate("/home");
    }, 5000);

    promise.catch((err) => {
      alert(err.response.data.message);
      setDisabled(false);
    });
  }

  return (
    <WrapperContent>
      <Heading>
        <h1>MyWallet</h1>
      </Heading>
      <InputWrapper>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleForm}
          required
          disabled={disabled}
        />

        <input
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <Button
          type="submit"
          value="Entrar"
          onClick={Login}
          disabled={disabled}
          required
        >
          {disabled ? <Loading>{loginSuccess}</Loading> : "Entrar"}
        </Button>
        <Link to={`/cadastro`}>Primeira vez? Cadastre-se!</Link>
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
  top: 159px;

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
  margin: auto 20px auto 20px;
  position: relative;

  input {
    width: 326px;
    height: 58px;
    margin-top: 15px;
    font-family: "Raleway", sans-serif;
    border-radius: 5px;
    border: 1px solid #925cbd;
    font-weight: 400;
    color: #101010;
    font-size: 23px;
  }
  input:nth-child(1),
  input:nth-child(2) {
    padding-left: 10px;
  }
  a {
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    margin: auto;
    padding-left: 60px;
    position: relative;
    top: 15px;
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
  width: 340px;
  height: 58px;
  background-color: #a328d6;
  color: #fff;
  font-size: 23px;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-top: 15px;
  font-weight: 700;
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
