import Image from "next/image";
import React from "react";
import { CustomButton, Dropdown } from ".";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Image
          src={"/Logo.png"}
          alt={"Logo Himaseperta"}
          width={80}
          height={80}
        />
        <div className="flex justify-center items-center gap-3">
          <CustomButton
            title="Biro Kesekretariatan"
            style=" ghost bg-transparent text-white hover:bg-white hover:text-black"
          />
          <Dropdown />
          <CustomButton title="Contact Us" style=" bg-green" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
