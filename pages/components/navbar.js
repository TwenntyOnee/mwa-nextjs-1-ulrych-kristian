export default function Navbar() {
  return (
    <div className="w-full absolute justify-between flex h-20 text-white bg-[#FF8482]">
      <div className="ml-[135px] font-Basic mt-3 text-[40px]">LOGO</div>
      <div className="content sm:visible invisible flex text-16px mt-7 font-medium ">
        <p className="mr-5">Portfolio</p>
        <p className="ml-5">Content</p>
      </div>
      <div className="sign sm:visible invisible up mr-24 border-[1.5px] h-12 w-44 text-center mt-4 pt-2">
        SIGN UP
      </div>
    </div>
  );
}
