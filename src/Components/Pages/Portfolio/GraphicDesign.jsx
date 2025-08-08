/** @format */

import { useState } from "react";
import data from "../../../Components/Pages/Portfolio/graphDesign";

const GraphicDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 dark:text-white rounded shadow-md ">
        {data.map((item) => (
          <div key={item.id}>
            <div
              className=" overflow-hidden h-[30vh] cursor-pointer"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold dark:text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] object-contain rounded-md"
          />
        </div>
      )}
    </>
  );
};

export default GraphicDesign;
