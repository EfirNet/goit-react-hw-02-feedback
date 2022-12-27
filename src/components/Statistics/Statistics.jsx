import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 5px;
  margin: 0;
`;

const Item = styled.li`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Value = styled.span`
  font-weight: 400;
  color: rgb(241, 16, 16);
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <List>
    <Item>Good: <Value>{good}</Value></Item>
    <Item>Neutral: <Value>{neutral}</Value></Item>
    <Item>Bad: <Value>{bad}</Value></Item>
    <Item>Total: <Value>{total}</Value></Item>
    <Item>Positive feedback:{' '} <Value>{positivePercentage}%</Value></Item>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
