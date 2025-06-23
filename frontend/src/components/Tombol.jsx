import { Link } from "react-router-dom";

const Tombol = ({
  style = "lonjong putih",
  text = "HARUS DI ISI YA",
  link = "",
  icon = "",
  onClick = () => {},
  type = "button",
}) => {
  const isLink = !!link;
  const className = `tombol ${style}`;

  return isLink ? (
    <Link to={link} onClick={onClick} className={className}>
      {text}
      {icon}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={className}>
      {text}
      {icon}
    </button>
  );
};


export default Tombol;
