"use client"; // ใช้ Client Component

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles/page.module.css"; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง
import SendEmail from "@/components/homepage/SendEmail";
import Testimonial from "@/components/homepage/Testimonial";
import Perspective from "@/components/homepage/Perspective";
import TribeFav from "@/components/homepage/TribeFav";
import Collection from "@/components/homepage/Collection";
import Gift from "@/components/homepage/Gift";
import Event from "@/components/homepage/Event";

export default function Home() {
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

  return (
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
      <div className={styles.quote}>
        Yoga jewelry, off the mat and into the world, whispers the wisdom of the practice, reminding us<br /> to breathe, find stillness, and embrace the beauty of each moment.
      </div>

      {/* Upcoming Event Section */}
      <Event />
      <Gift />
      <Collection />
      <TribeFav />
      <Perspective />
      <Testimonial />
      <SendEmail />
    </>
  );
}
