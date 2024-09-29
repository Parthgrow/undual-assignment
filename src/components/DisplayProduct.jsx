import React from "react";

function DisplayProduct({ product }) {
  return (
    <div className="border-2 border-black border-opacity-20 px-2 py-2 my-2 h-20 w-32 bg-gray-400/30 text-black rounded-md">
      <h3 className="text-sm text-center">{product.title}</h3>
    </div>
  );
}

export default DisplayProduct;
