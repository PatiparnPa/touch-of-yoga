import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function YogaJewelry() {
    return (
        <>
            <div className={styles.topic}>
                <div className={styles.H3}>Our Philosophy</div>
                <h2>YOGA TEACHER</h2>
            </div>
            <div className={styles.content}>
            <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/yoga-teacher/yoga-teacher1.jpg"
                        alt="Description of image"
                        width={700}
                        height={500}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>At Touch of Yoga, we believe that the heart of yoga lies in the hands of a dedicated and knowledgeable teacher. Our commitment to authentic yoga practice is rooted in our deep respect for those who have dedicated their lives to sharing this ancient wisdom. We value true yoga teachers for their ability to guide students on a profound journey of self-discovery, to preserve the integrity of yoga traditions, and to inspire a global community of mindful individuals.</p>
                <p className={styles.indent}>Real yoga teachers are the guardians of this ancient tradition. They are the ones who can discern between genuine yoga practices and the countless dilutions that have emerged over the years. These dedicated individuals possess a deep understanding of yoga philosophy, anatomy, and methodology, enabling them to provide safe, effective, and transformative instruction.</p>
                <p className={styles.indent}>Beyond the physical practice, real yoga teachers offer invaluable support and guidance on the mental, emotional, and spiritual aspects of yoga. They create a nurturing environment where students can explore their inner world, build resilience, and cultivate compassion.
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/yoga-teacher/yoga-teacher2.jpg"
                        width={300}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>By promoting the true spirit of yoga, true yoga teachers contribute to the well-being of individuals and communities in a world dealing with stress, anxiety, and loneliness. They inspire us to live more consciously and mindfully, be more aware of ourselves and the world around us</p></p>
                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/yoga-teacher/yoga-teacher3.jpg"
                        width={400}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>At TouchofYoga, we're committed to supporting real yoga teachers and keeping the authentic spirit of yoga. By honoring the tradition and empowering dedicated teachers, we believe we can create a healthier, happier, and more compassionate world.</p>
                <div className={styles.divide}></div>

<div className={styles.centerText}>
    <p className={styles.fairMediumText}>Let's join together to honor the incredible work of real yoga<br></br>
    teachers and create a future where yoga is practiced authentically.</p>
</div>

            </div>


            <DefaultFooter />
        </>
    )
}


