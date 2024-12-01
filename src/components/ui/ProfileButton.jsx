import { RxHamburgerMenu } from "react-icons/rx";

const ProfileButton = () => {
  return (
    <div className="bg-[#33363C] flex justify-between space-x-3 items-center p-[9px] rounded-[8px]">
      <a href="">
        <img src="../../../public/assets/avatar.svg" />
      </a>
      <a href="">
        <RxHamburgerMenu />
      </a>
    </div>
  );
};

export default ProfileButton;
