import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

import { getProduct, getProducts } from "../../src/api/products";
import Head from "next/head";
import { ProductResponse } from "types/product";
import ProductDetails from "@/products/details/product-details";
import MainLayout from "@/components/core/layout/layout";

const ProductPage: NextPage<ProductResponse> = (data: ProductResponse) => {
  return (
    <MainLayout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <ProductDetails data={data} />
    </MainLayout>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  // Fetch the list of product IDs from the external API.
  // Ensure that getProducts returns an array of product IDs or handle undefined/null cases.
  const productIds = await getProducts(0, 100);

  // Check if productIds is an array, and if not, set it to an empty array.
  const paths = Array.isArray(productIds)
    ? productIds.map((id: string | number) => ({
        params: { productId: id.toString() }, // Make sure 'id' is a string.
      }))
    : [];

  return {
    paths,
    fallback: "blocking", // You can use 'blocking', 'true', or 'false' for fallback.
  };
}

export const getStaticProps: GetStaticProps<ProductResponse> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const id = Number(params?.productId);

  const data = await getProduct(id);
  return {
    props: data, // Directly return the 'data' object as 'props'
    revalidate: 3600, // Time in seconds (e.g., 1 hour). This specifies how often the page should be regenerated. we can change it as per client requirement
  };
};
