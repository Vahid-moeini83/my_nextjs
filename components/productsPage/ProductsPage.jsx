"use client";

import PageOptions from "./PageOptions";
import PageTitle from "./PageTitle";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowWidth from "@/hooks/useWindowWidth";

function ProductsPage({ products }) {
  const [gridValue, setGridValue] = useState("grid-5");
  const searchParams = useSearchParams();
  const router = useRouter();
  const windowWidth = useWindowWidth();

  function updateFilter(filters) {
    const params = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      params.set(key, value);
    });
    router.push(`?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (windowWidth < 1340 && windowWidth > 1280 && gridValue === "grid-6") {
      setGridValue("grid-5");
    }

    if (windowWidth < 1280 && windowWidth > 940 && gridValue === "grid-5") {
      setGridValue("grid-4");
    }

    if (
      windowWidth < 940 &&
      windowWidth > 768 &&
      (gridValue === "grid-4" || gridValue === "grid-5")
    ) {
      setGridValue("grid-3");
    }

    if (
      windowWidth < 768 &&
      (gridValue === "grid-3" ||
        gridValue === "grid-4" ||
        gridValue === "grid-5" ||
        gridValue === "grid-6")
    ) {
      setGridValue("grid-2");
    }
  }, [windowWidth]);

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
