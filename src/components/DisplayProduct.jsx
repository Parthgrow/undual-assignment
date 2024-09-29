import React from "react";

function DisplayProduct({ product }) {
  return (
    <div className=" border-opacity-20  py-2 my-2 h-24 w-32 bg-gray-400/30 text-black rounded-md flex flex-col items-center">
      <h3 className="text-sm text-center">{product.title}</h3>
      <button className="my-1 border-2 rounded-sm px-2 border-black bg-black text-white hover:text-black  hover:bg-red-300 ">
        Buy
      </button>
      {/* <button>Buy</button> */}
    </div>
  );
}

export default DisplayProduct;
