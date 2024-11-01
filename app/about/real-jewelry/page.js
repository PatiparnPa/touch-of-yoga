import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function MentalJewelry() {
    return (
        <>
            <div className={styles.topic}>
                <h2>MENTAL JEWELRY</h2>
                <h1>REAL JEWELRY</h1>
            </div>

            <div className={styles.content}>
                <h1>Fake Jewelry</h1>
                <p className={styles.indent}><span className={styles.boldText}>TODAY’S WORLD FEELS LIKE</span> a made-up false impression, making it hard to tell what’s real or fake. This fake reality is now part of our everyday lives, blurring the lines between truth and myth. We are regularly uncover to fake news, computer-generated images, and lots of information that makes us feel unsure and worried.</p>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/real-jewelry/real-jewelry1.png"
                        width={350}
                        height={200}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>This loss of trust goes beyond news and media. It affects even the most tangible parts of our world, like the products we buy. Jewelry, for example, many jewelry sellers overestimate the quality and value of their products. They may use non-precious metals or alloys but advertise them with misleading terms like "18K gold plated," "silver-tone," "gold-tone," or even more confusing labels like "18K gold-plated unique metal blend," "gold-finish metal," and "resin pearl." These terms can be confusing and misleading for consumers, making it difficult to define the true value and composition of a piece.</p>
                <p className={styles.indent}>This environment that creates a marketplace where trust is a rare resource, leaving consumers feeling disappoint and unsatisfied. This hesitation is fill up uncertainty surrounding the authenticity of materials, the ethical sourcing of gemstones, and the true value of a piece. Consumers struggle to make informed decisions due to the confusion caused by conflicting information and technical specifications.</p>
                <p className={styles.indent}></p>
                <div className={styles.divide}></div>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/real-jewelry/real-jewelry2.png"
                        width={300}
                        height={200}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>Moreover, the jewelry industry's fear of taking risks, such as experimenting with innovative design concepts, or investing in ethical sourcing and production methods, resulting in a boring collection of the same old designs. The primary focus on profit has compromised quality, with cheap materials and dishonest marketing becoming ordinary. Therefore, the meaning and value of jewelry have been reduced to surface-level aesthetics, excluding its ability to enrich the wearer's identity and connection to the world.</p>
                <div className={styles.divide}></div>

            </div>
            <div className={styles.topic}>
                <h2>OUR REAL JEWELRY</h2>
            </div>
            <div className={styles.content}>
                <h1>True Value</h1>
                <div className={styles.centerAllText}>
                    <i>"Real jewelry tells a story, a story of craftsmanship, heritage, and enduring value. Fake jewelry may sparkle, but it lacks the soul, the history, and the genuine beauty of the real."</i>
                </div>

                <p className={styles.indent}><span className={styles.boldText}>WE STRONGLY BELIEVE</span>that jewelry is meant to reflect deep inside, serving as a visible expression of the wearer's soul. Each individual design is directed to touch your emotions, tell stories, and become a special part of your journey. The use of high-quality materials makes this emotional connection even stronger.</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/real-jewelry/real-jewelry3.jpg"
                        alt="Description of image"
                        width={600}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>
                <p>At Touchofyoga, we are dedicated to creating jewelry that goes beyond the ordinary. Every piece has its own soul; thus, each one is crafted with extraordinary handwork and using only the finest materials. To us, this commitment to quality is about living our brand philosophy.</p>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/real-jewelry/real-jewelry4.png"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                </div>
                <p className={styles.boldText}>Our path is simple:</p>
                <div className={styles.nospace}>
                    <div className={styles.centerAllText}>
                        <i>“precious metal should be used to make something truly precious.”</i>
                    </div>

                </div>
                <div className={styles.divide}></div>

                <h1>Precious Metals, Precious Moments</h1>
                <p className={styles.indent}>We intentionally select precious metals for their enduring quality, representing the timeless value. These luxurious materials are the base of our designs, symbolizing the timeless nature of the emotions they inspire.</p>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/real-jewelry/real-jewelry5.png"
                        width={350}
                        height={300}
                        className={styles.image}
                    />
                </div>
                <p className={styles.indent}>The genuine jewelry we create is made of genuine precious metals such as gold and sterling silver that will see the test of time both in terms of durability and timeless elegance. These metals are valuable not only because they're rare and valuable in themselves but also because they have a history of being made by skilled craftspeople. Wearing real jewelry made from genuine precious, you're wearing something with a history and a lot of skill behind it.</p>


            </div>

            <DefaultFooter />
        </>
    )
}




{/*indent
                <div className={styles.centerAllText}></div>
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



