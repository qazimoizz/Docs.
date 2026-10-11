import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className="relative w-60 h-72 bg-zinc-900/90 rounded-[20px] overflow-hidden text-white p-5">
      <FaRegFileAlt />

      <p className="font-semibold mt-5 text-sm leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    <div className=" footer absolute bottom-0  left-0 w-full   ">

<div className=" flex items-center justify-between mb-2  py-3 px-8">
<h5> . 4mb</h5>
<span className=" bg-zinc-600 rounded-full w-7 h-7 flex items-center justify-center   " >

<LuDownload size=".7em" color="fff"/>   
</span>

</div>
<div className=" tag w-full py-3 bg-green-500 flex items-center justify-center">
<h3 className=" font-semibold text-xs   "> Download Now</h3>
     </div>

    </div>

    </div>
  );
};

export default Card;
