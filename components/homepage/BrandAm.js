import Image from "next/image";
import Link from "next/link";
import styles from '/app/styles/homepage/BrandAm.module.css';

export default function BrandAm() {
    const brandImages = Array.from({ length: 5 }, (_, i) => `/images/brandam/brand${i + 1}.jpg`); // สร้าง array ของชื่อไฟล์ภาพ

    return (
        <>
            <div className={styles.BrandAm}>
                <div className={styles.BrandAmHeader}>
                    <div className={styles.BrandAmTopic}>
                        Meet Our Brand Ambassadors
                    </div>
                    <Link href="/" className={styles.viewAll}>View all</Link>
                </div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur. Bibendum mi et non tellus rutrum. Nascetur erat mus tellus odio morbi et. Urna quis ultrices massa at 
                </p>
                <div className={styles.BrandAmPersonList}>
                    {brandImages.map((src, index) => (
                        <div key={index} className={styles.BrandAmPerson}>
                            <Image 
                                src={src} 
                                alt={`Brand Ambassador ${index + 1}`} 
                                fill // ใช้ fill แทน layout
                                className={styles.BrandAmImage} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
