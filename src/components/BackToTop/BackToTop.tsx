import "./backToTop.scss";
import backImg from "../../assets/icons/icons8-шеврон-вверх-в-круге-64.png";

export const BackToTop = () => {
  const handlerScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className={"btn-scroll-up"} onClick={handlerScroll}>
      <img src={backImg} alt="back" />
    </div>
  );
};
