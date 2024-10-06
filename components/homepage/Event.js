import Image from "next/image";
import styles from '/app/styles/homepage/Event.module.css';
import { useEffect, useState } from 'react';

export default function Event() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = new Date("2024-12-31T23:59:59Z"); // วันสิ้นปี

  useEffect(() => {
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
      clearInterval(countdownInterval); // เคลียร์ interval สำหรับการนับถอยหลัง
    };
  }, [targetDate]); // Add targetDate to dependency array if needed

  return (
    <>
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
    </>
  );
}
