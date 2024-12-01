import { GiWallet } from "react-icons/gi";

const ConnectWalletButton = () => {
  return (
    <button className="bg-primary  text-black py-2 text-[16px] font-semibold px-7 rounded-md transition duration-300 flex justify-between items-center gap-x-3">
      <GiWallet className="w-[22px] h-[22px]" />
      <p> Connect Wallet</p>{" "}
    </button>
  );
};

export default ConnectWalletButton;
