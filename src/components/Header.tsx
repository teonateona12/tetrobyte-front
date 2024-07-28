import React from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Avatar from "../images/Default.png";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="avatar-div">
        <div>
          <h6>პაატა კობახიძე</h6>
          <p>სამართლის ბაკალავრი</p>
        </div>
        <Image src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
