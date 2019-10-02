import React from "react";

function DeleteBtn(props) {
    return (
        <button className="delete-btn" {...props} tabIndex="0">
          x
        </button>
      );
}

export default DeleteBtn;