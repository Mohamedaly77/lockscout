import React from 'react';
import expo from '../assets/expolre.svg';
import ideas from '../assets/Ideas.svg';
import styles from '../style';
import hero2 from '../assets/hero2.svg';

function Heros() {
  return (
    <section id="heros" className={` bg-white ${styles.paddingY}`}>
      <div className="  w-full flex flex-col justify-center sm:px-2 px-6 ">
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center">
          Redefining Product Features
        </h1>
        <p className=" text-gray font-normal flex  justify-center  ">
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence on cross-platform
          integration.
        </p>
      </div>

      <div
        className={`flex justify-center w-full md:flex-row flex-col-reverse ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className=" flex flex-col w-full justify-center ">
          <div className={`flex flex-col  justify-center items-center w-full `}>
            <div className=" flex  md:py-0 py-6   ">
              <img src={expo} alt="expo" className=" w-[48px] h-[48px]" />
              <div className=" flex flex-col ml-4  ">
                <h1 className=" text-gray font-bold text-[22px]">
                  Explore More Ideas
                </h1>
                <p className=" text-gray2 max-w-[450px]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <div>
                  <button className=" text-primary font-semibold mt-3">
                    Learn More...
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex  mt-5 md:py-0 py-6 ">
              <img src={ideas} alt="expo" className=" w-[48px] h-[48px]" />
              <div className=" flex flex-col ml-4">
                <h1 className=" text-gray font-bold text-[22px]">
                  Bring those ideas to life
                </h1>
                <p className=" text-gray2 max-w-[450px]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <div>
                  <button className=" text-primary font-semibold mt-3">
                    Learn More...
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex  mt-5 md:py-0 py-6">
              <img src={ideas} alt="expo" className=" w-[48px] h-[48px]" />
              <div className=" flex flex-col ml-4">
                <h1 className="  text-gray font-bold text-[22px]">
                  Ship better outcomes
                </h1>
                <p className=" text-gray2 max-w-[450px]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
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
        <div className=" flex justify-center w-full items-center  ">
          <img
            src={hero2}
            alt="hero2"
            className=" mt-10 flex justify-center "
          />
        </div>
      </div>
    </section>
  );
}

export default Heros;
