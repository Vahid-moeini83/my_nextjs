"use client";

import PageOptions from "./PageOptions";
import PageTitle from "./PageTitle";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ProductsPage({ products }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [gridValue, setGridValue] = useState("grid-5");

  function updateFilter(filters) {
    const params = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      params.set(key, value);
    });
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <PageTitle />
      <PageOptions
        updateFilter={updateFilter}
        gridValue={gridValue}
        onGridChange={setGridValue}
      />
      <ProductsList products={products} gridValue={gridValue} />
    </div>
  );
}

export default ProductsPage;
