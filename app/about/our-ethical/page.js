import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";


export default function OurEthical() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical1.png"
                        width={500}
                        height={450}
                        className={styles.image}
                    />
                </div>
                <div className={styles.centerAllText}>
                    <h0 className={styles.centerText}>OUR</h0><br></br>
                    <h0 className={styles.centerText}>ETHICAL</h0><br></br>
                    <h0 className={styles.centerText}>CHOICES</h0><br></br>
                </div>
                <p className={styles.indent}>When you choose a piece of precious metal jewelry from us, you are not only getting value from a beautiful piece but also supporting positively to yourself, the people behind the craft, and the world that surrounds you.</p>
                <span className={styles.fairBoldBigText}>Here's why:</span>
                <div className={styles.divide}></div>



                <div className={styles.underlineBoldTopic}>Self-Impact</div>
                <p><span className={styles.fairBoldBigText}>Unique & Sustainable:</span>You're getting a piece that's absolutely unique, crafted with love and attention to every little detail, using ethical and eco-friendly practices. This means you're investing in something that will last a lifetime, unlike those fast fashion pieces that shortly end up in landfills.</p>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical2.jpg"
                        width={500}
                        height={450}
                        className={styles.image}
                    />
                </div>
                <p><span className={styles.fairBoldBigText}>Supporting a Dream:</span> You're directly supporting a passionate individual or small team who puts heart and soul into creating art. You're not just a customer; you're part of their story
                </p>
                <p><span className={styles.fairBoldBigText}>Quality & Craftsmanship:</span> We place more value on quality than on quantity. You can expect higher standards of craftsmanship, using durable materials and attention to detail.
                </p>
                <div className={styles.divide}></div>

                <div className={styles.underlineBoldTopic}>Artisan Impact:</div>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical3.jpg"
                        width={500}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <p><span className={styles.fairBoldBigText}>Fair Labor Practices: </span>We prioritize fair wages and safe working conditions for the employees. You're supporting a company that truly values their people.</p>
                <div className={styles.divide}></div>
                <p><span className={styles.fairBoldBigText}>Community Building:</span>You are helping the local economy grow and building a community. We invest in the local areas, creating jobs and supporting other small businesses.</p>


                <div className={styles.underlineBoldTopic}>Global Impact:</div>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical4.jpg"
                        width={400}
                        height={500}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}><span className={styles.fairBoldBigText}>Ethical Sourcing:</span>We source our precious metals and gemstones responsibly, ensuring that mining practices are ethical with minimum harm to the environment.</p>

                <div className={styles.divide}></div>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/our-ethical/our-ethical5.jpg"
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <p><span className={styles.fairBoldBigText}>Stop Fast Fashion:</span>You're helping to stop the toxic effects of fast fashion which lead to damaging the environment and worker abuse, by choosing quality over quantity.</p>
                <p><span className={styles.fairBoldBigText}>Reduced Waste:</span>Investing in long-lasting pieces means creating less waste and using fewer resources. You're making a smart choice to reduce your impact on the environment.</p>
                <div className={styles.divide}></div>


            </div>
            <DefaultFooter />
        </>
    );
}
