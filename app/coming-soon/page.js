import DefaultFooter from "@/components/DefaultFooter";
import styles from "../styles/about.module.css";

export default function ComingSoon() {
  return (
      <>
        <div className={styles.container}>
            <h1 className={styles.title}>This page will Coming Soon</h1>
        </div>
        <DefaultFooter />
      </>
  );
}