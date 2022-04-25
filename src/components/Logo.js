import logo from "../assets/uploads/logo.svg";

export const Logo = ({ style, className }) => {
  return (
    <img
      src={logo}
      alt="TraderPro live"
      className={`img-fluid logo ${className}`}
      style={{ style }}
    />
  );
};
