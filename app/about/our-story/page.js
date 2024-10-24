import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h1>OUR STORY</h1>
                <h2>Mindful Jewelry for a Meaningful Life</h2>
            </div>

            <div className={styles.content}>
                <p className={styles.indent}><span className={styles.boldText}>WELCOME TO TouchofYoga.</span>We are not only a jewelry brand; instead, we believe in transforming philosophy into metal. We are a community, glued together by one common belief which inner peace is the key to fulfillment and a life of purpose.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-story/our-story1.jpg"
                        alt="Description of image"
                        width={700}
                        height={680}
                        className={styles.centerImage}
                    />
                </div>

                <p className={styles.indent}>TouchofYoga is a testament to beauty without boundaries. Inspired by the peaceful elegance of Eastern cultures, our designs bring perfect harmony between Eastern philosophy and Western aesthetics. The symbols of peace, balance, and inner harmony are reimagined through a contemporary lens, creating pieces that resonate globally.</p>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-story/our-story2.jpg"
                        alt="Description of image"
                        width={700}
                        height={500}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>From the delicacy of the details in Eastern art to the strong lines of Western fashion, our jewelry embodies a perfect balance. Every piece celebrates diversity which connects cultures and individuals alike through the universal language of ‘jewelry’.</p>

                <div className={styles.italicText}>
                    <i>“East meets West in perfect harmony.<br></br>
                        Our jewelry is a celebration of diversity.”
                    </i>

                </div>
            </div>
            <DefaultFooter />
        </>
    );
}
