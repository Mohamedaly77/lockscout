import React from 'react';
import styles from '../style';
import logo from '../assets/logo2.svg';
import avatar from '../assets/Avatar.svg';

function Testimonials() {
  return (
    <div>
      <div className=" flex flex-col justify-center w-full ">
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center ">
          What Our Customers Say
        </h1>
        <p className=" text-gray font-normal flex  justify-center text-justify  md:px-3 px-6   ">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
      </div>
      <div
        className={`${styles.flexCenter} ${styles.paddingX}  flex flex-col mt-6 `}
      >
        <div className=" px-6 bg-neutral w-full py-4">
          <div className=" w-full flex md:justify-center justify-start">
            <img src={logo} alt="logo" className=" flex justify-center " />
          </div>

          <p className=" text-[28px] text-darkgray leading-[38px] mt-4 md:text-center  text-left">
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can't say enough about LookScout. Great
            job, I will definitely be ordering again!
          </p>
          <div className=" flex flex-row w-full md:justify-center justify-start mt-4 mb-4">
            <img src={avatar} alt="avatar" />
            <div className=" ml-3">
              <h4 className=" text-[15px] text-darkGrey">Lisa Smith</h4>
              <p className=" text-[14px] text-gray2">CEO Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
