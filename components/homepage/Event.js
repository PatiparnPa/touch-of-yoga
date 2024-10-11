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
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);  // ใช้ array ว่างเพื่อล็อก useEffect ให้อัปเดตเพียงครั้งเดียว
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
          <h1 className={styles.rightColumnTitle}>Christmas Gift</h1>
          <div className={styles.subtitle}>
          <p >Give the Gift of Meaning this Christmas</p>
          <p>Share a Touch of Love and Lasting Beauty!</p>
          </div>
          <div className={styles.subtitle}>
          <p>Order by 1/12 to receive by Christmas.</p>
          </div>
          <button className={styles.button}>SHOP</button>
          {/*<div className={styles.countdown}>
            <div>{countdown.days} <span>Days</span></div>
            <div>{countdown.hours} <span>Hour</span></div>
            <div>{countdown.minutes} <span>Minute</span></div>
            <div>{countdown.seconds} <span>Second</span></div>
          </div>*/}
        </div>
      </div>
    </>
  );
}
