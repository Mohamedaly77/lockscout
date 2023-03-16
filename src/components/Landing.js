import React from 'react';
import styles from '../style';
import cover from '../assets/cover photo.svg';
import gitlab from '../assets/Gitlab.svg';
import paypal from '../assets/paypal.svg';
import netflix from '../assets/Netflix.svg';
import slack from '../assets/slack.svg';
import TypeWriterEffect from 'react-typewriter-effect';

function Landing() {
  return (
    <section
      className={` flex  lg:flex-row  flex-col-reverse ${styles.paddingY} ${styles.paddingX} bg-primary min-h-[500px] justify-center`}
    >
      <div className={`flex flex-col items-center w-full  ${styles.paddingY}`}>
        <div className=" flex justify-start flex-col w-full">
          <TypeWriterEffect
            textStyle={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '52px',
            }}
            startDelay={2000}
            cursorColor="#fff"
            multiText={[' Your Supercharged Design workflow']}
            multiTextDelay={1500}
            typeSpeed={100}
          />

          <p className="text-primary4 max-w-[550px]  mt-5  ">
            We’ve been told it is not possible to overachieve our customers’
            expectations. We have not reinvented the wheel, we decided to build
            upon it.
          </p>
        </div>
        <div className=" flex w-full justify-start mt-5">
          <button className=" py-4 px-6 bg-primary3 rounded-lg text-white font-semibold">
            Get Started
          </button>
        </div>
        <div className=" flex  justify-start w-full mt-10 flex-col">
          <div>
            <h4 className=" text-white text-[15px] font-normal ">
              Who supports Us{' '}
            </h4>
          </div>
          <div className=" flex w-full items-end mt-10 gap-10  flex-wrap  sm:justify-start justify-center">
            <img src={gitlab} alt="gitlab" />
            <img src={netflix} alt="paypal" />
            <img src={paypal} alt="net" />
            <img src={slack} alt="slack" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center w-full  z-[5]">
        <img src={cover} alt="cover" />
      </div>
    </section>
  );
}

export default Landing;
