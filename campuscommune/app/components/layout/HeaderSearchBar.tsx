import { FiSearch } from "react-icons/fi";

const HeaderSearchBar = () => {
  return (
    <div
      className="flex flex-row rounded-md p-2 border-neutral-400 min-w-[250px] w-full gap-1"
      style={{ borderWidth: "0.5px" }}
    >
      <FiSearch size={24} className="text-neutral-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none bg-transparent text-neutral-800"
      />
    </div>
  );
};

export default HeaderSearchBar;
