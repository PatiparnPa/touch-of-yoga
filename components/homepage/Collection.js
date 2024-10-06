import Image from "next/image";
import Link from "next/link";
import styles from '/app/styles/homepage/Collection.module.css';

export default function Collection(){
    const collectionSlider = [
        { image: "/images/collection1.jpg", name: "Collection1", link: "/collection1" },
        { image: "/images/collection2.jpg", name: "Collection2", link: "/collection2" },
        { image: "/images/collection3.jpg", name: "Collection3", link: "/collection3" },
        { image: "/images/collection4.jpg", name: "Collection4", link: "/collection4" },
        { image: "/images/collection5.jpg", name: "Collection5", link: "/collection5" },
        { image: "/images/collection6.jpg", name: "Collection6", link: "/collection6" },
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