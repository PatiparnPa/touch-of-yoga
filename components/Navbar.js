"use client"; // เพิ่มบรรทัดนี้

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "/app/styles/Navbar.module.css"; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง

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
          <Link href="/">
            <Image src="/images/logo.jpg" width={138} height={151} alt="logo" />
          </Link>
        </div>
        <div className={styles.icons}>
          <Image
            src="/icons/search_icon.svg"
            width={33}
            height={33}
            alt="search"
          />
          <div className={styles.currency} onClick={toggleCurrencyDropdown}>
            $ US
          </div>
          <Link href="/basket">
            <Image
              src="/icons/basket_icon.svg"
              width={60}
              height={60}
              alt="basket"
            />
          </Link>
          <div className={styles.profile}>
            <Image
              src="/icons/person_icon.svg"
              width={30}
              height={30}
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* เส้นบรรทัด */}
      <div className={styles.borderLine}></div>

      {/* Row 2 */}
      <div className={styles.secondRow}>
        <span className={styles.dropdown}>
          {/* Dropdown สำหรับ About us */}
          <span
            className={styles.dropdownContainer}
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(true)}
          >
            <Link href="/about">About us</Link>
          </span>
        </span>
        {aboutDropdown && (
          <div
            className={styles.fullDropdown}
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className={styles.fullDropdownContent}>
              <div className={styles.dropColumn}>
                <div className={styles.linkTopic}>Our Journey</div>
                <div className={styles.linkBold}>Our Brand</div>
                <Link href="/about/our-story" className={styles.linkText}>
                  Our Story
                </Link>
                <Link href="/about/our-mission" className={styles.linkText}>
                  Our Mission
                </Link>
                <Link href="/about/our-passion" className={styles.linkText}>
                  Our Passion
                </Link>
                <div className={styles.linkBold}>Our Business</div>
                <Link href="/about/our-intention" className={styles.linkText}>
                  Our Intentions
                </Link>
                <Link href="/about/our-ethical" className={styles.linkText}>
                  Our Ethical Choices
                </Link>
                <Link href="/about/our-heritage" className={styles.linkText}>
                  Our Heritage
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <div className={styles.linkTopic}>Our Philosophy</div>
                <div className={styles.linkBold}>Real Jewelry</div>
                <Link href="/about/real-jewelry" className={styles.linkText}>
                  Real Jewelry
                </Link>
                <Link href="/about/mental-jewelry" className={styles.linkText}>
                  Mental Jewelry
                </Link>
                <Link href="/about/yoga-jewelry" className={styles.linkText}>
                  Yoga Jewelry
                </Link>
                <Link href="/about/real-yoga" className={styles.linkBold}>
                  Real Yoga
                </Link>
                <Link href="/about/yoga-teacher" className={styles.linkBold}>
                  Yoga Teacher
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <div className={styles.linkTopic}>Our Team</div>
                <div className={styles.linkBold}>Our Artisans</div>
                <Link href="/about/diversity" className={styles.linkText}>
                  Diversity
                </Link>
                <Link
                  href="/about/behind-the-crafts"
                  className={styles.linkText}
                >
                  Behind the craft
                </Link>
                <div className={styles.linkBold}>Artisan Community</div>
                <Link href="/about/artisans" className={styles.linkText}>
                  Artisan's Community
                </Link>
                <Link
                  href="/about/supporting-local-talent"
                  className={styles.linkText}
                >
                  Supporting Local Talent
                </Link>
                <Link href="/about/our-founder" className={styles.linkBold}>
                  Our Founder
                </Link>
              </div>
            </div>
          </div>
        )}

        <span>|</span>
        <span className={styles.dropdownContainer}>
          <Link href="/perspective">Perspective</Link> {/* ไม่มี Dropdown */}
        </span>
        <span>|</span>
        <span className={styles.dropdownContainer}>
          <Link href="/partners">Our Partners</Link> {/* ไม่มี Dropdown */}
        </span>
        <span>|</span>
        <span className={styles.dropdownContainer}>
          <Link href="/community">Join our Community</Link>{" "}
          {/* ไม่มี Dropdown */}
        </span>
      </div>

      {/* Row 3 */}
      <div className={styles.thirdRow}>
        {/* Dropdown สำหรับ Category */}
        <span className={styles.dropdown}>
          {/* Dropdown สำหรับ About us */}
          <span
            className={styles.dropdownContainer}
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
          >
            <Link href="/category">Category</Link>
          </span>
        </span>

        {categoryDropdown && (
          <div
            className={styles.fullDropdown}
            onMouseEnter={() => setCategoryDropdown(true)}
            onMouseLeave={() => setCategoryDropdown(false)}
          >
            <div className={styles.fullDropdownContent}>
              <div className={styles.dropColumn}>
                <Link href="/about/journey" className={styles.linkTopic}>
                  Women
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Earring
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Pendant
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Charm
                </Link>
                <Link href="/about/mission" className={styles.linkText}>
                  Necklace
                </Link>
                <Link href="/about/passion" className={styles.linkText}>
                  Chain Clasp, Add on
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Ring
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Stackable
                </Link>
                <Link href="/about/mission" className={styles.linkText}>
                  Band
                </Link>
                <Link href="/about/passion" className={styles.linkText}>
                  Signet
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Bracelet & Bangle
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Selected Set items
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Mystery Subscription Box
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Top 10 Most Loved items
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $100
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $200
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $300
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/about/journey" className={styles.linkTopic}>
                  Men
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Ring
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Stackable
                </Link>
                <Link href="/about/mission" className={styles.linkText}>
                  Band
                </Link>
                <Link href="/about/mission" className={styles.linkText}>
                  Signet
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Pendant
                </Link>
                <Link href="/about/passion" className={styles.linkText}>
                  Necklace
                </Link>
                <Link href="/about/passion" className={styles.linkText}>
                  Chain Clasp, Add on
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  All Bracelet & Bangle
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Selected Set items
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Mystery Subscription Box
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Top 10 Most Loved items
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $100
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $200
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Best Selling Under $300
                </Link>
              </div>
              {/* เพิ่มลิงค์เพิ่มเติมที่นี่ */}
            </div>
          </div>
        )}

        <span>|</span>

        {/* Dropdown สำหรับ Collection */}
        <span className={styles.dropdown}>
          {/* Dropdown สำหรับ About us */}
          <span
            className={styles.dropdownContainer}
            onMouseEnter={() => setCollectionDropdown(true)}
            onMouseLeave={() => setCollectionDropdown(false)}
          >
            <Link href="/collection">Collection</Link>
          </span>
        </span>
        {collectionDropdown && (
          <div
            className={styles.fullDropdown}
            onMouseEnter={() => setCollectionDropdown(true)}
            onMouseLeave={() => setCollectionDropdown(false)}
          >
            <div className={styles.fullDropdownContent}>
              <div className={styles.dropColumn}>
                <Link href="/collection" className={styles.linkBold}>
                  Mental
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Mental Gift for Her
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Mental Gift for Him
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Personalize Mental Gift
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Asana
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Yoga Teacher
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/collection" className={styles.linkBold}>
                  Symbol of Yoga
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Protection
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Enlightened One
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/collection" className={styles.linkBold}>
                  Meditation
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Imperfect
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
                <Link href="/collection" className={styles.linkBold}>
                  Evil Eyes
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Female
                </Link>
                <Link href="/collection" className={styles.linkText}>
                  Male
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/collection" className={styles.linkBold}>
                  Chanthaburi Gems (Female)
                </Link>
              </div>
            </div>
          </div>
        )}

        <span>|</span>

        {/* Dropdown สำหรับ Gift */}
        <span className={styles.dropdown}>
          {/* Dropdown สำหรับ About us */}
          <span
            className={styles.dropdownContainer}
            onMouseEnter={() => setGiftDropdown(true)}
            onMouseLeave={() => setGiftDropdown(false)}
          >
            <Link href="/gift">Gift</Link>{" "}
          </span>
        </span>
        {giftDropdown && (
          <div
            className={styles.fullDropdown}
            onMouseEnter={() => setGiftDropdown(true)}
            onMouseLeave={() => setGiftDropdown(false)}
          >
            <div className={styles.fullDropdownContent}>
              <div className={styles.dropColumn}>
                <Link href="/about/brand" className={styles.linkBold}>
                  Gift for
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  For Him
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  For Her
                </Link>
                <Link href="/about/mission" className={styles.linkBold}>
                  Gift set
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/about/brand" className={styles.linkBold}>
                  Personalized
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Initial
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Engravable
                </Link>
                <Link href="/about/harmony" className={styles.linkText}>
                  Birth Month Flowers
                </Link>
              </div>
              <div className={styles.dropColumn}>
                <Link href="/about/brand" className={styles.linkBold}>
                  Subscription Gift Set
                </Link>
                <Link href="/about/brand" className={styles.linkBold}>
                  Gift Voucher
                </Link>
              </div>
            </div>
          </div>
        )}

        <span>|</span>

        {/* Dropdown สำหรับ Coming Soon */}
        <span
          className={styles.dropdownContainer}
          onMouseEnter={() => setComingSoonDropdown(true)}
          onMouseLeave={() => setComingSoonDropdown(false)}
        >
          <Link href="/coming-soon">Coming soon</Link>
        </span>
      </div>
    </nav>
  );
}
