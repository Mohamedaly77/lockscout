import React from 'react';
import styles from '../style';
import check from '../assets/Checkbox Base.png';

function CTA() {
  return (
    <section id="cta" className={`${styles.flexCenter} bg-neutral`}>
      <div>
        <h3 className="text-primary text-[14px] flex justify-center w-full mt-4">
          1% OF THE INDUSTRY
        </h3>
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center text-center">
          Welcome to your new digital reality that will rock <br /> your world
          truly at all throughout.
        </h1>
        <div className=" flex flex-row mt-6 ">
          <form className=" w-full flex">
            <input
              type="text"
              placeholder="Type your email"
              className=" py-3 w-full px-4"
            />
            <button
              type="Submit"
              className=" bg-primary px-6 py-4 text-white font-semibold rounded-lg outline-none"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" flex justify-evenly mt-5 w-full">
          <div className=" flex">
            <img src={check} alt="checkbox" />
            <p className=" ml-3">Fully Secure</p>
          </div>
          <div className=" flex">
            <img src={check} alt="checkbox" />
            <p className=" ml-3">24/7 Support</p>
          </div>
          <div className=" flex">
            <img src={check} alt="checkbox" />
            <p className=" ml-3">Done Deal</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
