import {
  DaysList,
  ADayOfTheWeek
} from "./styled";

export const DaysOfTheWeek: React.FC = () => {
  return (
    <div>
      <DaysList>
        <ADayOfTheWeek>Sun</ADayOfTheWeek>
        <ADayOfTheWeek>Mon</ADayOfTheWeek>
        <ADayOfTheWeek>Tue</ADayOfTheWeek>
        <ADayOfTheWeek>Wed</ADayOfTheWeek>
        <ADayOfTheWeek>Thu</ADayOfTheWeek>
        <ADayOfTheWeek>Fri</ADayOfTheWeek>
        <ADayOfTheWeek>Sat</ADayOfTheWeek>
      </DaysList>
    </div>
  );
};