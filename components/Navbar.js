"use client";  // เพิ่มบรรทัดนี้

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '/app/styles/Navbar.module.css'; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

export default function Navbar() {
    const [currencyDropdown, setCurrencyDropdown] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

    // เพิ่ม state สำหรับ dropdown
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [collectionDropdown, setCollectionDropdown] = useState(false);
    const [giftDropdown, setGiftDropdown] = useState(false);
    const [comingSoonDropdown, setComingSoonDropdown] = useState(false);

    const toggleCurrencyDropdown = () => {
        setCurrencyDropdown(!currencyDropdown);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown);
    };

    return (
        <nav className={styles.navbar}>
            {/* Row 1 */}
            <div className={styles.firstRow}>
                <div className={styles.logo}>
                    <Link href="/"><Image src="/images/logo.jpg" width={138} height={151} alt="logo" /></Link>
                </div>
                <div className={styles.icons}>
                    <Image src="/icons/search_icon.svg" width={33} height={33} alt="search" />
                    <div className={styles.currency} onClick={toggleCurrencyDropdown}>
                        $ US
                    </div>
                    <Link href="/basket"><Image src="/icons/basket_icon.svg" width={60} height={60} alt="basket" /></Link>
                    <div className={styles.profile}>
                        <Image src="/icons/person_icon.svg" width={30} height={30} alt="profile" />
                    </div>
                </div>
            </div>

            {/* เส้นบรรทัด */}
            <div className={styles.borderLine}></div>

            {/* Row 2 */}
            <div className={styles.secondRow}>
                {/* Dropdown สำหรับ About us */}
                <div
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                >
                    <Link href="/about">About us</Link>
                    {aboutDropdown && (
                        <div className={styles.fullDropdown}>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Our Journey</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Brand</Link>
                                <Link href="/about/our-story" className={styles.linkText}>Our Story</Link>
                                <Link href="/about/mission" className={styles.linkText}>Our Mission</Link>
                                <Link href="/about/passion" className={styles.linkText}>Our Passion</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Business</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Our Intentions</Link>
                                <Link href="/about/mission" className={styles.linkText}>Our Ethical Choices</Link>
                                <Link href="/about/passion" className={styles.linkText}>Our Heritage</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Our Philosophy</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Real Jewelry</Link>
                                <Link href="/about/brand" className={styles.linkText}>Real Jewelry</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Mental Jewelry</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Yoga Jewelry</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Real Yoga</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Yoga Teacher</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Our Team</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Artisans</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Diversity</Link>
                                <Link href="/about/mission" className={styles.linkText}>Behind the craft</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Artisan Community</Link>
                                <Link href="/about/mission" className={styles.linkText}>Artisan's Community</Link>
                                <Link href="/about/mission" className={styles.linkText}>Supporting Local Talent</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Founder</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Sustainability</Link>
                                <Link href="/about/mission" className={styles.linkText}>Environment</Link>
                                <Link href="/about/mission" className={styles.linkText}>Giving Back to the Community</Link>
                                <Link href="/about/mission" className={styles.linkText}>Giving Back to the Society</Link>

                            </div>
                        </div>
                    )}
                </div>

                <span>|</span>

                <Link href="/perspective">Perspective</Link> {/* ไม่มี Dropdown */}

                <span>|</span>

                <Link href="/partners">Our Partners</Link> {/* ไม่มี Dropdown */}

                <span>|</span>

                <Link href="/community">Join our Community</Link> {/* ไม่มี Dropdown */}
            </div>

            {/* Row 3 */}
            <div className={styles.thirdRow}>
                {/* Dropdown สำหรับ Category */}
                <div
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setCategoryDropdown(true)}
                    onMouseLeave={() => setCategoryDropdown(false)}
                >
                    <Link href="/category">Category</Link>
                    {categoryDropdown && (
                        <div className={styles.fullDropdown}>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Women</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Earring</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Pendant</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Charm</Link>
                                <Link href="/about/mission" className={styles.linkText}>Necklace</Link>
                                <Link href="/about/passion" className={styles.linkText}>Chain Clasp, Add on</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Ring</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Stackable</Link>
                                <Link href="/about/mission" className={styles.linkText}>Band</Link>
                                <Link href="/about/passion" className={styles.linkText}>Signet</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Bracelet & Bangle</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Selected Set items</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Mystery Subscription Box</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Top 10 Most Loved items</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $100</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $200</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $300</Link>

                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Men</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Ring</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Stackable</Link>
                                <Link href="/about/mission" className={styles.linkText}>Band</Link>
                                <Link href="/about/mission" className={styles.linkText}>Signet</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Pendant</Link>
                                <Link href="/about/passion" className={styles.linkText}>Necklace</Link>
                                <Link href="/about/passion" className={styles.linkText}>Chain Clasp, Add on</Link>
                                <Link href="/about/brand" className={styles.linkBold}>All Bracelet & Bangle</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Selected Set items</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Mystery Subscription Box</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Top 10 Most Loved items</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $100</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $200</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Best Selling Under $300</Link>

                            </div>
                            {/* เพิ่มลิงค์เพิ่มเติมที่นี่ */}
                        </div>
                    )}
                </div>

                <span>|</span>

                {/* Dropdown สำหรับ Collection */}
                <div
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setCollectionDropdown(true)}
                    onMouseLeave={() => setCollectionDropdown(false)}
                >
                    <Link href="/collection">Collection</Link>
                    {collectionDropdown && (
                        <div className={styles.fullDropdown}>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Mental</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/passion" className={styles.linkText}>Mental Gift for Her</Link>
                                <Link href="/about/passion" className={styles.linkText}>Mental Gift for Him</Link>
                                <Link href="/about/passion" className={styles.linkText}>Personalize Mental Gift</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Asana</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Yoga Teacher</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                            </div>
                            <div className={"dropColumn"}>
                            <Link href="/about/brand" className={styles.linkBold}>Symbol of Yoga</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Protection</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Enlightened One</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                            </div>
                            <div className={"dropColumn"}>
                            <Link href="/about/brand" className={styles.linkBold}>Meditation</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Imperfect</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Evil Eyes</Link>
                                <Link href="/about/passion" className={styles.linkText}>Female</Link>
                                <Link href="/about/passion" className={styles.linkText}>Male</Link>
                            </div>
                            <div className={"dropColumn"}>
                            <Link href="/about/brand" className={styles.linkBold}>Chanthaburi Gems (Female)</Link>
                            </div>
                        </div>
                    )}
                </div>

                <span>|</span>

                {/* Dropdown สำหรับ Gift */}
                <div
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setGiftDropdown(true)}
                    onMouseLeave={() => setGiftDropdown(false)}
                >
                    <Link href="/gift">Gift</Link>
                    {giftDropdown && (
                        <div className={styles.fullDropdown}>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Gift for</Link>
                                <Link href="/about/harmony" className={styles.linkText}>For Him</Link>
                                <Link href="/about/harmony" className={styles.linkText}>For Her</Link>
                                <Link href="/about/mission" className={styles.linkBold}>Gift set</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Personalized</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Initial</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Engravable</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Birth Month Flowers</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Subscription Gift Set</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Gift Voucher</Link>
                            </div>
                        </div>
                    )}
                </div>

                <span>|</span>

                {/* Dropdown สำหรับ Coming Soon */}
                <div
                    className={styles.dropdownContainer}
                    onMouseEnter={() => setComingSoonDropdown(true)}
                    onMouseLeave={() => setComingSoonDropdown(false)}
                >
                    <Link href="/coming-soon">Coming soon</Link>
                </div>
            </div>
        </nav>
    );
}
