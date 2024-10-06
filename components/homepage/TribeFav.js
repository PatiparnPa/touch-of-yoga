import Image from "next/image";
import { useRef, useCallback, useState } from "react";
import Link from "next/link";
import styles from '/app/styles/homepage/TribeFav.module.css';

export default function TribeFav() {
    const products = [
        { image: "/images/products/product1.jpg", hoverImage: "/images/products/product1-hover.jpg", name: "Y-0232R-18KYG-S", price: "$124" },
        { image: "/images/products/product2.jpg", hoverImage: "/images/products/product2-hover.jpg", name: "Y-0278R-S-18KYG", price: "$274" },
        { image: "/images/products/product3.jpg", hoverImage: "/images/products/product3-hover.jpg", name: "Y-0327R-FBL-18KYG", price: "$231" },
        { image: "/images/products/product4.jpg", hoverImage: "/images/products/product4-hover.jpg", name: "Y-0338R-RH-18KYG", price: "$159" },
        { image: "/images/products/product5.jpg", hoverImage: "/images/products/product5-hover.jpg", name: "Y-0350R-S-18KYG", price: "$92" },
        { image: "/images/products/product6.jpg", hoverImage: "/images/products/product6-hover.jpg", name: "Y-0361R-S-18KYG", price: "$179" },
        { image: "/images/products/product7.jpg", hoverImage: "/images/products/product7-hover.jpg", name: "Y-0403R-14KYG-23KYG", price: "$143" },
        { image: "/images/products/product8.jpg", hoverImage: "/images/products/product8-hover.jpg", name: "Y-0911R-18KYG", price: "$120" },
        { image: "/images/products/product9.jpg", hoverImage: "/images/products/product9-hover.jpg", name: "Y-0915R-RH", price: "$78" },
        { image: "/images/products/product10.jpg", hoverImage: "/images/products/product10-hover.jpg", name: "Y-1381R-BLS-18KYG", price: "$230" },
    ];

    const productListRef = useRef(null);
    const [hoveredProductIndex, setHoveredProductIndex] = useState(null); // สร้าง state สำหรับติดตามผลิตภัณฑ์ที่ hover

    const scrollLeft = useCallback(() => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    }, []);

    const scrollRight = useCallback(() => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    }, []);

    return (
        <div className={styles.tribeFav}>
            <div className={styles.tribeFavHeader}>
                <h1 className={styles.tribeFavTopic}>Tribe’s Favorite</h1>
                <Link href="/" className={styles.viewAll}>View all</Link>
            </div>

            <div className={styles.productListContainer}>
                <div className={styles.scrollButtons}>
                    <button className={styles.scrollButton} onClick={scrollLeft}>
                        &lt;
                    </button>
                    <button className={styles.scrollButton} onClick={scrollRight}>
                        &gt;
                    </button>
                </div>
                <div className={styles.productList} ref={productListRef}>
                    {products.slice(0, 10).map((product, index) => (
                        <div
                            key={index}
                            className={styles.productItem}
                            onMouseEnter={() => setHoveredProductIndex(index)} // ตั้งค่าตัวแปรเมื่อ hover
                            onMouseLeave={() => setHoveredProductIndex(null)} // รีเซ็ตตัวแปรเมื่อออกจาก hover
                        >
                            <Image
                                src={hoveredProductIndex === index ? product.hoverImage : product.image} // เปลี่ยนภาพตามสถานะ
                                alt={product.name}
                                width={300}  // ปรับขนาดตามต้องการ
                                height={300} // ปรับขนาดตามต้องการ
                                className={styles.productImage}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
