// enum BtnType{
//     PRIMARY="primary",
//     SECONDARY="secondary",
//     SUCCESS="success",
//     DANGER="danger",
//     WARNING="warning"

// }

interface BtnProps {
  children: string;
  selectBtnType?: "primary" | "secondary" | "success";
  handleClick?: () => void;
}

const Button = ({ selectBtnType, children, handleClick }: BtnProps) => {
  return (
    <button className={`btn btn-` + selectBtnType} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
