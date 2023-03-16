import React from 'react';
import styles from '../style';
import hero from '../assets/hero1.svg';
import expo from '../assets/expolre.svg';
import ideas from '../assets/Ideas.svg';

function Hero() {
  return (
    <section id="hero" className={`${styles.paddingX} flex-col bg-darkGrey`}>
      <div
        className={`flex justify-center ${styles.paddingY} w-full gap-10 lg:flex-row flex-col`}
      >
        <img src={hero} alt="hero" />
        <div className={`flex flex-col  justify-center items-center w-full`}>
          <div className=" flex  md:py-0 py-6 hero ">
            <img src={expo} alt="expo" className=" w-[48px] h-[48px]" />
            <div className=" flex flex-col ml-4 ">
              <h1 className=" text-white font-bold text-[22px]">
                Explore More Ideas
              </h1>
              <p className=" text-gray2 max-w-[450px]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <div>
                <button className=" text-primary font-semibold mt-3">
                  Learn More...
                </button>
              </div>
            </div>
          </div>
          <div className=" flex  mt-5 md:py-0 py-6 hero ">
            <img src={ideas} alt="expo" className=" w-[48px] h-[48px]" />
            <div className=" flex flex-col ml-4">
              <h1 className=" text-white font-bold text-[22px]">
                Bring those ideas to life
              </h1>
              <p className=" text-gray2 max-w-[450px]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <div>
                <button className=" text-primary font-semibold mt-3">
                  Learn More...
                </button>
              </div>
            </div>
          </div>
          <div className=" flex  mt-5 md:py-0 py-6 hero">
            <img src={ideas} alt="expo" className=" w-[48px] h-[48px]" />
            <div className=" flex flex-col ml-4">
              <h1 className=" text-white font-bold text-[22px]">
                Ship better outcomes
              </h1>
              <p className=" text-gray2 max-w-[450px]">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <div>
                <button className=" text-primary font-semibold mt-3">
                  Learn More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
