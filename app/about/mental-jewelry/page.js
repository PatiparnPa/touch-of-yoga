import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function MentalJewelry() {
    return (
        <>
            <div className={styles.topic}>
                <h3>Mindful Concept</h3>
                <h2>MENTAL JEWELRY</h2>
            </div>

            <div className={styles.content}>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/about/mental-jewelry/mental-jewelry1.jpg"
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <h1>Whispers of Hope</h1>
                <p className={styles.indent}><span className={styles.boldText}>ONE IN EIGHT PEOPLE</span> around the world faces mental health challenges. These aren't just numbers; they reflect real people in our communities. Mothers, fathers, children, friends, and neighbors quietly fight their own battles every day. In fact, someone you know is likely affected. Mental health issues touch nearly every family and social group.</p>
                <div className={styles.divide}></div>

                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/mental-jewelry/mental-jewelry2.jpg"
                        width={300}
                        height={650}
                        className={styles.image}
                    />
                </div>
                <h1>Whispers of Hope</h1>
                <p className={styles.indent}>Many times, mental health challenges can be destroy their own strength for people, and we truly understand and empathize with those who have to sail through stormy waters. That is why at TouchofYoga,<span className={styles.boldText}>we strongly believe that everyone deserves support and encouragement, especially during difficult times.</span> </p>
                <p className={styles.indent}>We believe that a simple act of kindness, a listening ear, or a heart-to-heart message can make a great difference. Sometimes, all it takes is asking the question, "Are you okay?" or giving a hug out of truly meaning it. A gentle touch, a reassuring presence, or a shared silence can offer support and comfort.</p>
                
                <div className={styles.divide}></div>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/mental-jewelry/mental-jewelry3.jpg"
                        alt="Description of image"
                        width={400}
                        height={600}
                        className={styles.centerImage}
                    />
                </div>
                <p>As a brand inspired by yoga and mindfulness, we understand the power of inner strength and the importance of self— care. We want to make a difference not just in the yoga community, but in everyone's life — as we believe that mental health is a universal concern, and we are dedicated to making a positive impact on the lives of those facing mental health challenges. Compassion is not a luxury; it's a necessity. To ignore the mental health crisis is to deny the humanity within us all.</p>
                <p className={styles.indent}><span className={styles.fairBoldMediumText}>“Do you agree with us that we all have a role in supporting positive mental well-being?”</span></p>
            
                <p className={styles.indent}>Our <span className={styles.boldText}>“Mind Matters Jewelry Collection”</span> is created from this understanding. Jewelry has a magical ability to connect with us on a deeper, and emotional level. We intentionally design our collection to provide comfort and support. It serves as a symbol of care and encouragement during tough times, a touchable connection with someone, and a reminder that no one is alone.</p>

                <p className={styles.indent}>Let it be a treasured gift to someone struggling, a touchable reminder of your care and concern. If it brings a smile to their face or a glitter of hope to their eyes, our hearts shall be filled with gratitude and joy.</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        src="/images/about/mental-jewelry/mental-jewelry4.jpg"
                        alt="Description of image"
                        width={300}
                        height={400}
                        className={styles.centerImage}
                    />
                </div>
                <p className={styles.indent}>Whether it's for yourself or as a gift for someone you love, may our pieces bring comfort and inspire hope. This intention gives birth to the heart of our Mind Matters Collection.</p>
                <p className={styles.indent}>We invite you to explore our **Mind Matters Collection** and find pieces that reflect your journey. Together, we can build a culture of support and empathy that can help lift those who are struggling. Your inner thoughts matter, and we are here to stand beside you.</p>

                <div className={styles.centerAllText}>
                    <p><span  className={styles.fairBoldMediumText}>“One touch of courage, one piece of jewelry at a time.”</span><br/><span className={styles.fairBoldText}>May we create a world where everyone feels seen, heard, and supported?</span></p>
                </div>

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