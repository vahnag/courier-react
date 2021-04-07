import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const ToastStyled = styled(ToastContainer)(({ theme }) => ({
  ["&.Toastify__toast-container"]: {
    fontFamily: `"Nunito", sans-serif`,
    ...theme?.root,
  },
  [".Toastify__toast"]: {
    width: 320,
    minHeight: 65,
    padding: 0,
    borderRadius: 6,
    ...theme?.toast,
  },
  [".Toastify__toast-body"]: {
    margin: 0,
    display: "flex",
    ...theme?.body,
  },
  [".Toastify__progress-bar"]: {
    background: "#9121C2",
    height: 3,
    top: 0,
    ...theme?.progressBar,
  },
}));
