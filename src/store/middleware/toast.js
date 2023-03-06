import swal from "sweetalert";
const toast = (store) => (next) => (action) => {
  if (action.error && action.payload && action.payload.status !== 200)
    if (action.payload && action.payload.data.message !== undefined)
      swal("Failed", action.payload.data.message, "error");
  // if (
  //   action &&
  //   action.payload &&
  //   action.payload.status !== undefined &&
  //   action.payload.status === true
  // )
  //   if(action.payload.message !== undefined) swal("Success", action.payload.message, "success");
  return next(action);
};

export default toast;
