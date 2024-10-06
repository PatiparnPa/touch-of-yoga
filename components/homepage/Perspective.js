import styles from '/app/styles/homepage/Perspective.module.css';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Perspective() {
    const [activeFilter, setActiveFilter] = useState("All");

    const articles = [
      { id: 1, tag: "Yoga", title: "Essential Yoga for Meditation", image: "/images/articles/article1.jpg" },
      { id: 2, tag: "Yoga", title: "Benefits of Yoga for Your Mind", image: "/images/articles/article2.jpg" },
      { id: 3, tag: "Yoga", title: "Advanced Yoga Poses", image: "/images/articles/article3.jpg" },
      { id: 4, tag: "Green", title: "Nature's Healing Power", image: "/images/articles/article4.jpg" },
      { id: 5, tag: "Green", title: "Green Spaces and Mental Health", image: "/images/articles/article5.jpg" },
    ];

    const handleFilterClick = (filter) => {
      setActiveFilter(filter);
    };

    // ฟิลเตอร์บทความตามหมวดหมู่ที่เลือก
    const filteredArticles = activeFilter === "All"
      ? articles
      : articles.filter(article => article.tag === activeFilter);

    // ถ้าในหมวดหมู่มีบทความไม่ครบ 5 บทความ เราจะเพิ่ม "Coming Soon" เพื่อให้ครบ 5
    while (filteredArticles.length < 5) {
        filteredArticles.push({
          id: `coming-soon-${filteredArticles.length + 1}`,
          tag: activeFilter,
          title: "Coming Soon",
          image: "/images/articles/coming-soon.png", // อัปเดตเป็นลิงก์ที่คุณต้องการ
        });
    }

    return (
        <div className={styles.perspective}>
            <div className={styles.perspectiveHeader}>
                <div className={styles.perspectiveFilterButton}>
                    <button onClick={() => handleFilterClick("Yoga")} className={activeFilter === "Yoga" ? styles.active : ""}>Yoga</button>
                    <button onClick={() => handleFilterClick("Green")} className={activeFilter === "Green" ? styles.active : ""}>Green</button>
                    <button onClick={() => handleFilterClick("Mental")} className={activeFilter === "Mental" ? styles.active : ""}>Mental</button>
                </div>
                <Link href="/" className={styles.viewAll}>View all</Link>
            </div>

            {/* Article List */}
            <div className={styles.articleContainer}>
                {/* คอลัมน์ 1 */}
                <div className={styles.column}>
                    {filteredArticles[0] && (
                      <div className={styles.articleItem}>
                          <Image
                              src={filteredArticles[0].image}
                              alt={filteredArticles[0].title}
                              width={300}
                              height={300}
                              className={styles.articleImage}
                          />
                          <div className={styles.articleText}>
                              <span className={styles.tag}>{filteredArticles[0].tag}</span>
                              <h3 className={styles.title}>{filteredArticles[0].title}</h3>
                          </div>
                      </div>
                    )}
                    {filteredArticles[1] && (
                      <div className={styles.articleItem}>
                          <Image
                              src={filteredArticles[1].image}
                              alt={filteredArticles[1].title}
                              width={300}
                              height={300}
                              className={styles.articleImage}
                          />
                          <div className={styles.articleText}>
                              <span className={styles.tag}>{filteredArticles[1].tag}</span>
                              <h3 className={styles.title}>{filteredArticles[1].title}</h3>
                          </div>
                      </div>
                    )}
                </div>

                {/* คอลัมน์ 2 (บทความยาว) */}
                <div className={styles.columnLarge}>
                    {filteredArticles[2] && (
                      <div className={styles.articleItem}>
                          <Image
                              src={filteredArticles[2].image}
                              alt={filteredArticles[2].title}
                              width={300}
                              height={600} // ปรับให้ยาวขึ้น
                              className={styles.articleImage}
                          />
                          <div className={styles.articleText}>
                              <span className={styles.tag}>{filteredArticles[2].tag}</span>
                              <h3 className={styles.title}>{filteredArticles[2].title}</h3>
                          </div>
                      </div>
                    )}
                </div>

                {/* คอลัมน์ 3 */}
                <div className={styles.column}>
                    {filteredArticles[3] && (
                      <div className={styles.articleItem}>
                          <Image
                              src={filteredArticles[3].image}
                              alt={filteredArticles[3].title}
                              width={300}
                              height={300}
                              className={styles.articleImage}
                          />
                          <div className={styles.articleText}>
                              <span className={styles.tag}>{filteredArticles[3].tag}</span>
                              <h3 className={styles.title}>{filteredArticles[3].title}</h3>
                          </div>
                      </div>
                    )}
                    {filteredArticles[4] && (
                      <div className={styles.articleItem}>
                          <Image
                              src={filteredArticles[4].image}
                              alt={filteredArticles[4].title}
                              width={300}
                              height={300}
                              className={styles.articleImage}
                          />
                          <div className={styles.articleText}>
                              <span className={styles.tag}>{filteredArticles[4].tag}</span>
                              <h3 className={styles.title}>{filteredArticles[4].title}</h3>
                          </div>
                      </div>
                    )}
                </div>
            </div>
        </div>
    );
}
