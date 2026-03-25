import styles from "./Button.module.css";
import styled from "styled-components";
// enum BtnType{
//     PRIMARY="primary",
//     SECONDARY="secondary",
//     SUCCESS="success",
//     DANGER="danger",
//     WARNING="warning"

// }

const ButtonStyle = styled.button`
  width: 200px;
  height: 80px;
  padding: 10px;
  background: orange;
  border-radius: 20px;
  color: white;
  font-size: large;
  font-weight: bold;
`;

interface BtnProps {
  children: string;
  selectBtnType?: "primary" | "secondary" | "success";
  handleClick?: () => void;
}

const Button = ({ selectBtnType, children, handleClick }: BtnProps) => {
  return (
    <button
      // className={`${styles.btn} ${styles["btn-" + selectBtnType]}`}
      className={[styles.btn, styles["btn-" + selectBtnType]].join(" ")}//动态访问styles这个对象的属性,ES6计算属性,
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
