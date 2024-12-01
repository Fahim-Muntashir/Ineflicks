import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative  w-[320px] py-2 rounded-md bg-[#33363C]">
      <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#C4C4C4] w-8 h-6" />
      <input
        type="text"
        className="w-full pl-12 pe-3 text-[15px] focus:outline-none bg-[#33363C]"
        placeholder="Search shows, movies, genres, etc."
      />
    </div>
  );
};

export default SearchBar;
