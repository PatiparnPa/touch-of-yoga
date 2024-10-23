import Link from "next/link";
import styles from '/app/styles/DefaultFooter.module.css'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Social media icons

export default function DefaultFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLine}></div> {/* Line above footer rows */}

            <div className={styles.footerRow1}>
                <div className={styles.footColumn}>
                    <Link href="/about/่journey" className={styles.linkTopic}>Special Feature</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Changeable lock</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Value added</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Personalize</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Material</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Metal</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Gold vermeil</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Natural gemstones</Link>
                    <Link href="/about/harmony" className={styles.linkBold}>Thai-mined Gems</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Design Concept</Link>
                    <Link href="/about/brand" className={styles.linkBold}>The reasons behind</Link>
                    <Link href="/about/harmony" className={styles.linkText}>Wearable Messages</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Yoga Jewelry</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Yoga Teacher Jewelry</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Mental Health Jewelry</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Our design process</Link>

                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Crafting Process</Link>
                    <Link href="/about/brand" className={styles.linkBold}>The Journey of Fine Jewelry</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Handmade</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Direct to customer</Link>
                </div>
            </div>

            <div className={styles.footerLine}></div> {/* Line below footerRow1 */}

            {/* Footer Row 2 with one column and social media icons */}
            <div className={styles.footerRow2}>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkText}>Touch of Yoga</Link>
                    <Link href="/about/brand" className={styles.linkText}>Copyright © 2024</Link>
                </div>
                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                    <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </Link>
                    <Link href="https://pinterest.com" target="_blank" aria-label="Pinterest">
                        <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
                    </Link>
                    <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                        <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                    </Link>
                    <Link href="https://tiktok.com" target="_blank" aria-label="TikTok">
                        <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
