import React from "react";
import styles from "/app/styles/collection/collection.module.css";
import Image from "next/image";
import Link from "next/link";

function CollectionFirstPageEaring() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Earing</h1>

      <div className={styles.gridSubCollection}>
        <div className={styles.largeItem}>
          <Image
            src="/images/collections/collection1.jpg"
            alt="Gold Bracelet"
            width={600}
            height={200}
            layout="responsive"
            objectFit="cover"
            style={{ position: "absolute", top: "-600px" }} // ปรับตำแหน่งตามต้องการ
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Gold Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className={styles.imageText}>Gold Earing</span>
        </div>
      </div>
    </div>
  );
}

export default CollectionFirstPageEaring;
