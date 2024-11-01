import React from "react";
import styles from "/app/styles/collection/collection.module.css";
import Image from "next/image";
import Link from "next/link";

function CollectionFirstPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Collection</h1>

      <div className={styles.grid}>
        <div className={styles.largeItem}>
          <Image
            src="/images/collections/collection1.jpg"
            alt="Gold Bracelet"
            width={600}
            height={300}
            layout="responsive"
            objectFit="cover"
            style={{ position: "absolute", top: "-600px" }} // ปรับตำแหน่งตามต้องการ
          />
        </div>
        <div className={styles.smallItem}>
          <div className={styles.typeText}>Earing</div>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection2.jpg"
            alt="Earing"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <a className={styles.seeAllText} href="/collection/earing">
            See All
          </a>
        </div>

        <div className={styles.smallItem}>
          <div className={styles.typeText}>Pendant</div>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Gold Pendant"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Gold Pendant"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Gold Pendant"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Gold Pendant"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <a className={styles.seeAllText} href="/collection/pendant">
            See All
          </a>
        </div>

        <div className={styles.smallItem}>
          <div className={styles.typeText}>Ring</div>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection4.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection4.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection4.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection4.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <a className={styles.seeAllText} href="/collection/ring">
            See All
          </a>
        </div>

        <div className={styles.smallItem}>
          <div className={styles.typeText}>Bracelet</div>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection3.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection3.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection3.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection3.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <a className={styles.seeAllText} href="/collection/bracelet">
            See All
          </a>
        </div>

        <div className={styles.smallItem}>
          <div className={styles.typeText}>Necklace</div>
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <Image
            src="/images/collections/collection5.jpg"
            alt="Ring with Gemstone"
            width={150}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.smallItem}>
          <a className={styles.seeAllText} href="/collection/necklace">
            See All
          </a>
        </div>
      </div>
    </div>
  );
}

export default CollectionFirstPage;
