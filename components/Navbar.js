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
                                <Link href="/about/harmony" className={styles.linkText}>Harmony</Link>
                                <Link href="/about/mission" className={styles.linkText}>Our Mission</Link>
                                <Link href="/about/passion" className={styles.linkText}>Passion Crafted</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Our Philosophy</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Real Jewelry</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Shiny Deception</Link>
                                <Link href="/about/mission" className={styles.linkText}>True Value</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Mindful Concept</Link>
                                <Link href="/about/passion" className={styles.linkText}>Yoga Inspired</Link>
                                <Link href="/about/passion" className={styles.linkText}>Whispers of Hope</Link>
                                <Link href="/about/passion" className={styles.linkText}>Our Legacy</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Our Team</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Diversity</Link>
                                <Link href="/about/mission" className={styles.linkText}>Behind the craft</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Skillful Partner</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Our Founder</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Sustainability</Link>
                                <Link href="/about/mission" className={styles.linkText}>Environment</Link>
                                <Link href="/about/mission" className={styles.linkText}>Giving Back to the community</Link>
                                <Link href="/about/mission" className={styles.linkText}>Giving Back to the society</Link>

                            </div>
                            {/* เพิ่มลิงค์เพิ่มเติมที่นี่ */}
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
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Promotion</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/journey" className={styles.linkTopic}>Best Selling</Link>
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
                                <Link href="/about/brand" className={styles.linkBold}>Mental (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Mental (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Asana (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Asana (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Yoga Teacher (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Yoga Teacher (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Symbol of Yoga (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Symbol of Yoga (Male)</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Enlightened One (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Enlightened One (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Amor Fati (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Amor Fati (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Evil Eyes (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Evil Eyes (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Protection (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Protection (Male)</Link>
                            </div>
                            <div className={"dropColumn"}>
                            <Link href="/about/brand" className={styles.linkBold}>Personalized (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Personalized (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Meditation (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Meditation (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Imperfect (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Imperfect (Male)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Hug & Kiss (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Hug & Kiss (Male)</Link>
                            </div>
                            <div className={"dropColumn"}>
                            <Link href="/about/brand" className={styles.linkBold}>Chanthaburi Gems (Female)</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Birth Mouth Flowers (Male)</Link>
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
                                <Link href="/about/brand" className={styles.linkBold}>Gift for her</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $100)</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $200)</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $300)</Link>
                                <Link href="/about/mission" className={styles.linkText}>Gift set</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Personalized for her</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Her initial</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Astrological Birth FLower</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Gift for him</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $100)</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $200)</Link>
                                <Link href="/about/harmony" className={styles.linkText}>Touching Gift (under $300)</Link>
                                <Link href="/about/mission" className={styles.linkText}>Gift set</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Personalized for him</Link>
                                <Link href="/about/harmony" className={styles.linkText}>His initial</Link>
                            </div>
                            <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Gift Voucher</Link>
                                <Link href="/about/brand" className={styles.linkBold}>Mistery Subscription Box</Link>
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
                    {comingSoonDropdown && (
                        <div className={styles.fullDropdown}>
                         <div className={"dropColumn"}>
                                <Link href="/about/brand" className={styles.linkBold}>Collaboration</Link>
                                <Link href="/about/brand" className={styles.linkText}>Special Design</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
