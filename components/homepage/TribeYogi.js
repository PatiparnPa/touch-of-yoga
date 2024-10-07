import Image from "next/image";
import Link from "next/link";
import styles from '/app/styles/homepage/TribeYogi.module.css';

export default function TribeYogi() {
    const profileData = [
        { image: "/images/yogis/yogi1.jpg", name: "John Doe", location: "New York, USA" },
        { image: "/images/yogis/yogi2.jpg", name: "Jane Smith", location: "London, UK" },
        { image: "/images/yogis/yogi3.jpg", name: "Carlos Gomez", location: "Madrid, Spain" },
        { image: "/images/yogis/yogi4.jpg", name: "Liu Wei", location: "Beijing, China" },
        { image: "/images/yogis/yogi5.jpg", name: "Aisha Khan", location: "Karachi, Pakistan" },
        { image: "/images/yogis/yogi6.jpg", name: "Fatima Ali", location: "Cairo, Egypt" },
    ];

    return (
        <>
            <div className={styles.TribeYogi}>
                <div className={styles.TribeYogiHeader}>
                    <div className={styles.TribeYogiTopic}>
                        Tribe of Yogi
                    </div>
                    <Link href="/" className={styles.viewAll}>View all</Link>
                </div>
                <div className={styles.imageSlider}>
                    <div className={styles.sliderTrack}>
                        {profileData.map((profile, index) => (
                            <div key={index} className={styles.imageSlide}>
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    width={200}  // ปรับความกว้างที่ต้องการ
                                    height={200}  // ปรับความสูงที่ต้องการ
                                    className={styles.profileImage}
                                />
                                <div className={styles.profileDetails}>
                                    <div className={styles.profileName}>{profile.name}</div>
                                    <div className={styles.profileLocation}>{profile.location}</div>
                                </div>
                            </div>
                        ))}
                        {/* ทำให้ภาพวนซ้ำ */}
                        {profileData.map((profile, index) => (
                            <div key={index + profileData.length} className={styles.imageSlide}>
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    width={200}
                                    height={200}
                                    className={styles.profileImage}
                                />
                                <div className={styles.profileDetails}>
                                    <div className={styles.profileName}>{profile.name}</div>
                                    <div className={styles.profileLocation}>{profile.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.imageSlider}>
                    <div className={styles.sliderTrack}>
                        {profileData.map((profile, index) => (
                            <div key={index} className={styles.imageSlide}>
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    width={200}  // ปรับความกว้างที่ต้องการ
                                    height={200}  // ปรับความสูงที่ต้องการ
                                    className={styles.profileImage}
                                />
                                <div className={styles.profileDetails}>
                                    <div className={styles.profileName}>{profile.name}</div>
                                    <div className={styles.profileLocation}>{profile.location}</div>
                                </div>
                            </div>
                        ))}
                        {/* ทำให้ภาพวนซ้ำ */}
                        {profileData.map((profile, index) => (
                            <div key={index + profileData.length} className={styles.imageSlide}>
                                <Image
                                    src={profile.image}
                                    alt={profile.name}
                                    width={200}
                                    height={200}
                                    className={styles.profileImage}
                                />
                                <div className={styles.profileDetails}>
                                    <div className={styles.profileName}>{profile.name}</div>
                                    <div className={styles.profileLocation}>{profile.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
