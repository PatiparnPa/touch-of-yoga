import Link from "next/link";
import styles from "../styles/about.module.css";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function About() {
  return (
      <>
        <div className={styles.container}>
            <h1 className={styles.title}>This page is use for showing product related's  Footer</h1>
        </div>
        <Footer />
      </>
  );
}