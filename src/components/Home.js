import styled from "styled-components";
import Exit from "../assets/exit.png";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";
import { Link } from "react-router-dom";

function Money(props) {
  return (
    <TransactionSection>
      <img src={props.pic} alt="icon" />
      <p>
        Nova <br></br>
        {props.movement}
      </p>
    </TransactionSection>
  );
}

export default function Home() {
  return (
    <WrapperContent>
      <Name>Olá, Kaiena</Name>
      <img src={Exit} alt="exit" />
      <Content>
        <p>Não há registros de entrada ou saída</p>
      </Content>
      <CashMovement>
        <Link to="/nova-entrada">
          <Money pic={Plus} movement={"entrada"} />
        </Link>
        <Link to="/nova-saida">
          <Money pic={Minus} movement={"saída"} />
        </Link>
      </CashMovement>
    </WrapperContent>
  );
}

const WrapperContent = styled.div`
  width: 375px;
  height: 667px;
  background-color: #925cbd;
  display: flex;

  img {
    position: absolute;
    left: 87.47%;
    right: 6.4%;
    top: 4.2%;
    bottom: 92.2%;
  }
`;

const Name = styled.h1`
  position: absolute;
  width: 141px;
  height: 31px;
  left: 24px;
  top: 25px;
  color: #fff;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

const Content = styled.div`
  position: absolute;
  width: 326px;
  height: 446px;
  left: 25px;
  top: 78px;
  background: #fff;
  border-radius: 5px;
  display: grid;
  place-items: center;

  p {
    margin: auto;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 26px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

const CashMovement = styled.div`
 width: 325px;
  height: 115px;
  position: absolute;
  right: 100px;
  top: 536px;
  display: flex;
  justify-content: space-around;
`;

const TransactionSection = styled.div`
  position: absolute;
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 10px;

  p {
    margin: 55px 15px;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 19px;
    color: #fff;
    line-height: 22px;
  }

  img {
    position: absolute;
    top: 10px;
    left: 12px;
  }
`;
