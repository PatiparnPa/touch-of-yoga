import Link from "next/link";
import styles from '/app/styles/Footer.module.css'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Social media icons

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLine}></div> {/* Line above footer rows */}
            
            <div className={styles.footerRow1}>
                <div className={styles.footColumn}>
                    <Link href="/footer/size-guide" className={styles.linkBold}>Size Guide</Link>
                    <Link href="/footer/jewelry-care" className={styles.linkBold}>Jewelry Care</Link>
                    <Link href="/footer/warranty" className={styles.linkBold}>Warranty</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Need to know</Link>
                    <Link href="/footer/fake-jewelry" className={styles.linkText}>Spot Fake Jewelry</Link>
                    <Link href="/footer/handmade-jewelry" className={styles.linkText}>Handmade Jewelry</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Contact Us</Link>
                    <Link href="/footer/faqs" className={styles.linkBold}>FAQ</Link>
                    <Link href="/footer/privacy-policy" className={styles.linkBold}>Privacy Policy</Link>
                    <Link href="/footer/terms-of-service" className={styles.linkBold}>Terms & Conditions</Link>
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
