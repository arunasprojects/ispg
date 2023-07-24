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
        <meta name="description" content={data.description} />
      </Head>
      <ProductDetails data={data} />
    </MainLayout>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const productsData = await getProducts(0, 100);
  const productIds = productsData?.products?.map((product) => product.id);

  const paths = productIds.map((id: string | number) => ({
    params: { productId: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<ProductResponse> = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const id = Number(params?.productId);

  const data = await getProduct(id);
  return {
    props: data,
    revalidate: 60,
  };
};
