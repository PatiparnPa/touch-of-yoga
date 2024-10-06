import Image from "next/image";
import Link from "next/link";
import styles from '/app/styles/homepage/Gift.module.css';

export default function Gift(){
    return(
        <>
        <div className={styles.giftVocher}>
        <div className={styles.giftLeftCol}>
          <h1 className={styles.giftTopic}>Gift & Vocher</h1>
          <p className={styles.giftParagragh}>
            Whether it's for him or her, we've got you covered! Explore our elegant selection of men's and women's jewelry, crafted from real materials that last a lifetime. From sleek cufflinks and bracelets for him to timeless necklaces and rings for her, give a gift that speaks to the heart this season.
          </p>
          <Link href={"/"}>Explore all voucher & gift</Link>
        </div>

        <div className={styles.giftRightCol}>
          {/* รูปที่ 1 สำหรับ For Him */}
          <Link href="/for-him">
            <div className={styles.imageContainer}>
              <Image
                src="/images/him.jpg" // ลิงก์ไปยังรูปภาพของคุณ
                width={300}
                height={400}
                alt="For Him"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>For Him</span>
              </div>
            </div>
          </Link>

          {/* รูปที่ 2 สำหรับ For Her */}
          <Link href="/for-her">
            <div className={styles.imageContainer}>
              <Image
                src="/images/her.jpg" // ลิงก์ไปยังรูปภาพของคุณ
                width={300}
                height={400}
                alt="For Her"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>For Her</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      </>
    )
}