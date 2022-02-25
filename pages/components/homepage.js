import img1 from "../../images/marginalia-productive-work.svg";
import img2 from "../../images/marginalia-unsubscribed.png";
import img3 from "../../images/marginalia-coming-soon.svg";
import img4 from "../../images/PhotoOne.png";
import img5 from "../../images/PhotoShoes.png";
import img6 from "../../images/Bitmap.png";
import img7 from "../../images/marginalia-online-shopping.svg";
import img8 from "../../images/marginalia-waiting.svg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Card from "./card";

export default function Homepage() {
  return (
    <div className="body">
      <div className=" bg-[#FF8482] flex  w-screen flex-col sm:flex-row h-screen  ">
        <div className="textBox text-white sm:w-1/2 w-screen h-1/2 sm:h-screen flex flex-col  sm:ml-[137px] items-start sm:items-start  justify-center ">
          <h5 className="h5 ">Delectus instructior</h5>
          <h1 className="h1 sm:text-[72px] text-[56px] ">
            Vide legimus consectetuer
          </h1>

          <div className="emailBox flex sm:flex-row flex-col w-screen">
            <div className=" bg-white text-gray-500 pl-5 mb-5 flex items-center w-[270px] mr-10 h-[48px]">
              Email
            </div>
            <div className=" bg-white w-[170px] text-center justify-center font-semibold flex items-center text-black border-2 border-black h-[48px]">
              Submit
            </div>
          </div>
        </div>

        <div className="imageWrapper w-screen sm:w-1/2 flex">
          <Image src={img1}></Image>
        </div>
      </div>

      <div className=" bg-[#FFF2DD] flex w-screen  flex-col sm:flex-row h-screen  ">
        <div className="imageWrapper justify-center items-center sm:w-1/2 flex">
          <Image src={img2}></Image>
        </div>
        <div className="textBox text-white sm:w-1/2 w-screen h-1/2 sm:h-screen flex flex-col  sm:ml-[137px] items-start sm:items-start  justify-center ">
          <h5 className="h5 mb-5 text-[#BE6361]">Dico nullam</h5>
          <h2 className="h2 text-black mb-5 w-[357px]">Vim graeco principes</h2>
          <p className="w-[357px] text-black mb-10 font-[20px] font-semibold">
            Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no
            ubique persecuti, at sit iusto aliquam interpretaris.
          </p>
          <div className="bg-[#BE6361] w-[170px] h-[48px] flex items-center justify-center text-white">
            Explore
          </div>
        </div>
      </div>

      <div className=" mb-14">
        <h5 className="h5 text-center mt-24 text-[#BE6361]">
          Nominavi suavitate
        </h5>
        <h2 className="h2 text-center mt-10">Offendit persecuti </h2>
        <p className=" mt-10  mb-10 font-[20px]  text-center font-semibold">
          Eu pro ludus dignissim. Eos debet molestiae constituto ne, <br /> quo
          consul interesset ei, cotidieque theophrastus ea his.
        </p>

        <div>
          <div className="wrapper flex w-screen sm:flex-row flex-col items-center  justify-around">
            <div className="1 w-[306px] h-[400px]   flex-col justify-center text-center ">
              <div className="w-[170px] ml-16 shadow-md flex justify-center items-center border-2 h-[170px]">
                <FaChartBar className="text-[#BE6361] w-20 h-20"></FaChartBar>
              </div>
              <h4 className="h4 mt-10 ">Possim</h4>
              <p className="  font-[24px] mt-5 text-gray-500  text-center font-semibold">
                An animal assentior nam, sed qualisque deterruisset ea qui
                melius erroribus
              </p>
            </div>
            <div className="1 w-[306px] h-[400px]   flex-col justify-center text-center ">
              <div className="w-[170px] ml-16 shadow-md flex justify-center items-center border-2 h-[170px]">
                <FaShoppingBag className="text-[#BE6361] w-20 h-20"></FaShoppingBag>
              </div>
              <h4 className="h4 mt-10 ">Possim</h4>
              <p className="  font-[24px] mt-5 text-gray-500  text-center font-semibold">
                An animal assentior nam, sed qualisque deterruisset ea qui
                melius erroribus
              </p>
            </div>
            <div className="1 w-[306px] h-[400px]   flex-col justify-center text-center ">
              <div className="w-[170px] ml-16 shadow-md flex justify-center items-center border-2 h-[170px]">
                <FaFileAlt className="text-[#BE6361] w-20 h-20"></FaFileAlt>
              </div>
              <h4 className="h4 mt-10 ">Possim</h4>
              <p className="  font-[24px] text-gray-500 mt-5 text-center font-semibold">
                An animal assentior nam, sed qualisque deterruisset ea qui
                melius erroribus
              </p>
            </div>
          </div>
          <div className="wrapper flex justify-center">
            <div className=" w-[170px] flex justify-center items-center text-white h-[48px] bg-[#BE6361]">
              {" "}
              Learn more
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#FFF2DD] flex w-screen  flex-col sm:flex-row  ">
        <div className="textBox text-white sm:w-1/2 w-screen h-1/2 sm:h-screen flex flex-col  sm:ml-[137px] items-start sm:items-start  justify-center ">
          <h5 className="h5 mb-5 text-[#BE6361] ">Mel solum </h5>
          <h1 className="h1 text-black sm:text-[72px] text-[56px] ">
            Mazim iudico
          </h1>
          <div className="text-black font-bold text-[16px]">
            <p className="mt-5">
              Bonorum minimum et sit tritani te, qui feugait electram
            </p>
            <p className="mt-2">
              Cum ei assum tation homero mel corpora consectetuer
            </p>
            <p className="mt-2">
              At per assum dicit verterem veri eripuit honestatis
            </p>
            <p className="mt-2">Lorem deterruisset ea vis expetenda has ex</p>
            <p className="mt-2">
              Usu eu hinc lorem inciderint minim movet quodsi
            </p>
          </div>
          <div className="bg-transparent mt-8 w-[170px] h-[48px] flex border-[1px] font-medium border-[#BE6361] items-center justify-center text-[#BE6361]">
            Get started
          </div>
        </div>

        <div className="imageWrapper sm:w-1/2 flex">
          <Image src={img3}></Image>
        </div>
      </div>

      <div className="slide5 bg-white pl-5 sm:pl-[135px] sm:pr-[135px] pr-5 pt-[61px]">
        <div className="subtitle ">
          <h5 className="h5 text-[#BE6361] mb-[23px]">Vim dolore</h5>
        </div>
        <div className="title flex sm:flex-row flex-col justify-between">
          <h2 className="h2 mb-[60px]">Epicurei aeque</h2>
          <div className="work w-[170px] mb-10 h-[48px] border-[1px] border-[#BE6361]">
            <h5 className="font-medium text-center justify-center pt-2 flex text-[#BE6361]">
              All work
            </h5>
          </div>
        </div>
        <div className="photos flex gap-5 sm:flex-row flex-col justify-between">
          <div className="wrapper">
            <Image src={img4}></Image>
            <h4 className="h4 mt-5">Postea nam at posse dicta</h4>
          </div>
          <div className="wrapper">
            <Image src={img5}></Image>
            <h4 className="h4 mt-5">Ea vivendo omnesque</h4>
          </div>
        </div>
      </div>

      <div className="slide6 w-screen bg-[#BE6361] flex-col flex justify-center  text-white mt-32 h-[448px]">
        <div className=" text-center ">
          <h5 className="h5">Eos lobortis inimicus</h5>
          <h2 className="h2">Pro ad ubique erroribus in modo mutat sed</h2>
          <div className="wrapper flex mt-10 justify-center">
            <div className=" w-[170px] mb-10 h-[48px] border-[1px] bg-white border-black">
              <h5 className="font-medium text-center justify-center pt-2 flex text-black">
                Try now
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white flex w-screen  flex-col sm:flex-row h-screen  ">
        <div className="imageWrapper justify-center items-center sm:w-1/2 flex">
          <Image src={img7}></Image>
        </div>
        <div className="textBox text-white sm:w-1/2 w-screen ml-10 h-1/2 sm:h-screen flex flex-col  sm:ml-[137px] items-start sm:items-start justify-center ">
          <h5 className="h5 mb-5 text-[#BE6361]">Ei vix quot </h5>
          <h2 className="h2 text-black mb-5 ">Suscipit natum</h2>
          <div className="flex gap-20 font-medium text-black">
            <div className="flex gap-5 flex-col">
              <div className="flex">
                <FaCheck className="mt-1 mr-2 text-[#BE6361]"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
            </div>
            <div className="flex gap-5 flex-col">
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
              <div className="flex">
                <FaCheck className="mt-1 text-[#BE6361] mr-2"></FaCheck>
                <p>Usu vitae</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide8 flex-col  flex text-center justify-center items-center bg-[#FFF2DD] w-screen h-full">
        <h5 className="h5 text-[#BE6361] mt-10">Mazim nemore</h5>
        <h2 className="h2 mt-5 mb-10">Nullam ornatus</h2>
        <div className="cards sm:flex-row flex flex-col gap-7 items-center">
          <Card subtitle="Maiestatis" price="9$"></Card>
          <Card subtitle="Maiestatis" price="24$"></Card>
          <Card subtitle="Maiestatis" price="99$"></Card>
        </div>
        <p className="font-regular mb-10 mt-10 w-[385px] text-center text-gray-400">
          Diam facilisi insolens per cu, eos malorum voluptaria esse
          concludaturque facete quaeque consequat{" "}
        </p>
      </div>

      <div className=" flex w-screen p-10 flex-col sm:flex-row  ">
        <div className="textBox text-white sm:w-1/2 w-screen h-1/2 sm:h-screen flex flex-col  sm:ml-[137px] items-start sm:items-start  justify-center ">
          <h5 className="h5 mb-5 text-[#BE6361] ">Mel solum </h5>
          <h1 className="h1 text-black sm:text-[72px] text-[56px] ">
            Suas semper
          </h1>
          <p className="text-black mt-8 w-[470px] font-medium font-[24px]">
            Deseruisse definitionem his et, an has veri integre abhorreant, nam
            alii epicurei et.
          </p>

          <div className="w-[470px] text-gray-300 flex items-center pl-2 mt-10 rounded-sm h-[48px] border-[1px] border-gray-300">
            Your email
          </div>
          <div className="w-[470px] text-gray-300 flex items-center pl-2 mt-5 rounded-sm h-[96px] border-[1px] border-gray-300">
            Your email
          </div>
          <div className=" mt-8 w-[170px] h-[48px] flex font-medium rounded-sm bg-[#BE6361] items-center justify-center text-white">
            Submit
          </div>
        </div>

        <div className="imageWrapper sm:w-1/2 flex">
          <Image src={img8}></Image>
        </div>
      </div>
    </div>
  );
}
