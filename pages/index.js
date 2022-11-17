import { useEffect } from "react";
import Header from "../components/header/Header";
import Preview from "../components/preview/Preview";
import Special from "../components/special/Special";
import Menu from "../components/menu/Menu";
import About from "../components/about/About";
import WorkTime from "../components/workTime/WorkTime";
import Review from "../components/review/Review";
import Feedback from "../components/feedback/Feedback";
import Footer from "../components/footer/Footer";
import CartModal from "../components/cart/CartModal";
import { Box } from "@mui/material";
import CartStack from "../components/cart/CartStack";
import useHandleChangeWindow from "../hook/useHandleChangeWindow";
import axios from "axios";

export default function Home({ special, categories, product, theme }) {
  const { open, handleOpen, handleClose } = useHandleChangeWindow();

  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Preview />
      <Special data={special} theme={theme} />
      <Menu categories={categories} product={product} theme={theme} />
      <About />
      <WorkTime />
      <Review />
      <Feedback />
      <Footer />
      <CartModal handleOpen={handleOpen} />
      <CartStack open={open} handleClose={handleClose} />
      <a href="login" target="_blank">
        Admin
      </a>
    </Box>
  );
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

Home.getInitialProps = async (context) => {
  const { query } = context;
  const specialProduct = [2, 4, 5, 8];

  const response = await instance.get("special", {
    params: {
      product: JSON.stringify(specialProduct),
    },
  });
  const special = await response.data;

  const categoriesResponse = await instance.get("category");
  const categories = await categoriesResponse.data;

  const categoryid = query?.categoryid || 2;
  const productResponse = await instance.get("product", {
    params: {
      categoryid,
    },
  });
  const product = await productResponse.data?.rows;

  const themeResponse = await instance.get("theme");
  const { theme } = await themeResponse.data;

  return {
    special,
    categories,
    product,
    theme,
  };
};

// export async function getServerSideProps(context) {
//     const { query } = context;
//     const specialProduct = [2, 4, 5, 8]

//     const response = await instance.get("special", {
//       params: {
//         product: JSON.stringify(specialProduct)
//       }
//     })
//     const special = await response.data;

//     const categoriesResponse = await instance.get("category")
//     const categories = await categoriesResponse.data;

//     const categoryid = query?.categoryid || 2
//     const productResponse = await instance.get("product", {
//       params: {
//         categoryid
//       }
//     })
//     const product = await productResponse.data?.rows;

//     const themeResponse = await instance.get("theme");
//     const {theme} = await themeResponse.data;

//   return {
//     props: {
//       special,
//       categories,
//       product,
//       theme
//     }
//   }
// }
