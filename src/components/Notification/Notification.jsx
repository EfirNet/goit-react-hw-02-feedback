import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
  text-align: center;
  text-transform: lowercase;
  color: rgb(248, 3, 118);
  text-shadow:1px 0 1px #ffffff6f;
`;

export const Notification = ({ message }) => (
  <P>{message}</P>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
