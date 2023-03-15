import React from 'react';
import styles from '../style';
import facebook from '../assets/facebook2.svg';
import google from '../assets/google4.svg';
import apple from '../assets/apple2.svg';
import insta from '../assets/insta4.svg';

function Social() {
  return (
    <section id="social" className={`${styles.flexCenter} bg-darkGrey flex  `}>
      <div>
        <hr className=" bg-gray2" />
      </div>
      <div className=" flex  md:justify-between  justify-center w-full px-6 mt-3 md:flex-row flex-col items-center">
        <h4 className=" text-gray2 w-full">
          © 2023 Lookscout. All Rights Reserved.
        </h4>
        <div className=" flex w-full  justify-end pb-3">
          <img
            src={facebook}
            alt="facebook"
            className=" object-contain mr-3 w-[24px] h-[24px]"
          />
          <img
            src={google}
            alt="google"
            className=" object-contain mr-3  w-[24px] h-[24px]"
          />
          <img
            src={apple}
            alt="apple"
            className=" object-contain mr-3  w-[24px] h-[24px]"
          />
          <img
            src={insta}
            alt="insta"
            className=" object-contain mr-3  w-[24px] h-[24px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Social;
