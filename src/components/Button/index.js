import styled, { css } from "styled-components";
import { space, buttonStyle, shadow } from "styled-system";
import theme from "../../theme";
import addTask from "../../assets/icons/icon-add_task-white.svg";
import brightness from "../../assets/icons/icon-brightness-white.svg";
import cloudUpload from "../../assets/icons/icon-cloud_upload-white.svg";
import directions from "../../assets/icons/icon-directions-white.svg";
import fingerprint from "../../assets/icons/icon-fingerprint-white.svg";
import pokeball from "../../assets/icons/icon-catching_pokemon-white.svg";
import snowflake from "../../assets/icons/icon-snowflake-white.svg";

const icons = {
  addTask,
  brightness,
  cloudUpload,
  directions,
  fingerprint,
  pokeball,
  snowflake
};

const Button = styled.button`
  ${buttonStyle}
  ${shadow}
  ${space}
  border-radius: 6px;
  padding:
    ${theme.space[2]}
    ${theme.space[4]}
    ${theme.space[2]}
    ${theme.space[4]};
  ${(props) =>
    props.size === "sm" &&
    css`
      padding: ${theme.space["1.5"]} ${theme.space[3]} ${theme.space["1.5"]}
        ${theme.space[3]};
    `}
  ${(props) =>
    props.size === "md" &&
    css`
      padding: ${theme.space[2]} ${theme.space[4]} ${theme.space[2]}
        ${theme.space[4]};
    `}
  ${(props) =>
    props.size === "lg" &&
    css`
      padding: ${theme.space["2.6"]} ${theme.space["5.5"]} ${theme.space["2.6"]}
        ${theme.space["5.5"]};
    `}
    ${(props) =>
    !props.color && !props.variant && css`
      ${console.log('FIRED NOT DEFAULT, PRIMARY, SECONDARY, OR DANGER')}
      background-color: ${theme.colors.gray[100]};
      border: 0;
      box-shadow: ${theme.shadow.default};
      color: ${theme.colors.gray[400]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.gray[200]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        color: ${theme.colors.gray[300]};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    (props.color === "default") &&
    css`
      background-color: ${theme.colors.gray[100]};
      border: 0;
      box-shadow: ${theme.shadow.default};
      color: ${theme.colors.gray[400]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.gray[200]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        color: ${theme.colors.gray[300]};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    props.color === "primary" &&
    css`
      background-color: ${theme.colors.blue[300]};
      border: none;
      box-shadow: ${theme.shadow.primary};
      color: ${theme.colors.white[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.blue[400]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: ${theme.colors.coolGray[100]};
      border: none;
      color: ${theme.colors.white[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.coolGray[200]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    props.color === "danger" &&
    css`
      background-color: ${theme.colors.red[100]};
      border: none;
      box-shadow: ${theme.shadow.danger};
      color: ${theme.colors.white[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.red[200]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        box-shadow: none;
        cursor: not-allowed;
      }
    `}
    ${(props) =>
      props.startIcon &&
      css`
        display: flex;
        ::before {
          content: url(${icons[props.startIcon]});
          height: 100%;
          display: flex;
          flex-direction: row;
          height: 14px;
          width: 14px;
          margin-right: 8px;
        }
      `}
      ${(props) =>
        props.endIcon &&
        css`
          display: flex;
          ::after {
            content: url(${icons[props.endIcon]});
            height: 100%;
            display: flex;
            flex-direction: row;
            height: 14px;
            width: 14px;
            margin-left: 8px;
          }
        `}
    ${(props) =>
      props.disableShadow === true &&
      css`
        box-shadow: none;
      `}
`;

export default Button;
