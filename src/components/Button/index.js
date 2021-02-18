import styled, { css } from "styled-components";
import { space, buttonStyle, shadow } from "styled-system";
import theme from "../../theme";

import addAlert from '../../assets/icons/icon-add_alert-black.svg';
import addCircle from '../../assets/icons/icon-add_circle_outline-black.svg';
import addLocation from '../../assets/icons/icon-add_circle_outline-black.svg';
import addReaction from '../../assets/icons/icon-add_reaction-black.svg';
import callEnd from '../../assets/icons/icon-call_end-black.svg';
import call from '../../assets/icons/icon-call-black.svg';
import checkBox from '../../assets/icons/icon-check_box-black.svg';
import crop from '../../assets/icons/icon-crop-black.svg';
import indeterminiteCheckBox from '../../assets/icons/icon-indeterminate_check_box-black.svg';
import lightMode from '../../assets/icons/icon-light_mode-black.svg';
import link from '../../assets/icons/icon-link-black.svg';
import navigate from '../../assets/icons/icon-navigation-black.svg';
import navigateBefore from '../../assets/icons/icon-navigate_before-black.svg';
import navigateNext from '../../assets/icons/icon-navigate_next-black.svg';
import podcasts from '../../assets/icons/icon-podcasts-black.svg';
import queue from '../../assets/icons/icon-queue-black.svg';
import recommend from '../../assets/icons/icon-recommend-black.svg';
import refresh from '../../assets/icons/icon-refresh-black.svg';
import rotation3D from '../../assets/icons/icon-3d_rotation-black.svg';
import save from '../../assets/icons/icon-save-black.svg';
import showChart from '../../assets/icons/icon-show_chart-black.svg';
import snowflake from '../../assets/icons/icon-ac_unit-black.svg';
import tune from '../../assets/icons/icon-tune-black.svg';
import unsubscribe from '../../assets/icons/icon-unsubscribe-black.svg';
import volumeOff from '../../assets/icons/icon-volume_off-black.svg';
import volumeUp from '../../assets/icons/icon-volume_up-black.svg';

const icons = {
  addAlert,
  addCircle,
  addLocation,
  addReaction,
  call,
  callEnd,
  checkBox,
  crop,
  indeterminiteCheckBox,
  lightMode,
  link,
  navigate,
  navigateBefore,
  navigateNext,
  podcasts,
  queue,
  recommend,
  refresh,
  save,
  showChart,
  tune,
  unsubscribe,
  volumeOff,
  volumeUp,
  snowflake,
  rotation3D,
};

