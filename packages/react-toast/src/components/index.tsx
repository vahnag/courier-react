export { default as Toast } from "./Toast";
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import toastCss from "react-toastify/dist/ReactToastify.css";
import { Brand } from "@trycourier/react-provider";
import { Theme } from "../types";

import Body from "./Body";
import { toastStyles } from "./Toast/styled";
import { ICourierToastMessage } from "./Toast/types";

const Styled = styled.div(toastStyles);
const GlobalStyle = createGlobalStyle`${toastCss}`;

export const ToastBody: React.FunctionComponent<
  ICourierToastMessage & {
    theme?: Theme;
    brand?: Brand;
  }
> = ({ theme, brand, ...props }) => {
  props.icon = props.icon ?? brand?.inapp?.icons?.message;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={{
          ...theme,
          brand,
        }}
      >
        <Styled
          className="Toastify__toast-container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="Toastify__toast Toastify__toast--default">
            <div className="Toastify__toast-body">
              <Body {...props} />
            </div>
            <div
              className="Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--default"
              style={{
                animation: "none",

                // will want to tweak these after we get them inside studio
                //animationDuration: "5000ms",
                //animationPlayState: "running",
                //animationIterationCount: "infinite",
              }}
            />
          </div>
        </Styled>
      </ThemeProvider>
    </>
  );
};
