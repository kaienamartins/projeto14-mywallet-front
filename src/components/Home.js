import styled from "styled-components";
import Exit from "../assets/exit.png";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth";

function Money(props) {
  if (props.total === 0 && props.movement === "saída") {
    return null;
  }
  return (
    <>
      <TransactionSection>
        <img src={props.pic} alt="icon" />
        <p>
          Nova <br></br>
          {props.movement}
        </p>
      </TransactionSection>
    </>
  );
}

export default function Home() {
  const { entries } = useContext(AuthContext);
  let total = 0;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });



  return (
    <>
      <WrapperContent>
        <Name>Olá, Kaiena</Name>
        <img src={Exit} alt="exit" />

        <Content hasEntries={entries.length > 0}>
          {entries.length > 0 ? (
            entries.reverse().map((entry, i) => {
              const date = new Date();
              const month = (date.getMonth() + 1).toString().padStart(2, "0");
              if (entry.type === "entrada") {
                total += parseFloat(entry.value);
              } else if (entry.type === "saida") {
                total -= parseFloat(entry.value);
              }
              if (total <= 0) {
                total = 0;
              }
              return (
                <ContentData type={entry.type} key={i}>
                  <h5>{`${date.getDate()}/${month}`}</h5>
                  <h3>{entry.description}</h3> <h4>{entry.value}</h4>
                </ContentData>
              );
            })
          ) : (
            <p>Não há registros de entrada ou saída</p>
          )}
          <Total>
            <h1>saldo</h1>
            <h2>{formatter.format(total)}</h2>
          </Total>
        </Content>
        <CashMovement>
          <Link to="/nova-entrada">
            <Money pic={Plus} movement={"entrada"}/>
          </Link>
          <Link to="/nova-saida">
            <Money pic={Minus} movement={"saída"}/>
          </Link>
        </CashMovement>
      </WrapperContent>
    </>
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
  display: ${(props) => (props.hasEntries ? "inline-block" : "flex")};
  align-items: center;
  justify-content: center;

  p {
    font-family: "Raleway";
    font-weight: 400;
    font-size: 26px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

const ContentData = styled.div`
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;

  h5 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    color: #c6c6c6;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #000;
    width: 100%;
    text-align: center;
    margin-left: calc(50% - 90px);
  }
  h4 {
    color: ${(props) => (props.type === "entrada" ? "#03AC00" : "#C70000")};
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
    margin-left: 15px;
    width: 100%;
    text-align: right;
  }
`;

const Total = styled.div`
  width: 100%;
  height: 57px;
  position: absolute;
  bottom: 0;
  font-family: "Raleway";
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1,
  h2 {
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    padding: 10px;
  }

  h1 {
    color: #000;
    text-transform: uppercase;
  }

  h2 {
    color: #03ac00;
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
  cursor: pointer;

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
