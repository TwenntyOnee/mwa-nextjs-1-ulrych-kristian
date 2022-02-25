import { FaCheck } from "react-icons/fa";
export default function Card(props) {
  return (
    <div className="sm:w-[370px] flex flex-col bg-white justify-center items-center w-[346px] h-[416px]">
      <div className="uppersection flex mt-5 gap-20 flex-row items-start">
        <h5 className="h5 text-[#BE6361]">{props.subtitle}</h5>
        <h1 className="h1 ">{props.price}</h1>
      </div>
      <div className="flex-col font-medium mt-10 flex gap-2">
        <div className="flex">
          <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
          <p>An mel everti invenire</p>
        </div>
        <div className="flex">
          <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
          <p>Intellegam legendos </p>
        </div>
        <div className="flex">
          <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
          <p>Consequuntur eu sit</p>
        </div>
        <div className="flex">
          <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
          <p>Solet nostrum</p>
        </div>
        <div className="flex">
          <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
          <p>Consectetuer sea</p>
        </div>
        <div className="wrapper mt-7 flex justify-center">
          <div className="button text-[#BE6361] flex justify-center items-center font-medium border-[1px] w-[170px] mb-10 h-[48px]">
            Buy
          </div>
        </div>
      </div>
    </div>
  );
}
