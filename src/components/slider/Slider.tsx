import React, { useEffect, useState } from "react";
import PrevButton from "../navigation/PrevButton";
import NextButton from "../navigation/NextButton";
import SliderImgs from "./SliderImgs";

type ImageSliderProps = {
  serverUrl: string;
};

const Slider: React.FC<ImageSliderProps> = ({ serverUrl }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const apiUrl: string = `${serverUrl}api/images`;

  const fetchImages = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
    }
  };

  const selectImg = (action: string) => {
    if (action == "+") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
    if (action == "-") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  useEffect(() => {
    fetchImages();
    console.log("fetching");
  }, [apiUrl]);

  if (images.length === 0) {
    return <p>Загрузка изображений...</p>;
  }

  return (
    <div>
      <div className="flex">
        <div className="absolute left-16 top-1/2 z-50">
          <PrevButton onClick={() => selectImg("-")} />
        </div>
        <div className="absolute right-[424px] top-1/2 z-50">
          <NextButton onClick={() => selectImg("+")} />
        </div>
        <SliderImgs
          serverUrl={serverUrl}
          images={images}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Slider;
