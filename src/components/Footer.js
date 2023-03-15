import React from 'react';
import styles from '../style';
import logo from '../assets/Company Logo (1).png';
import { footerLinks } from '../constants';

function Footer() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX}  flex-col bg-darkGrey border-b-2  border-gray2 `}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=" flex-1 flex flex-col  justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className=" w-[150px] h-[28px] object-contain"
          />
          <p className=" text-gray font-normal flex px-3 max-w-[400px]">
            Generate outside the box thinking with the possibility to targtet
            the low.
          </p>
          <div>
            <form className=" w-full px-3 mt-4">
              <input
                type="text"
                placeholder="Enter Email.."
                className=" bg-input text-gray2 px-3 py-4 "
              />
              <button className=" bg-primary px-6 py-4  text-white rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className=" flex-1 w-full flex flex-row justify-between flex-wrap  md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className=" text-white">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li className=" text-gray2" key={link.name}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
