import { useState } from "react";

function ImageSlider(images) {
    
    const [selectedImage, setSelectedImage] = useState(images?.images[0])

  return (
    images && <div className=" h-full flex flex-col gap-4 ">
      <div className=" w-[500px] h-[420px] border border-gion-teal rounded-lg ">
        <img src={selectedImage} className=" w-full h-full object-contain " />
      </div>
      <div className=" flex flex-row gap-2 ">
        {images?.images?.map((img) => 
          <div className=" w-14 h-14 flex items-center rounded-lg cursor-pointer overflow-clip " onClick={() => setSelectedImage(img) } >
            <img src={img} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
