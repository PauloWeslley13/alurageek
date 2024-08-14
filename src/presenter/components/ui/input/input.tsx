import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { InputElement } from "./input-styles";

export const Input = forwardRef(function CustomInput(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

type InputBarProps = InputHTMLAttributes<HTMLInputElement> & InputProps;

export const InputBar = forwardRef<HTMLInputElement, InputBarProps>(
  ({ ...props }, ref) => {
    return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
  },
);

InputBar.displayName = "InputBar";
