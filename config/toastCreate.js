import { toast } from "react-toastify";

function toastCreate(input) {
  toast.success(input, {
    className: "text-[12px] font-bold text-green-700",
    style: {
      background: "#e0f2f1",
      color: "#004d40",
      borderRadius: "10px",
      fontFamily: "Vazir",
    },
  });
}

export default toastCreate;
