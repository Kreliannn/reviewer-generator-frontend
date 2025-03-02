import Swal from "sweetalert2"

export const confirmAlert = (callback: () => void) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "black",
        confirmButtonText: "remove item"
      }).then((result) => {
        if (result.isConfirmed) {
          callback()
        }
      });
}

export const successAlert = ()