"use client";

import PageOptions from "./PageOptions";
import PageTitle from "./PageTitle";
import ProductsList from "./ProductsList";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function getInitialGridValue(windowWidth) {
  if (windowWidth < 768) return "grid-2";
  if (windowWidth < 940) return "grid-3";
  if (windowWidth < 1280) return "grid-4";
  if (windowWidth < 1340) return "grid-5";
  return "grid-6";
}

function ProductsPage({ products }) {
  const windowWidth = useWindowWidth();
  const [gridValue, setGridValue] = useState(null);
  const [filterKey, setFilterKey] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();

  function updateFilter(filters) {
    const params = new URLSearchParams(searchParams);
    Object.entries(filters).forEach(([key, value]) => {
      params.set(key, value);
    });

    router.push(`?${params.toString()}`, { scroll: false });

    // Force a re-render
    setFilterKey((prev) => prev + 1);
  }

  useEffect(() => {
    if (windowWidth) setGridValue(getInitialGridValue(windowWidth));
  }, [windowWidth]);

  return (
    <div
      style={{
        opacity: gridValue ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <PageTitle />
      <PageOptions
        updateFilter={updateFilter}
        gridValue={gridValue}
        onGridChange={setGridValue}
      />
      <ProductsList
        key={`${gridValue}-${filterKey}`}
        products={products}
        gridValue={gridValue}
      />
    </div>
  );
}

export default ProductsPage;
