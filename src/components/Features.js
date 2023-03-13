import React from 'react';
import styles from '../style';
import icon from '../assets/Icon placeholder 2.svg';
import icon2 from '../assets/Icon placeholder 3.svg';
import icon3 from '../assets/Icon placeholder 4.svg';
import icon4 from '../assets/Icon placeholder.svg';
import icon5 from '../assets/Icon connection.png';
import icon6 from '../assets/workflow.svg';

function Features() {
  return (
    <div className={` ${styles.paddingX} ${styles.paddingY}`}>
      <div className="  w-full flex flex-col justify-center ">
        <h1 className=" text-darkGrey text-[32px] font-bold w-full flex justify-center">
          Messaging for all
        </h1>
        <p className=" text-gray font-normal flex  justify-center   ">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
      </div>
      <div className="">
        <div className="   mt-6 w-full justify-center flex  md:flex-nowrap flex-wrap">
          <div className=" flex flex-col justify-center w-full md:py-0 py-6">
            <img src={icon} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Easier Work Organization</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.{' '}
            </p>
            <div>
              <button className=" text-primary font-semibold mt-3">
                Learn More...
              </button>
            </div>
          </div>
          <div className=" flex flex-col justify-center w-full  md:py-0 py-6">
            <img src={icon2} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Fast Connection</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </p>
            <div>
              <button className=" text-primary font-semibold mt-3">
                Learn More...
              </button>
            </div>
          </div>
          <div className=" flex flex-col justify-center w-full  md:py-0 py-6">
            <img src={icon3} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Streamlined Processes</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </p>
            <div>
              <button className=" text-primary font-semibold mt-3">
                Learn More...
              </button>
            </div>
          </div>
        </div>
        <div
          className={` flex  mt-6 w-full justify-center  md:flex-nowrap flex-wrap `}
        >
          <div className=" flex flex-col justify-center w-full  md:py-0 py-6">
            <img src={icon4} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Easier Integrations</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Efficiently unleash information.
            </p>
            <div>
              <button className=" text-primary font-semibold mt-3">
                Learn More...
              </button>
            </div>
          </div>
          <div className=" flex flex-col justify-center w-full  md:py-0 py-6">
            <img src={icon5} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Marketing Analytics</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate.
            </p>
            <div>
              <button className=" text-primary font-semibold mt-3">
                Learn More...
              </button>
            </div>
          </div>
          <div className=" flex flex-col justify-center w-full  md:py-0 py-6">
            <img src={icon6} alt="icon" className=" w-[48px] h-[48px]" />
            <h4 className=" font-bold mt-3">Workflow Builder</h4>
            <p className=" text-gray max-w-[400px] mt-3">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.
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
  );
}

export default Features;
