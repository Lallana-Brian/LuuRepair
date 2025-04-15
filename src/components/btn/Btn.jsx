import { useNavigate } from "react-router-dom";

const Btn = ({
  onClick,
  text = "Botón",
  bgColor = "bg-yellow-400",
  textColor = "text-black",
  hoverBgColor = "hover:bg-yellow-500",
  borderColor = "border-yellow-500",
  className = "",
  to = "",
  hoverUnderline = false,
  disableHover = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
  };

  const buttonClasses = `
    px-6 py-4
    text-lg sm:text-xl
    mt-4 sm:mt-0
    rounded-lg
    border-2 border-solid
    transition-colors duration-300
    ${bgColor}
    ${textColor}
    ${borderColor}
    ${disableHover ? "" : hoverBgColor}
    ${hoverUnderline ? "hover:underline" : ""}
    ${className}
  `;

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Btn;
