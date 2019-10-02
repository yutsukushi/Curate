import React from "react";

function DeleteBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
          x
        </span>
      );
}

export default DeleteBtn;