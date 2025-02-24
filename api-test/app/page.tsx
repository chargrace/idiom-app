// import Image from "next/image";
import styles from "./page.module.css";
import Header from '../components/header/header'
import Container from '../components/container/container'
import Form from '../components/form/form'
import Footer from '../components/footer/footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Form />
      <Container />
      <Footer />
    </div>
  );
}
