import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
// import styled from 'styled-components';

// const Container = styled.div`
// display: flex;
// width: 200px;
// `;

// const Btn = styled.button`
//   width: 90px;
//   height: 30px;
//   font-size: 14px;
//   font-weight: 600;
//   border: none;
//   outline: none;
//   border-radius: 4px;
// `;

// const Good = styled(Btn)`
// background-color: rgba(17, 114, 17, 0.678);
// `;

// const Neutral = styled(Btn)`
// background-color: rgba(192, 192, 192, 0.671);
// `;

// const Bad = styled(Btn)`
// background-color: rgba(241, 28, 28, 0.658);
// `;

// const FeedbackOptions = ({ onLeaveFeedback }) => (
//   <Container>
//     <Btn type="button" onClick={onLeaveFeedback}>ndsfjnlvfkjdn</Btn>
//     <Good>Good</Good>
//     <Neutral>Neutral</Neutral>
//     <Bad>Bad</Bad>
//   </Container>
// )

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button
      type="button"
      name="good"
      onClick={onLeaveFeedback}
      className={css.good}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
      className={css.neutral}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
      className={css.bad}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
