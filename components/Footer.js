import Link from "next/link";
import styles from '/app/styles/Footer.module.css'; // Ensure the path is correct

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLine}></div> {/* Line above footer rows */}
            
            <div className={styles.footerRow1}>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Size Guide</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Jewelry Care</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Service</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Warranty</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Stocklist</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Press</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Collaboration</Link>
                    <Link href="/about/harmony" className={styles.linkText}>Content</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Customize (coming soon)</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Sustainability</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Need to know</Link>
                    <Link href="/about/harmony" className={styles.linkText}>Fake Jewelry</Link>
                    <Link href="/about/harmony" className={styles.linkText}>Spot Fake Jewelry</Link>
                    <Link href="/about/harmony" className={styles.linkText}>Greenwashing</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Join our community</Link>
                </div>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkBold}>Contact Us</Link>
                    <Link href="/about/brand" className={styles.linkBold}>FAQ</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Privacy Policy</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Terms & Conditions</Link>
                    <Link href="/about/brand" className={styles.linkBold}>Shipping & Return</Link>
                </div>
            </div>

            <div className={styles.footerLine}></div> {/* Line below footerRow1 */}

            {/* Footer Row 2 with one column */}
            <div className={styles.footerRow2}>
                <div className={styles.footColumn}>
                    <Link href="/about/brand" className={styles.linkText}>Touch of Yoga</Link>
                    <Link href="/about/brand" className={styles.linkText}>Copyright © 2024</Link>
                </div>
            </div>
        </footer>
    )
}
