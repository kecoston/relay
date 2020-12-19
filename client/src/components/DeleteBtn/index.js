import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
      <IconButton
          {...props}
          aria-label="delete"
          color="default"
          variant="contained"
          size="small"
      >
          <DeleteIcon />
      </IconButton>
  );
}

export default DeleteBtn;