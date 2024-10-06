import Image from "next/image";
import { useRef, useCallback } from "react";
import Link from "next/link";
import styles from '/app/styles/homepage/TribeFav.module.css';

export default function TribeFav(){
    const products = [
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 1", price: "$25" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 2", price: "$30" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 3", price: "$20" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 4", price: "$35" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 5", price: "$40" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 6", price: "$45" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 7", price: "$50" },
        { image: "/images/product1.jpg", hoverImage: "/images/product1-hover.jpg", name: "Product 8", price: "$55" },
      ];
    
      const productListRef = useRef(null);
    
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
    return(
        <div className={styles.tribeFav}>
        <div className={styles.tribeFavHeader}>
          <h1 className={styles.tribeFavTopic}>Tribe’s Favorite</h1>
          <Link href="/" className={styles.viewAll}>View all</Link>
        </div>
        <div className={styles.productList} ref={productListRef}>
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className={styles.productItem}>
              <Image
                src={product.image}
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
        {/* ปุ่มเลื่อนซ้ายและขวา */}
        <button className={styles.scrollButton} onClick={scrollLeft}>
          &lt;
        </button>
        <button className={styles.scrollButton} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    )
}