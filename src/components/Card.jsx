import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react"
const Card = ({data , reference}) => {
  return (
    <motion.div drag  dragConstraints={reference} whileDrag={{
    scale: 1.2,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  }}   dragTransition={{
    bounceStiffness: 600,
    bounceDamping: 200
  }} dragElastic={0.1} className="relative w-60 flex-shrink-0 h-72 bg-zinc-900/90 rounded-[45px] overflow-hidden text-white p-5">
      <FaRegFileAlt />

      <p className="font-semibold mt-5 text-sm leading-tight">
        {data.desc}
      </p>
    <div className=" footer absolute bottom-0  left-0 w-full   ">

<div className=" flex items-center justify-between mb-2  py-3 px-8">
<h5> {data.filesize}</h5>
<span className=" bg-zinc-600 rounded-full w-7 h-7 flex items-center justify-center   " >
{data.close ? <IoCloseSharp /> : <LuDownload size=".7em" color="fff"/>}
</span>
</div>

{data.tag.isOpen && (
  <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
<h3 className=" font-semibold text-xs p-1">{data.tag.tagTitle}</h3>
     </div>
)}


    </div>

    </motion.div>
  );
};

export default Card;
