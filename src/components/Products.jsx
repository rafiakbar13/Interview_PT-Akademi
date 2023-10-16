import React from "react";

const ProductsList = ({ products, isLoading }) => {
  return (
    <div className="py-8 w-full overflow-x-auto overflow-hidden">
      <div className="shadow rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm ">
                No
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm ">
                Product Name
              </th>
              <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm ">
                Brand
              </th>
              <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm ">
                Price
              </th>
              <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm ">
                Stock
              </th>
              <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm ">
                Category
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-100 border-t border-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product.id}>
                  <td className="w-1/4 py-3 px-4">{index + 1}</td>
                  <td className="w-1/4 py-3 px-4">{product.title}</td>
                  <td className="w-1/4 py-3 px-4">{product.brand}</td>
                  <td className="w-1/5 py-3 px-4">{product.price}</td>
                  <td className="w-1/5 py-3 px-4">{product.stock}</td>
                  <td className="w-1/3 py-3 px-4">{product.category}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
