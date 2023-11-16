import { GoArrowUpRight } from "react-icons/go";
import styles from "./form.module.scss";
import Footer from "components/footer/footer";

const Form = () => {
  return (
    <>
      <div className={styles.form} id="#form">
        <div className={styles.form_block}>
          <input type="name" className={styles.input} placeholder="Имя" />
          <input type="tel" className={styles.input} placeholder="Телефон" />
          <input type="email" className={styles.input} placeholder="Почта" />
          <textarea
            className={styles.input}
            placeholder="Комментарий"
          ></textarea>
          <button className={styles.btn}>
            Отправить
            <GoArrowUpRight />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
