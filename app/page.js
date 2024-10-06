"use client"; // ใช้ Client Component

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles/page.module.css"; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง
import { useRef, useCallback } from "react";

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

  const collectionSlider = [
    { image: "/images/collection1.jpg", name: "Collection1", link: "/collection1" },
    { image: "/images/collection2.jpg", name: "Collection2", link: "/collection2" },
    { image: "/images/collection3.jpg", name: "Collection3", link: "/collection3" },
    { image: "/images/collection4.jpg", name: "Collection4", link: "/collection4" },
    { image: "/images/collection5.jpg", name: "Collection5", link: "/collection5" },
    { image: "/images/collection6.jpg", name: "Collection6", link: "/collection6" },
  ];

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

  const [activeFilter, setActiveFilter] = useState("All"); // เก็บค่าของปุ่ม Filter ที่ถูกกด
  const articles = [
    {
      id: 1,
      tag: "Yoga",
      title: "Essential Yoga for Meditation",
      image: "/images/article1.jpg",
    },
    {
      id: 2,
      tag: "Green",
      title: "Nature's Healing Power",
      image: "/images/article1.jpg",
    },
    {
      id: 3,
      tag: "Mental",
      title: "Mindfulness Practices",
      image: "/images/article1.jpg",
    },
    {
      id: 4,
      tag: "Yoga",
      title: "Benefits of Yoga for Your Mind",
      image: "/images/article1.jpg",
    },
    {
      id: 5,
      tag: "Green",
      title: "Green Spaces and Mental Health",
      image: "/images/article1.jpg",
    },
    {
      id: 6,
      tag: "Mental",
      title: "Meditation Techniques for Beginners",
      image: "/images/article1.jpg",
    },
    // เพิ่มบทความเพิ่มเติมที่นี่
  ];
  // ฟังก์ชันสำหรับจัดการการคลิกที่ปุ่ม Filter
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // ฟังก์ชันเพื่อกรองบทความตามหมวดหมู่
  const filteredArticles = activeFilter === "All"
    ? articles
    : articles.filter(article => article.tag === activeFilter);


 // ส่วนของ Review
 const reviews = [
  {
    id: 1,
    name: "Marvin McKinney",
    message: "Lorem ipsum dolor sit amet consectetur. Bibendum mi et non tellus rutrum.",
    rating: 5,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Jessica Edwards",
    message: "Suspendisse nec lectus ut velit aliquam fermentum. Sed gravida ullamcorper.",
    rating: 5,
    image: "/images/product1.jpg",
  },
  {
    id: 3,
    name: "Benjamin Carter",
    message: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
    rating: 5,
    image: "/images/product1.jpg",
  },
  {
    id: 4,
    name: "Kristin Watson",
    message: "Nullam vehicula mi eget massa suscipit fringilla. Curabitur auctor, arcu nec.",
    rating: 5,
    image: "/images/product1.jpg",
  },
  {
    id: 5,
    name: "Madeline Young",
    message: "Etiam dignissim eros euismod, vehicula libero vel, congue felis.",
    rating: 5,
    image: "/images/product1.jpg",
  },
  {
    id: 6,
    name: "Courtney Henry",
    message: "Phasellus aliquam orci quis odio lobortis, a ultrices lorem accumsan.",
    rating: 5,
    image: "/images/product1.jpg",
  },
];

const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

const handleNextReview = () => {
  setCurrentReviewIndex((prevIndex) =>
    prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
  );
};

const handlePrevReview = () => {
  setCurrentReviewIndex((prevIndex) =>
    prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
  );
};

