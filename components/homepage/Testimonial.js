import styles from '/app/styles/homepage/Testimonial.module.css';
import { useState} from "react";
import Image from "next/image";

export default function Testimonial(){
    //////////////// ส่วนของ Review
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
      name: "(Cameron Williamson)",
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
  
    return(
        <>
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
        </>
    )
}