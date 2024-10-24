import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";


export default function OurHeritage() {
    return (
        <>
            <div className={styles.topic}>
                <h2>OUR HERITAGE</h2>
            </div>
            <div className={styles.content}>

                <p className={styles.indent}><span className={styles.fairBoldText}>TouchofYoga,</span>a brand dedicated to the practice of yoga and mindfulness. It is the proud member of the <span className={styles.arialBoldText}>defactoAsia Co., Ltd.</span> family, a company with a long history in the fine jewelry industry since 1997. </p>


                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-heritage/our-heritage1.jpg"
                        alt="Description of image"
                        width={800}
                        height={440}
                        className={styles.centerImage}
                    />
                </div>

                <p>defactoAsia has built a strong reputation within the marketplace based on honesty and integrity - an essential of trust in the jewelry world. This basic of ethical practices and customer satisfaction has served as a strong base for TouchofYoga, allowing the brand to become trusted for quality and reliability in the wellness field.</p>


                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-heritage/our-heritage2.jpg"
                        width={400}
                        height={300}
                        className={styles.image}
                    />
                </div>

                <p>Bangkok, Thailand, is a lively center of the worldwide gemstone industry and also where defactoAsia is based. defactoAsia's expertise in handmade jewelry is obviously seen in its ability to create amazing pieces with extraordinary craftsmanship. This rich tradition of creativity, quality, and attention to detail is perfectly integrated into the TouchofYoga experience.</p>
                <div className={styles.divide}></div>
                <i className={styles.italicNormal}>“We value choosing the perfect precious stones and metals when it comes to jewelry, and with equal care and precision, we curate our yoga offerings. Our commitment to providing an authentic, and life-transformative yoga practice reflects the attention to detail that applied in our handcrafted jewelry.” </i>
                <br></br>
                <br></br>
                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-heritage/our-heritage3.png"
                        alt="Description of image"
                        width={800}
                        height={440}
                        className={styles.centerImage}
                    />
                </div>

                <p>TouchofYoga offers a holistic and unique concept that combines the worlds of luxury and wellness.</p>
                <div className={styles.fairItalicBigCenter}>
                    <i>“The beauty of genuine jewelry lies not just in its sparkle, but in the story it tells - a story of ethical sourcing, skilled craftsmanship, and a commitment to sustainability.</i>
                    <i>Let us tell that story with pride, and let us build a future where authenticity is the standard, not the exception."</i>
                </div>

                <br></br>
                <p>Allow yourself to experience, through TouchofYoga, the unity among beauty, quality, and mindfulness. Our commitment to authenticity includes the whole TouchofYoga experience, not just only our jewelry</p>
                <br></br>
                <br></br>


                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/our-heritage/our-heritage4.jpg"
                        alt="Description of image"
                        width={600}
                        height={800}
                        className={styles.centerImage}
                    />
                </div>

                <div className={styles.fairCenterText}>
                    <p className={styles.fairBoldBigText}>Discover the elegant balance between luxury and wellness while you practice on a journey of self-discovery with TouchofYoga.</p>
                    </div>

            </div>
            <DefaultFooter />
        </>
    );
}
