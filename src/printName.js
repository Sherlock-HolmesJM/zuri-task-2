import { toast } from "react-toastify";

import { colors } from "./config";

const printName = () => {
  const options = {
    draggable: true,
    style: {
      background: colors.primary,
    },
  };

  toast.info("My name is Nkweke Ugochukwu", {
    ...options,
  });

  setTimeout(() => toast.info("Have a nice day.", { ...options }), 3000);
};
export default printName;
