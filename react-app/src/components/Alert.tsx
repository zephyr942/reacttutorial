import { type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  isDismissing?: Boolean;
  handleCloseBtn?: () => void;
}

const Alert = ({
  children,
  isDismissing = false,
  handleCloseBtn,
}: AlertProps) => {
  return (
    <div
      className={`alert alert-primary ${isDismissing ? "alert-dismissible" : ""} fade show`}
      role="alert"
    >
      {isDismissing && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleCloseBtn}
        ></button>
      )}

      {children}
    </div>
  );
};

export default Alert;
