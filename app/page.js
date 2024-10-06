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

    // ตั้งเวลานับถอยหลัง
    const targetDate = new Date("2024-12-31T23:59:59Z"); // วันสิ้นปี
    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // เมื่อเวลาหมด
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown(); // อัปเดตเวลานับถอยหลังครั้งแรก
    const countdownInterval = setInterval(updateCountdown, 1000); // อัปเดตนับถอยหลังทุกวินาที

    return () => {
      clearInterval(interval); // เคลียร์ interval สำหรับการเปลี่ยนภาพ
      clearInterval(countdownInterval); // เคลียร์ interval สำหรับการนับถอยหลัง
    };
  }, [images.length]);



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
      <div className={styles.upcomingEvent}>
        <div className={styles.leftColumn}>
          <Image
            src="/images/upcoming-event.jpg" // เปลี่ยนเป็นรูปภาพที่คุณต้องการ
            width={370} // ความกว้างที่เหมาะสม
            height={370} // ความสูงที่เหมาะสม
            alt="Upcoming Event"
          />
        </div>
        <div className={styles.rightColumn}>
          <h1 className={styles.rightColumnTitle}>Upcoming Event</h1>
          <p>Our wide variety will keep you coming back for more</p>
          <button className={styles.button}>Let's find out Together</button>
          <div className={styles.countdown}>
            <div>{countdown.days} <span>Days</span></div>
            <div>{countdown.hours} <span>Hour</span></div>
            <div>{countdown.minutes} <span>Minute</span></div>
            <div>{countdown.seconds} <span>Second</span></div>
          </div>
        </div>
      </div>

      {/* Gift & Vocher */}


<Gift />
      <Collection />
      <TribeFav />
      <Perspective />
      <Testimonial />
      <SendEmail />
    </>
  );
}
