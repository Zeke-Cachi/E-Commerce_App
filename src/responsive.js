import { css } from "styled-components";

export const mobile = () => {
  return css`
    @media (min-width: 360px) and (max-width: 768px) {
      flex-direction: column;
    }
  `;
};
