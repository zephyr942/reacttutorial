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
}

const Button = ({ selectBtnType, children }: BtnProps) => {
  return <button className={`btn btn-` + selectBtnType}>{children}</button>;
};

export default Button;
