import React from 'react';
import styles from '../style';
import avatar2 from '../assets/Avatar 2.svg';
import avatar3 from '../assets/Avatar 3.svg';
import avatar4 from '../assets/Avatar 4.svg';

import rectangle1 from '../assets/Rectangle 1.svg';
import rectangle2 from '../assets/Rectangle 2.svg';
import rectangle3 from '../assets/Rectangle 3.svg';

function Blog() {
  return (
    <section id="blog" className={` ${styles.paddingY}`}>
      <div className=" flex justify-center flex-col w-full">
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center">
          Latest Blog Posts
        </h1>
        <p className=" text-gray font-normal flex  text-center w-full justify-center">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </div>
      <div className=" flex justify-center  flex-wrap">
        <div className={`${styles.flexCenter} flex-col mt-4`}>
          <img src={rectangle1} alt="rectangle1" />
          <h4 className=" text-[22px] font-bold  text-left">
            Organize your digital assets with a <br /> new methodology here.
          </h4>
          <p className=" text-gray font-normal flex text-left max-w-[450px]">
            Podcasting operational management inside of workflows to establish a
            framework seamless. Convergence collaboratively.
          </p>
          <div className=" flex flex-row w-full md:justify-center justify-start mt-4 mb-4">
            <img src={avatar2} alt="avatar" />
            <div className=" ml-3">
              <h4 className=" text-[15px] text-darkGrey">Andrew Miller</h4>
              <p className=" text-[14px] text-gray2">CEO</p>
            </div>
          </div>
        </div>
        <div className={`${styles.flexCenter} flex-col mt-4`}>
          <img src={rectangle2} alt="rectangle2" />
          <h4 className=" text-[22px] font-bold  text-left">
            Organize your digital assets with a <br /> new methodology here.
          </h4>
          <p className=" text-gray font-normal flex text-left max-w-[450px]">
            Podcasting operational management inside of workflows to establish a
            framework seamless. Convergence collaboratively.
          </p>
          <div className=" flex flex-row w-full md:justify-center justify-start mt-4 mb-4">
            <img src={avatar4} alt="avatar" />
            <div className=" ml-3">
              <h4 className=" text-[15px] text-darkGrey">David Munsan</h4>
              <p className=" text-[14px] text-gray2">UX</p>
            </div>
          </div>
        </div>
        <div className={`${styles.flexCenter} flex-col mt-4`}>
          <img src={rectangle3} alt="rectangle2" />
          <h4 className=" text-[22px] font-bold  text-left">
            Organize your digital assets with a <br /> new methodology here.
          </h4>
          <p className=" text-gray font-normal flex text-left max-w-[450px]">
            Podcasting operational management inside of workflows to establish a
            framework seamless. Convergence collaboratively.
          </p>
          <div className=" flex flex-row w-full md:justify-center justify-start mt-4 mb-4">
            <img src={avatar3} alt="avatar" />
            <div className=" ml-3">
              <h4 className=" text-[15px] text-darkGrey">Andrew Meller</h4>
              <p className=" text-[14px] text-gray2">UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
