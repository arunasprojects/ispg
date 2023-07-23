import Products from "@/products/products";
import { Box } from "@mui/material";
import { ProductsResponse } from "types/product";

interface HomeLayoutProps {
  data: ProductsResponse;
}

const HomeLayout = ({ data }: HomeLayoutProps) => {
  return (
    <Box>
      <Products data={data} />
    </Box>
  );
};

export default HomeLayout;
