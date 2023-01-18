import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <WrapperContent>
      <Heading>
        <h1>MyWallet</h1>
      </Heading>
      <InputWrapper>
        <input name="name" type="text" placeholder="Nome" />

        <input name="email" type="text" placeholder="E-mail" />

        <input name="password" type="password" placeholder="Senha" />
        <input name="password" type="password" placeholder="Confirme a senha" />

        <Button type="submit" value="Cadastrar">Cadastrar</Button>
        <Link to={`/`}>
          Já tem uma conta? Faça login!
        </Link>
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
    font-family: 'Raleway', sans-serif;
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
    font-family: 'Raleway', sans-serif;
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

  input::placeholder{
    color: #181818;
    font-size: 21px;
  }
`;

const Button = styled.button`
  background-color: #A328D6;;
  color: #fff;
  font-size: 21px;
  width: 342px;
  height: 46px;
  margin-top: 15px;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  border: none;
`;
