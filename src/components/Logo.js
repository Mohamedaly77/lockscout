import React from 'react';
import styles from '../style';
import paypal from '../assets/paypal2.svg';
import mall from '../assets/mall champ.svg';
import google from '../assets/google2.svg';
import slack from '../assets/slack2.svg';
import pienterst from '../assets/pienterst2.svg';
import express from '../assets/Press Logo.svg';

function Logo() {
  return (
    <section id="logos" className={``}>
      <div className=" flex flex-col ">
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center">
          Proud to Be Used By
        </h1>
        <p className=" text-gray font-normal flex  justify-center text-center">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for
          state of the art customer service.
        </p>
      </div>
      <div
        className={` ${styles.paddingY}  w-full justify-center md:flex-row flex-col  flex flex-wrap `}
      >
        <img src={express} alt="logos" className=" mr-6  md:py-6 py-0 " />
        <img src={slack} alt="logos" className=" mr-6  md:py-0 py-6 " />
        <img src={google} alt="logos" className=" mr-6  md:py-0 py-6" />
        <img src={paypal} alt="logos" className=" mr-6  md:py-0 py-6" />
        <img src={pienterst} alt="logos" className=" mr-6  md:py-0 py-6" />
        <img src={mall} alt="logos" className=" mr-6  md:py-0 py-6" />
      </div>
    </section>
  );
}

export default Logo;
