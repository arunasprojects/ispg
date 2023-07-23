import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import { ProductsResponse } from "types/product";
import Product from "./product";

interface ProductProps {
  data: ProductsResponse;
}

const Products = ({ data }: ProductProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page

  const products = data?.products;
  const totalProducts = data?.total || 0;
  const productsPerPage = 8;

  // Calculate the total number of pages based on the total products and products per page
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const onClickPagination = (page: number) => {
    router.push({
      pathname: "/",
      query: { skip: (page - 1) * productsPerPage },
    });
    setCurrentPage(page); // Update the current page when the user clicks on pagination
  };

  if (!products) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={2} sx={{ minHeight: "78vh" }}>
        {products?.map((product: any) => (
          <Grid item key={product.id} xs={3}>
            <Product
              id={product.id}
              name={product.title}
              price={product.price}
              brand={product.brand}
              description={product.description}
              image={product.images[0]}
            />
          </Grid>
        ))}
      </Grid>
      <Stack pt={2} alignItems={`flex-end`}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            page={currentPage}
            onChange={(event, page) => onClickPagination(page)}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Products;
