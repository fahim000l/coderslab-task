import React from "react";

interface props {
  title?: string;
  message?: string;
  children?: React.ReactNode;
}

const Modal = ({ title, children, message }: props) => {
  return (
    <div>
      <input type="checkbox" id="customModal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          <div>{children}</div>
        </div>
        <label className="modal-backdrop" htmlFor="customModal">
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;
