import styles from '/app/styles/homepage/Perspective.module.css';
import Image from "next/image";
import { useState} from "react";
import Link from "next/link";

export default function Perspective() {
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
    return (
        <>
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
      </>
    )
}