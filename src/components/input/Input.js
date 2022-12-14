import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "16px 60px 16px 16px" : "16px")};
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: ${(props) => props.theme.grayLight};
    font-weight: 500;
    transition: all 0.3s linear;
    font-size: 20px;
  }
  input:focus {
    border-color: ${(props) => props.theme.primary};
    background-color: #fff;
  }
  .icon-input {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  className = "",
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input
        id={name}
        type={type}
        className={className}
        {...field}
        {...props}
      />
      {children}
    </InputStyles>
  );
};

export default Input;
