import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
width: 90px;
height: 35px;
margin: 15px;
font-size: 16px;
font-weight: 500;
border: none;
outline: none;
border-radius: 4px;
 color:rgb(255, 255, 255);
  background-color: rgb(248, 3, 118);
  border: 1px solid rgb(255, 255, 255);
cursor: pointer;
text-Shadow: 1px 0 1px #ffffff6f;
transform: scale(1.1);
letter-spacing: 2px;
&:hover {
  transform: scale(0.9);
  font-weight: normal;
  text-transform: uppercase;
  color: rgb(248, 3, 118);
background-color: rgb(255, 255, 255);
border: 1px solid rgb(248, 3, 118);
letter-spacing: 0;
}
&:not(:last-child) {
  margin-right: 15px;
}
`;


export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <Btn type="button" name="good" onClick={onLeaveFeedback}>Good</Btn>
    <Btn type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</Btn>
    <Btn type="button" name="bad" onClick={onLeaveFeedback}>Bad</Btn>
  </>
)

// export const FeedbackOptions = ({ onLeaveFeedback }) => (
//   <div>
//     <button
//       type="button"
//       name="good"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Good
//     </button>
//     <button
//       type="button"
//       name="neutral"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Neutral
//     </button>
//     <button
//       type="button"
//       name="bad"
//       onClick={onLeaveFeedback}
//       className={css.btn}
//     >
//       Bad
//     </button>
//   </div>
// );

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