const handleSelectReview = (index) => {
  setCurrentReviewIndex(index);
};


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
      <div className={styles.giftVocher}>
        <div className={styles.giftLeftCol}>
          <h1 className={styles.giftTopic}>Gift & Vocher</h1>
          <p className={styles.giftParagragh}>
            Whether it's for him or her, we've got you covered! Explore our elegant selection of men's and women's jewelry, crafted from real materials that last a lifetime. From sleek cufflinks and bracelets for him to timeless necklaces and rings for her, give a gift that speaks to the heart this season.
          </p>
          <Link href={"/"}>Explore all voucher & gift</Link>
        </div>

        <div className={styles.giftRightCol}>
          {/* รูปที่ 1 สำหรับ For Him */}
          <Link href="/for-him">
            <div className={styles.imageContainer}>
              <Image
                src="/images/him.jpg" // ลิงก์ไปยังรูปภาพของคุณ
                width={300}
                height={400}
                alt="For Him"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>For Him</span>
              </div>
            </div>
          </Link>

          {/* รูปที่ 2 สำหรับ For Her */}
          <Link href="/for-her">
            <div className={styles.imageContainer}>
              <Image
                src="/images/her.jpg" // ลิงก์ไปยังรูปภาพของคุณ
                width={300}
                height={400}
                alt="For Her"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>For Her</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Product Collection */}
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

      {/* Tribe's Favorite */}
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

      {/* Perspective */}
      <div className={styles.perspective}>
        <div className={styles.perspectiveHeader}>
          <div className={styles.perspectiveFilterButton}>
            <button
              onClick={() => handleFilterClick("Yoga")}
              className={activeFilter === "Yoga" ? styles.active : ""}
            >
              Yoga
            </button>
            <button
              onClick={() => handleFilterClick("Green")}
              className={activeFilter === "Green" ? styles.active : ""}
            >
              Green
            </button>
            <button
              onClick={() => handleFilterClick("Mental")}
              className={activeFilter === "Mental" ? styles.active : ""}
            >
              Mental
            </button>
            <button
              onClick={() => handleFilterClick("All")}
              className={activeFilter === "All" ? styles.active : ""}
            >
              All
            </button>
          </div>
          <Link href="/" className={styles.viewAll}>View all</Link>
        </div>

        {/* Article List */}
        <div className={styles.articleContainer}>
          {filteredArticles.map((article) => (
            <div key={article.id} className={styles.articleItem}>
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={300}
                className={styles.articleImage}
              />
              <div className={styles.articleText}>
                <span className={styles.tag}>{article.tag}</span>
                <h3>{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>



 {/* Testimonial Section */}
 <div className={styles.testimonial}>
        <h2>What Our Customer Say</h2>
        <div className={styles.testimonialContainer}>
          {/* ปุ่มเลื่อนซ้าย */}
          <button className={styles.arrowButtonLeft} onClick={handlePrevReview}>
            &lt;
          </button>

          {/* รีวิว */}
          <div className={styles.testimonialContent}>
            <div className={styles.mainReview}>
              <div className={styles.reviewText}>
                <p>{reviews[currentReviewIndex].message}</p>
              </div>
              <div className={styles.rating}>
                {"★".repeat(reviews[currentReviewIndex].rating)}{" "}
                {"☆".repeat(5 - reviews[currentReviewIndex].rating)}
              </div>
              <div className={styles.profileImagesContainer}>
                {/* รูปโปรไฟล์ของคนก่อนหน้า (ถ้ามี) */}
                {currentReviewIndex > 0 ? (
                  <Image
                    src={reviews[currentReviewIndex - 1].image}
                    alt={reviews[currentReviewIndex - 1].name}
                    width={50}
                    height={50}
                    className={styles.smallProfileImage}
                    onClick={() => handleSelectReview(currentReviewIndex - 1)}
                  />
                ) : (
                  <div className={styles.emptyProfileImage}></div>
                )}

                {/* รูปโปรไฟล์หลัก */}
                <div className={styles.profileImageWrapper}>
                  <Image
                    src={reviews[currentReviewIndex].image}
                    alt={reviews[currentReviewIndex].name}
                    width={80}
                    height={80}
                    className={styles.reviewImage}
                  />
                  <p>{reviews[currentReviewIndex].name}</p>
                </div>

                {/* รูปโปรไฟล์ของคนถัดไป (ถ้ามี) */}
                {currentReviewIndex < reviews.length - 1 ? (
                  <Image
                    src={reviews[currentReviewIndex + 1].image}
                    alt={reviews[currentReviewIndex + 1].name}
                    width={50}
                    height={50}
                    className={styles.smallProfileImage}
                    onClick={() => handleSelectReview(currentReviewIndex + 1)}
                  />
                ) : (
                  <div className={styles.emptyProfileImage}></div>
                )}
              </div>
            </div>
          </div>

          {/* ปุ่มเลื่อนขวา */}
          <button className={styles.arrowButtonRight} onClick={handleNextReview}>
            &gt;
          </button>
        </div>
      </div>


      {/* Send Email */}
      <div className={styles.sendEmail}>
        <h1 className={styles.sendEmailTopic}>Subscribe to our emails</h1>
        <p className={styles.sendEmailParagraph}>Be the first to know about new collections and exclusive offers.</p>
        <div className={styles.emailInputContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
          />
          <button className={styles.sendButton}>Join us</button>
        </div>
      </div>
    </>
  );
}
