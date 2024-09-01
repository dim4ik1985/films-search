import backImg from "../../assets/icons/icons8-стрелка-влево-в-круге-64.png";
import "./backToHome.scss";

import { useNavigate } from "react-router-dom";

export const BackToHome = () => {
  const navigate = useNavigate();
  const handlerToBack = () => {
    navigate(-1);
  };

  return (
    <div className={"btn__home"} onClick={handlerToBack}>
      <img src={backImg} alt="back" />
    </div>
  );
};
