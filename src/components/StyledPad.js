import styled, { css, keyframes } from "styled-components";
import React from "react";
import sample from "lodash.sample";
import { darken, lighten } from "polished";
import PropTypes from "prop-types";
import elevate from "../utils/elevator";

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

function klingAnimation(props) {
  return keyframes`
    to {
      background-color: ${sample(props.theme.background.playing)};
      ${elevate(8)}
      transform: scale(1.2);
    }
  `;
}


const fly = keyframes`
    to {
      ${elevate(6)}
      transform: scale(1.05);
    }
  `;

const WrapperPad = styled.div`
  animation: 1s ${fadeIn} ease-out;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 12.5%;
  height: 11.1%;`;

const InnerPad = styled.div`
  ${elevate(1)}
  box-sizing: border-box;
  width: 70%;
  height: 70%;
  cursor: pointer;
  ${lighten(0.005, '#002635')};
${props => {
  switch (props.state) {
    case "playing":
      return css`
       ${elevate(6)}
        transform: scale(1.1);
        animation: ${props=> klingAnimation(props)}  1s ease-in-out;

  `;
    case "idle":
      return css`
    background-color:${lighten(0.005, '#002635')};`;
    case "selected":
      return  css` ${elevate(6)}
        transform: scale(1.1); `;
    default:
      return css`
      background-color: ${props => props.theme.background.idle};
     `;
  }
}}

    &:hover {
      animation:  ${fly} 0.3s ease-in-out forwards;
      };
      `;

const StyledPad = props => (
  <WrapperPad>
    <InnerPad {...props} />
  </WrapperPad>
);

StyledPad.propTypes = {
  state: PropTypes.oneOf(["idle", "playing", "selected"]).isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  timing: PropTypes.string
};

StyledPad.defaultProps = {
  timing: "2s",
  background: "#002635"
};

export default StyledPad;
