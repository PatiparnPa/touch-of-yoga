import Image from "next/image";
import Link from "next/link";
import styles from '/app/styles/homepage/Collection.module.css';

export default function Collection(){
    const collectionSlider = [
        { image: "/images/collections/collection1.jpg", name: "Bracelet", link: "/collection1" },
        { image: "/images/collections/collection2.jpg", name: "Charms", link: "/collection2" },
        { image: "/images/collections/collection3.jpg", name: "Bangle", link: "/collection3" },
        { image: "/images/collections/collection4.jpg", name: "Ring", link: "/collection4" },
        { image: "/images/collections/collection5.jpg", name: "Necklace", link: "/collection5" },
        { image: "/images/collections/collection6.jpg", name: "FOR HER", link: "/collection6" },
        { image: "/images/collections/collection7.jpg", name: "FOR HIM", link: "/collection6" },
      ];
    
    return(
        <>
        <div className={styles.productCollection}>
        <h1 className={styles.collectionTopic}>Product Collection</h1>
        <div className={styles.collectionSlider}>
          <div className={styles.sliderTrack}>
            {collectionSlider.map((collection, index) => (
              <div key={index} className={styles.collectionItem}>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={300}  // ปรับความกว้างที่ต้องการ
                  height={200}  // ปรับความสูงที่ต้องการ
                  className={styles.collectionImage}
                />
                <Link href={collection.link} className={styles.collectionName}>
                  {collection.name}
                </Link>
              </div>
            ))}
            {/* ทำให้ภาพวนซ้ำ */}
            {collectionSlider.map((collection, index) => (
              <div key={index + collectionSlider.length} className={styles.collectionItem}>
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={300}
                  height={200}
                  className={styles.collectionImage}
                />
                <Link href={collection.link} className={styles.collectionName}>
                  {collection.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    )
}