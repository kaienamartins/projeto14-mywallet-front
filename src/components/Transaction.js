import styled from "styled-components";

export default function Transaction({entry}) {
  const { value, description, type, day } = entry;

  return (
    <ContentData>
        <h5>{day}</h5>
        <h3>{description}</h3>
        <h4 type={type}>{value}</h4>
    </ContentData>
  );
}

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
    color: ${(props) => (props.type === "deposit" ? "#03AC00" : "#C70000")};
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