import styled from "styled-components";

export const DayWrapper = styled.div` 
  display:flex;
  flex-direction:column;
  background-color: ${(props) => (props.isCurrent ? "#2db92d" : props.isCurrentMonth ? "white" : "#f2f2f2")};
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% / 7);
  text-align: left;
  color: ${(props) => (props.isCurrentMonth ? "#0a290a" : "#737373")};
  font-size: 15px;
  text-align: center;
  height: 100px;
  padding: 15px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
`

export const TodoInCalendar = styled.div`
  font-size: 12px;
  color: "red";
`