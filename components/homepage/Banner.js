import Image from "next/image";
import styles from '/app/styles/homepage/Banner.module.css';
import { useEffect, useState } from 'react';

export default function Banner(){
    const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [translateX, setTranslateX] = useState(0); // ใช้เพื่อเก็บตำแหน่ง X
    
      // Countdown state
      const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
      useEffect(() => {
        // เริ่มตั้งแต่ตอนที่ component ถูก mount
        const interval = setInterval(() => {
          // เปลี่ยนภาพทุก 3 วินาที
          setCurrentImageIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % images.length;
            setTranslateX(-100 * nextIndex); // ปรับ translateX ตาม index
            return nextIndex;
          });
        }, 3000); // เปลี่ยนทุก ๆ 3 วินาที
    
        // Cleanup function to clear the interval
        return () => clearInterval(interval); // เคลียร์ interval เมื่อ component ถูก unmount
      }, [images.length]); // ขึ้นอยู่กับจำนวนภาพ
    return(
        <>
        <div className={styles.container}>
        <div className={styles.slider} style={{ transform: `translateX(${translateX}%)` }}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <Image
                src={image}
                width={1000} // กำหนดความกว้างให้เต็มหน้าจอ
                height={370} // ความสูงของภาพ
                alt={`Image ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
        </>
    )
}