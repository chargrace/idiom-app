'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import Header from '../components/header/header'
import Container from '../components/container/container'
import Form from '../components/form/form'
import Footer from '../components/footer/footer'
import {useState} from 'react'
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  const [data, setData] = useState([])

  const handleSearch = async (query: string) => {
    try {
      const response = await fetch(`/api/response?query=${query}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };


  return (
    <div className={styles.page}>
      <Navbar />
      <Header />
      <Form onSearch={handleSearch} />
      <Container data={data}/>
      <Footer />
    </div>
  );
}
