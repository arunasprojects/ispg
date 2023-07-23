import React, { FC } from "react";
import Image from "next/image";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ProductResponse } from "types/product";

interface ProductDetailsProps {
  data: ProductResponse;
}

const ProductDetails: FC<ProductDetailsProps> = ({ data }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={700}
            height={475}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2} sx={{ pb: 1 }}>
            <Stack>
              <Typography variant="h4">{data.title}</Typography>
              <Typography>{data.description}</Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="h5">$ {data.price.toFixed(2)}</Typography>
              <Typography variant="h5" color="success.main">
                {data.discountPercentage} %
              </Typography>
            </Stack>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              sx={{ height: 25, width: 150 }}
            >
              {data.category.toUpperCase()}
            </Button>
            <Button
              variant="contained"
              sx={{ width: 150, backgroundColor: "warning.light" }}
            >
              Add to cart {/* not functional */}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
