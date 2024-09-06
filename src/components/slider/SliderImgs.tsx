import React from "react";

type SliderImgsProps = {
  images: string[];
  serverUrl: string;
  currentIndex: number;
};

const SliderImgs: React.FC<SliderImgsProps> = ({
  images,
  serverUrl,
  currentIndex,
}) => {
  const getAdjacentImages = (n: number): string[] => {
    const prevIndex: number = n - 1 >= 0 ? n - 1 : images.length - 1;
    const nextIndex: number = n + 1 < images.length ? n + 1 : 0;
    return [images[prevIndex], images[n], images[nextIndex]];
  };
  const adjacentImages: string[] = getAdjacentImages(currentIndex);

  return (
    <div className="flex justify-center items-centerinline h-[88vh] max-w-[calc(100vw-360px)]">
      <div className="flex-initial h-[88vh] w-[5vw] flex mr-auto items-center justify-start">
        <img
          src={`${serverUrl}${adjacentImages[0]}`}
          className="object-none h-[100vh] object-right transform scale-[.88]"
        />
      </div>
      <div className="max-w-none w-[88vw] max-h-none h-[88vh] flex  mx-2 justify-center bg-gray-100">
        <img
          src={`${serverUrl}${adjacentImages[1]}`}
          className="max-h-[88vh] w-auto"
        />
      </div>
      <div className="flex-initial h-[88vh] w-[5vw] flex items-center justify-start  ">
        <img
          src={`${serverUrl}${adjacentImages[2]}`}
          className="object-none h-[100vh] object-left transform scale-[.88]"
        />
      </div>
    </div>
  );
};

export default SliderImgs;
