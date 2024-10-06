import Link from "next/link";
import styles from "../styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
      <>
        <div className={styles.container}>
            <h1 className={styles.title}>เกี่ยวกับเรา</h1>
            <Image src="/images/banner.jpg" width={500} height={500} alt="bannerr"></Image>
            <p>ข้อมูลของฉัน</p>
            <Link href="/about" className={styles.btn}>ดูเกี่ยวกับฉัน</Link>
        </div>
      </>
  );
}