import { useState } from "react";
import NavItem from "./NavItem";
import { AiOutlineHome } from "react-icons/ai";
import { BsJustify } from "react-icons/bs";
const items = [
  {
    label: "Home",
    icon: <AiOutlineHome size="1.875rem" />,
    active: true,
    url: "/",
  },

  {
    label: "Movie",
    icon: <AiOutlineHome size="1.875rem" />,
    active: false,
    url: "/movies",
  },

  {
    label: "About",
    icon: <AiOutlineHome size="1.875rem" />,
    active: false,
    url: "/abouts",
  },
];
export default function Nav() {
  const isShowNav = false;
  const [isNavItem, setisNavItem] = useState(isShowNav);
  const handleMenu = () => {
    setisNavItem(!isNavItem);
  };
  console.log(isNavItem);
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between md:justify-end items-center flex">
        <h4 className="uppercase font-bold text-primary py-4 border-primary border-b-2 inline-block md:block text-left md:text-right ">
          Phimmoi
        </h4>
        <span onClick={handleMenu} className=" inline-block md:hidden">
          <BsJustify style={{ width: "40px " }} />
        </span>
      </div>
      <ul className={`mx-4 my-2 ${isNavItem ? "block" : "hidden"}  md:block`}>
        <NavItem items={items} />
      </ul>
    </nav>
  );
}
