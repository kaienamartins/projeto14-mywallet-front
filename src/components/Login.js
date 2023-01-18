import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <WrapperContent>
      <Heading>
        <h1>MyWallet</h1>
      </Heading>
      <InputWrapper>
        <input type="text" name="email" placeholder="email" />

        <input name="password" type="password" placeholder="senha" />
        <Button type="submit" value="Entrar">
          Entrar
        </Button>
        <Link>Primeira vez? Cadastre-se!</Link>
      </InputWrapper>
    </WrapperContent>
  );
}

const WrapperContent = styled.div`
  width: 375px;
  height: 667px;
  background-color: #925CBD;
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
  width: 350px;
  margin: auto;
  margin-right: 24px;
  margin-left: 24px;
  position: relative;
  font-family: "Raleway", sans-serif;
  justify-content: center;

  input {
    width: 326px;
    height: 58px;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #925cbd;
    font-weight: 400;
    color: #000;
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
    text-decoration: none;
    margin: auto;
    padding-left: 50px;
    position: relative;
    top: 15px;
  }
  a:visited {
    color: #fff;
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
