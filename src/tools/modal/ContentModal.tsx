import React from "react";

interface props {
  children: React.ReactNode;
}

const ContentModal = ({ children }: props) => {
  return (
    <div>
      <input type="checkbox" id="contentModal" className="modal-toggle" />
      <div className={`modal modal-bottom`} role="dialog">
        <div className="modal-box rounded-sm">{children}</div>
        <label className="modal-backdrop" htmlFor="contentModal">
          Close
        </label>
      </div>
    </div>
  );
};

export default ContentModal;
