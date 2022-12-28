import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.section`
  height: 150px;
 text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: rgb(248, 3, 118);
  text-shadow:1px 0 1px #ffffff6f;
`;

export const Section = ({ title, children }) => (
  <Wrap>
    <Title>{title}</Title>
    {children}
  </Wrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

