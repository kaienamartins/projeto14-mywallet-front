import styled from "styled-components";
import Exit from "../assets/exit.png";
import Minus from "../assets/minus.png";
import Plus from "../assets/plus.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import axios from "axios";
import Transaction from "./Transaction";


function Money(props) {
  if (props.total === 0 && props.movement === "withdraw") {
    return null;
  }
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
  const { token, username } = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const navigate = useNavigate();
  const [items, setItems] = useState([]);


  function logout(){
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    const URL = process.env.REACT_APP_API_URL;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promise = axios.get(`${URL}/transactions`, config);
    promise.then((res) => {
      setItems(res.data);
      const handleTotal = () => {
        let total = 0;
        items.forEach((entry) => {
          if (entry.type === "deposit") {
            total += parseFloat(entry.value);
          } else if (entry.type === "withdraw") {
            total -= parseFloat(entry.value);
          }
          if (total <= 0) {
            total = 0;
          }
        });
        setTotal(total);
      };
      handleTotal();
    });
    promise.catch((err) => {
      alert(err.res.data.message);
      navigate("/");
    });
  }, [token, navigate, items]);

  return (
    <>
      <WrapperContent>
        <Name data-test="user-name">Olá, {username}</Name>
        <img src={Exit} alt="exit" onClick={logout}/>

        <Content hasEntries={items.length > 0}>
          {items.length === 0 ? (
            <p>Não há registros de entrada ou saída</p>
          ) : (
            <>
              {items.map((entry, i) => (
                <Transaction entry={entry} key={i} />
              ))}
            </>
          )}
          <Total>
            <h1>saldo</h1>
            <h2 data-test="total-amount">{formatter.format(total)}</h2>
          </Total>
        </Content>
        <CashMovement>
          <Link to="/nova-entrada">
            <Money pic={Plus} movement={"entrada"} data-test="new-income"/>
          </Link>
          <Link to="/nova-saida">
            <Money pic={Minus} movement={"saída"} data-test="new-expense"/>
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
  width: 350px;
  height: 115px;
  position: absolute;
  right: 90px;
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
