import { RiHome2Line } from "react-icons/ri";
import { FaRegBell, FaRegListAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiGroup } from "react-icons/bi";

const HeaderIcons = () => {
  return (
    <div className="md:flex flex-row items-center gap-6 hidden">
      <span>
        <RiHome2Line size={30} className="text-neutral-600" />
      </span>
      <span>
        <FaRegListAlt size={28} className="text-neutral-600" />
      </span>
      <span>
        <FaRegPenToSquare size={28} className="text-neutral-600" />
      </span>
      <span>
        <BiGroup size={33} className="text-neutral-600" />
      </span>
      <span>
        <FaRegBell size={29} className="text-neutral-600" />
      </span>
    </div>
  );
};

export default HeaderIcons;
