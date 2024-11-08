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
                    <Link href="/footer/special-features" className={styles.linkBold}>Special Feature</Link>
                    <Link href="/footer/intricate-details" className={styles.linkBold}>Intricate details</Link>
                    <Link href="/footer/perosnalized" className={styles.linkBold}>Personalize</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Material</Link>
                    <Link href="/footer/metal" className={styles.linkBold}>Metal</Link>
                    <Link href="/footer/gold-vermeil" className={styles.linkBold}>Gold vermeil</Link>
                    <Link href="/footer/natural-gemstones" className={styles.linkBold}>Natural gemstones</Link>
                    <Link href="/footer/harmony" className={styles.linkBold}>Thai-mined Gems</Link>
                    <Link href="/footer/a-land-of-gemstone-treasures" className={styles.linkText}>A Land of Gemstone Treasures</Link>
                    <Link href="/footer/thai-gems-why-so-special" className={styles.linkText}>Thai Gems Why So Special</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Design Concept</Link>
                    <Link href="/footer/real-design" className={styles.linkBold}>Real Design</Link>
                    <Link href="/footer/yoga-jewelry" className={styles.linkBold}>Yoga Jewelry</Link>
                    <Link href="/footer/yoga-teacher-jewelry" className={styles.linkBold}>Yoga Teacher Jewelry</Link>
                    <Link href="/footer/mental-health-jewelry" className={styles.linkBold}>Mental Health Jewelry</Link>
                    <Link href="/footer/our-design-process" className={styles.linkBold}>Our design process</Link>

                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/journey" className={styles.linkTopic}>Our Crafting Process</Link>
                    <Link href="/footer/the-journey-of-fine-jewelry" className={styles.linkBold}>The Journey of Fine Jewelry</Link>
                    <Link href="/footer/handmade" className={styles.linkBold}>Handmade</Link>
                    <Link href="/footer/direct-to-customer" className={styles.linkBold}>Direct to customer</Link>
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
                    <Link href="https://www.facebook.com/touchofyoga.jewelry/" target="_blank" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </Link>
                    <Link href="https://www.instagram.com/touchofyoga.jewelry/" target="_blank" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </Link>
                    <Link href="https://www.pinterest.com/touchofyogajewelry/" target="_blank" aria-label="Pinterest">
                        <FontAwesomeIcon icon={faPinterest} className={styles.icon} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
