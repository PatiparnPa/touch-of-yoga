"use client"; // ใช้ Client Component

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles/page.module.css"; // ตรวจสอบให้แน่ใจว่าเส้นทางถูกต้อง
import SendEmail from "@/components/homepage/SendEmail";
import Testimonial from "@/components/homepage/Testimonial";
import Perspective from "@/components/homepage/Perspective";
import TribeFav from "@/components/homepage/TribeFav";
import Collection from "@/components/homepage/Collection";
import Gift from "@/components/homepage/Gift";
import Event from "@/components/homepage/Event";
import Banner from "@/components/homepage/Banner";
import BrandAm from "@/components/homepage/BrandAm";
import TribeYogi from "@/components/homepage/TribeYogi";

export default function Home() {
  return (
    <>
    <Banner />
      <div className={styles.quote}>
        Yoga jewelry, off the mat and into the world, whispers the wisdom of the practice, reminding us<br /> to breathe, find stillness, and embrace the beauty of each moment.
      </div>
      <Event />
      <Gift />
      <Collection />
      <TribeFav />
      <Perspective />
      <TribeYogi />
      <BrandAm />
      <Testimonial />
      <SendEmail />
    </>
  );
}
