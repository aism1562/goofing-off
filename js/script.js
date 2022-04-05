import React from "react"; //tutorial/template by Cameron Tatz

const Message = () => <div />;

const DialogBox = () => {
  return (
    <div className="DialogWindow">
      <div className="dialogTitle">???</div>
      <Message />
      <div onClick={handleClick} className="dialogFooter">
        Next
      </div>
      </div>
    </div>
  );
};

export default DialogBox
