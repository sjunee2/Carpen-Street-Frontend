import {
  DaysList,
  ADayOfTheWeek
} from "./styled";

export const DaysOfTheWeek: React.FC = () => {
  return (
    <div>
      <DaysList>
        <ADayOfTheWeek>Mon</ADayOfTheWeek>
        <ADayOfTheWeek>Tue</ADayOfTheWeek>
        <ADayOfTheWeek>Wed</ADayOfTheWeek>
        <ADayOfTheWeek>Thu</ADayOfTheWeek>
        <ADayOfTheWeek>Fri</ADayOfTheWeek>
        <ADayOfTheWeek>Sat</ADayOfTheWeek>
        <ADayOfTheWeek>Sun</ADayOfTheWeek>
      </DaysList>
    </div>
  );
};