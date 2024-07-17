import { footerInfo } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

const Footer = () => {
  const now = new Date();
  const getFullYear = now.getFullYear();

  return (
    <footer className="w-full bg-[#f5f5f5]">
      <div className="p-24 flex justify-between gap-4">
        <div className="flex gap-24 justify-between">
          <div className="min-w-max">
            <h3 className="text-[#333] text-xl mb-4 font-semibold">COMPANY</h3>
            <ul className="flex flex-col gap-4 text-[#333]">
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Products
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Store Locator
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Wholesale
              </li>
            </ul>
          </div>
          <div className="min-w-max">
            <h3 className="text-[#333] text-xl mb-4 font-semibold">
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-4 text-[#333]">
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Terms of Use
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Returns & Refunds
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                Shipping
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                FAQ
              </li>
              <li className="cursor-pointer hover:text-[#999] transition duration-200">
                COA
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-items-end">
          <div className=" w-2/3">
            <h3 className="text-xl mb-4 text-[#333] font-semibold">
              STAY UPDATED
            </h3>
            <div className="">
              <div className="flex">
                <input
                  type="text"
                  className="p-2 focus:outline-none w-full border-[2px] border-[#333]"
                  placeholder="Email Address"
                />
                <button className="bg-[#333] text-white px-4 p-2 hover:bg-[#111] transition duration-200">
                  <MdOutlineSubdirectoryArrowRight className="text-xl" />
                </button>
              </div>
              <p className="text-xs text-[333] w-3/4 mt-2">
                You agree to live a LITTO marketing through emails. By creating
                an account I agree to the Terms & Conditions / Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-[#999] p-4 border-t-[1px] border-[#cecece]">
        CopyRight © {getFullYear}, LITTO
      </div>
    </footer>
  );
};

export default Footer;
