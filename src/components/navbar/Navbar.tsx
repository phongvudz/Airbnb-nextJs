import React from "react";
import Container from "../Container";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center gap-3 justify-between"></div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
