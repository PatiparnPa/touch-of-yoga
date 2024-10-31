import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function OurFounder() {
    return (
        <>
            <div className={styles.topic}>
                <h3>Mindful Concept</h3>
                <h2>YOGA JEWELRY</h2>
            </div>

            <div className={styles.content}>
                <h2>Yoga Inspired Jewelry</h2>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/yoga-jewelry/yoga-jewelry1.png"
                        alt="Description of image"
                        width={800}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/yoga-jewelry/yoga-jewelry2.jpg"
                        width={350}
                        height={450}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}><span className={styles.boldText}>TouchofYoga CRAFTS JEWELRY</span> that is a physical representation of your goals and values, a canvas for your personal story. More than just an accessory, each piece empowers you to express your unique journey with symbolic elements and personalized messages.</p>
                <p className={styles.indent}>Our collection reflects the philosophy that yoga is more than physical postures; it’s about finding inner strength, being mindful, and connecting with yourself. Our jewelry speaks to those who are seeking a deeper connection to themselves beyond the yoga mat.</p>
                <div className={styles.divide}></div>

                <p>Our jewelry offers endless interpretations, from the peaceful beauty of yoga to the varied mix of world cultures. Every design combines symbols, philosophies, and inspirations in a balanced way. Words, phrases, and iconic elements are all mixed up together to create pieces that are encouraging and motivate hope.</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/yoga-jewelry/yoga-jewelry3.jpg"
                        alt="Description of image"
                        width={400}
                        height={550}
                        className={styles.centerImage}
                    />
                </div>

                <p>If yoga is more than just an exercise program for you, but a path of self-discovery and inner peace, wearing TouchofYoga jewelry allows you to express your belief in a lifestyle of mindfulness and balance through fashion rather than just making a fashion statement. Our pieces are conversation starters, letting you inspire others to explore how yoga can change their lives.</p>

                <p className={styles.indent}>TouchofYoga jewelry isn't limit for yogis only. The ideas of mindfulness, self-acceptance, and inner peace are for everyone. Let our pieces serve as daily reminders of those values. We have combined Eastern and Western styles to create a collection that knows no boundaries and connects with everyone globally. When you wear TouchofYoga, you join a tribe of individuals united by a shared passion for the true core of yoga.</p>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/yoga-jewelry/yoga-jewelry4.png"
                        width={400}
                        height={500}
                        className={styles.image}
                    />
                </div>
<br></br>
                <div className={styles.fairItalicBigCenter}>
                    <p className={styles.fairBoldText}>Let our jewelry be your partner as you explore your inner world. Are you prepared to start a life-changing adventure? Check out TouchofYoga now.</p>
                </div>
                <div className={styles.divide}></div>

            </div>
            
            <DefaultFooter />
        </>
    )
}



{/*indent
                <div className={styles.divide}></div>
                <p className={styles.indent}></p>


                <div className={styles.underlineBoldTopic}>Global Impact:</div>
                <p></p>
                <p><span className={styles.fairBoldBigText}></span></p>
                <p className={styles.indent}><span className={styles.fairBoldBigText}></span></p>
                
                <p className={styles.indent}><span className={styles.boldText}></span></p>


                <div className={styles.divide}></div>


                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical2.jpg"
                        width={500}
                        height={450}
                        className={styles.image}
                    />
                </div>


                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-heritage/our-heritage4.jpg"
                        alt="Description of image"
                        width={600}
                        height={800}
                        className={styles.centerImage}
                    />
                </div>

                */}