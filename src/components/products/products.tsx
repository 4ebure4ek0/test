import Product from "components/product/product";
import styles from "./products.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { IconContext } from "react-icons";
import { BsStars } from "react-icons/bs";

const products = [
  {
    name: "Курс 1",
    desc: "Описание",
  },
  {
    name: "Курс 2",
    desc: "Описание",
  },
  {
    name: "Интенсив 1",
    desc: "Описание",
  },
  {
    name: "Курс 3",
    desc: "Описание",
  },
  {
    name: "Интенсив 2",
    desc: "Описание",
  },
];

const Products = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={3.5} spaceBetween={50}>
        {products.map((product, n) => (<SwiperSlide key={n}><Product name={product.name} desc={product.desc} /></SwiperSlide>))}
      </Swiper>
      <p className={styles.description}>
        <IconContext.Provider value={{ size: "3em", color: "#f5f5f5"}}>
            <BsStars />
        </IconContext.Provider>
        Короткие и эффективные тренировки для занятых людей. Заниматься можно в любое время и в любом месте, потребуется минимум оборудования
      </p>
    </div>
  );
}

export default Products;
