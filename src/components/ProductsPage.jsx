

import { useState } from "react";
import jsonData from "./../data.json";
import ProductTable from "./ProductTable";


function ProductsPage() {
  const [products] = useState(jsonData);

  return (
    <div>
      <h1>IronStore</h1>
    <ProductTable products={products}></ProductTable>
    </div>
  );
}

export default ProductsPage