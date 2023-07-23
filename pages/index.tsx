import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { ProductsResponse } from "../types/product";
import { ParsedUrlQuery } from "querystring";
import MainLayout from "@/components/core/layout/layout";
import HomeLayout from "@/components/home/layout";
import { getProducts } from "@/api/products";

export interface HomeProps {
  data: ProductsResponse;
}

const Home: NextPage<HomeProps> = ({ data }: HomeProps) => {
  return (
    <MainLayout>
      <HomeLayout data={data} />
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<{
  data: ProductsResponse;
}> = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const { query } = context;
  const limit = Number(query.limit) || 8;
  const skip = Number(query.skip) || 0;

  const data = await getProducts(skip, limit);

  return {
    props: { data },
  };
};
