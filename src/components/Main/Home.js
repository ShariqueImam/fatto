import React from "react";
import bgImg from "../../assets/banner.jpg";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import Navbar from "../UI/Navbar/Navbar";

const Home = () => {
  window.scrollTo(0, 0);

  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${(width < 500 && bgImg) ||
      (width > 500 && width < 1000 && bgImg) ||
      (width > 1000 && bgImg)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
  `;
  const style = {
    heading:
      "text-5xl md:text-6xl lg:text-8xl text-white  my-2 md:my-3 w-[100%] md:w-[100%] text-center font-semibold font",
    para: "text-white text-sm md:text-lg my-3 md:my-8 text-center  mx-auto md:mx-auto w-[100%] md:w-[70%] font-light",
    btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-white text-md",
    arrow: `text-lg text-white`,
    btnContainer:
      "bg-yellow transition duration-[250ms] font-thin cursor-pointer hover:opacity-[0.9]  mx-auto  my-2 flex items-center justify-start bg-white  px-4 rounded-lg",
    mainContent:
      "w-[90%] md:w-[100%] h-[80%] flex flex-col items-start justify-center  mx-auto font1",
  };
  return (
    <FeaturedBackground1 className="">
      <div className="backdrop-blur-[1px] h-full w-full">
        <Navbar />
        <div className={style.mainContent}>
          <div className={style.btnContainer}>
            {/* <Link to={"/about"} className="flex items-center justify-center">
              <button className={style.btn}></button>
              <AiOutlineArrowRight className={style.arrow} />
            </Link> */}
          </div>
        </div>
      </div>
    </FeaturedBackground1>
  );
};

export default Home;