const Button = styled.button`
  ${buttonStyle}
  ${shadow}
  ${space}
  border-radius: 6px;
  line-height: 20px;
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
        color: ${theme.colors.gray[300]};
        cursor: not-allowed;
      }
    `}
  ${(props) =>
    props.color === "secondary" &&
    css`
      background-color: ${theme.colors.coolGray[100]};
      border: none;
      box-shadow: ${theme.shadow.secondary};
      color: ${theme.colors.white[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.coolGray[200]};
        cursor: pointer;
      }
      :disabled {
        background-color: ${theme.colors.gray[100]};
        box-shadow: none;
        color: ${theme.colors.gray[300]};
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
        color: ${theme.colors.gray[300]};
        cursor: not-allowed;
      }
    `}

    ${(props) => props.startIcon && css`
      display: flex;
      ::before {
        content: url(${icons[props.startIcon]});
        height: 14px;
        width: 14px;
        margin-right: 12px;
      }
    `}
    ${(props) => ((props.startIcon && !props.color) || (props.startIcon && props.color === 'default')) && css`
      ::before {
        filter: ${theme.filter.default};
      }
    `}
    ${(props) => props.startIcon && props.color && props.color !== 'default' && css`
      ::before {
        filter: ${theme.filter.white};
      }
    `}
    ${(props) => ((props.startIcon && props.variant === 'outline') || (props.startIcon && props.variant === 'text')) && css`
      ::before {
        filter: ${theme.filter.outline};
      }
    `}
    ${(props) => ((props.startIcon && props.color === 'default') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::before {
        filter: ${theme.filter.defaultOutlineOrText};
      }
    `}
    ${(props) => ((props.startIcon && props.color === 'secondary') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::before {
        filter: ${theme.filter.secondary};
      }
    `}
    ${(props) => ((props.startIcon && props.color === 'danger') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::before {
        filter: ${theme.filter.danger};
      }
    `}

    ${(props) => props.endIcon && css`
      display: flex;
        ::after {
        content: url(${icons[props.endIcon]});
        height: 14px;
        width: 14px;
        margin-left: 10px;
      }
    `}
      ${(props) => ((props.endIcon && !props.color) || (props.endIcon && props.color === 'default')) && css`
        ::after {
          filter: ${theme.filter.default};
        }
      `}
      ${(props) => props.endIcon && props.color && props.color !== 'default' && css`
        ::after {
          filter: ${theme.filter.white};
        }
    `}
    ${(props) => ((props.endIcon && props.variant === 'outline') || (props.endIcon && props.variant === 'text'))  && css`
      ::after {
        filter: ${theme.filter.outline};
      }
    `}
    ${(props) => ((props.endIcon && props.color === 'default') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::after {
        filter: ${theme.filter.defaultOutlineOrText};
      }
    `}
    ${(props) => ((props.endIcon && props.color === 'secondary') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::after {
        filter: ${theme.filter.secondary};
      }
    `}
    ${(props) => ((props.endIcon && props.color === 'danger') && (props.variant === 'text' || props.variant === 'outline')) && css`
      ::after {
        filter: ${theme.filter.danger};
      }
    `}
      ${(props) => (props.variant === 'outline' && props.color === 'default' && css`
        background: none;
        box-shadow: none;
        border: 1px solid ${theme.colors.gray[100]};
        color: ${theme.colors.gray[300]};
        :hover:enabled,
        :focus:enabled {
          background-color: ${theme.colors.gray[100] + '1A'};
        }
      `)}
    ${(props) => props.variant === 'outline' && props.color === 'primary' && css`
        background: none;
        box-shadow: none;
        border: 1px solid ${theme.colors.blue[300]};
        color: ${theme.colors.blue[300]};
        :hover:enabled,
        :focus:enabled {
          background-color: ${theme.colors.blue[300] + '1A'};
        }
      `}
    ${(props) => props.variant === 'outline' && props.color === 'danger' && css`
      background: none;
      box-shadow: none;
      border: 1px solid ${theme.colors.red[100]};
      color: ${theme.colors.red[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.red[100] + '1A'}
      }
    `}
    ${(props) => props.variant === 'outline' && props.color === 'secondary' && css`
      background: none;
      box-shadow: none;
      border: 1px solid ${theme.colors.coolGray[100]};
      color: ${theme.colors.coolGray[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.coolGray[100] + '1A'};
      }
    `}
    ${(props) => props.variant === 'text' && props.color === 'default' && css`
      background: none;
      box-shadow: none;
      border: none;
      color: ${theme.colors.gray[300]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.coolGray[100] + '1A'};
      }
    `}
    ${(props) => props.variant === 'text' && props.color === 'primary' && css`
      background: none;
      box-shadow: none;
      border: none;
      color: ${theme.colors.blue[300]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.blue[300] + '1A'};
      }
    `}
    ${(props) => props.variant === 'text' && props.color === 'secondary' && css`
      background: none;
      box-shadow: none;
      border: none;
      color: ${theme.colors.coolGray[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.coolGray[100] + '1A'};
      }
    `}
    ${(props) => props.variant === 'text' && props.color === 'danger' && css`
      background: none;
      box-shadow: none;
      border: none;
      color: ${theme.colors.red[100]};
      :hover:enabled,
      :focus:enabled {
        background-color: ${theme.colors.red[100] + '1A'};
      }
    `}
    ${(props) =>
      props.disableShadow === true &&
      css`
        box-shadow: none;
      `}
`;

export default Button;
