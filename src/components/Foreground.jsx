import Card from "./Card"
const Foreground = () => {
const data =  [
  
  {

  desc:"this is the background of the displayed item",
  filesize:".8mb",
  close:false,
  tag:{isOpen:true, tagTitle: "Download Now", tagColor:"green" }

},

  {

  desc:"this is the background of the displayed item",
  filesize:".8mb",
  close:false,
  tag:{isOpen:true, tagTitle: "Upload", tagColor:"blue" }

},

  {

  desc:"this is the background of the displayed item",
  filesize:".8mb",
  close:false,
  tag:{isOpen:false, tagTitle: "Download Now", tagColor:"green" }

},
];

  return (
    <div className=' fixed top-0 left-0 z-[3] w-full h-full gap-5 p-7  flex flex-wrap '>
{data.map((items, index)=>(
  <Card data={items} />
))}


        </div>
  )
}

export default Foreground