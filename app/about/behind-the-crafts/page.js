import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/about-us-content/AboutUs.module.css';
import Image from "next/image";

export default function BehindTheCrafts() {
    return (
        <>
            <div className={styles.topic}>
                <h1>BEHIND THE CRAFTS</h1>
            </div>
            <div className={styles.content}>

                <div className={styles.nospace}>
                    <p className={styles.h01}>The Joyful Journey of an Artisan</p>
                    <p className={styles.indent}><span className={styles.boldText}>GET TO KNOW THE PEOPLE BEHIND</span> each step of the process. Let's hear from some of our talented artisans about their pride and passion in crafting their unique jewelry creations</p>
                    <div className={styles.fairCenterText}>
                        <h1>The Creative Mind: Bringing Visions to Life</h1>
                    </div>
                    <div className={styles.leftImageTextContainer}>
                        <Image
                            src="/images/about/behind-the-crafts/behind-the-crafts1.jpg"
                            width={300}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                    <p>The process starts with their creativity, turning ideas into complex designs and detailed models, giving life to the original concept. Their vision is the guiding light to all other team members in the art of creating a masterpiece.</p>
                    <div className={styles.divide}></div>

                    <h1>The Sculptor of Metal: The Goldsmith</h1>
                    <div className={styles.rightImageTextContainer}>
                        <Image
                            src="/images/about/behind-the-crafts/behind-the-crafts2.png"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <p className={styles.indent}>The raw metal is transformed into the basis of a design with raw skill and a sharp ability. Using hammers, saws, and delicate tools, they carefully shape the piece, bringing the designer's vision to a visible form.</p>
                    <p className={styles.indent}>Their careful attention to detail brings out the natural beauty of the metal. They polish and buff it carefully, making it shine brightly and transforming it from a rough piece to a stunning one.</p>

                    <h1>Science Meets Art: The Multi-Metal Plater</h1>
                    <p className={styles.indent}>They combine a unique blend of both scientific knowledge and artistic flair. With their experience in solutions for plating and electrical currents to create colorful designs with lots of depth and texture.</p>

                    <div className={styles.leftImageTextContainer}>
                        <Image
                            src="/images/about/behind-the-crafts/behind-the-crafts3.jpg"
                            width={300}
                            height={500}
                            className={styles.image}
                        />
                    </div>
                    <h1>Ms. Kesorn : The Multi-Metal Plater</h1>
                    <i>''I'm fascinated by the way different metals interact. It's like mixing paints, but with a scientific twist. Each plating solution is like a secret formula, and achieving the perfect hue requires precision and a bit of artistry. But the real joy comes when I see the plated piece come to life. The way the color plays with the light, enhances the design -that's when I know the magic has happened. When a customer appreciates the depth and vibrancy of the color, it's like an acknowledgment of the symphony of skills that went into creating it."</i>
                    <div className={styles.rightText}><i>Kesorn</i></div>

                    <div className={styles.divide}></div>

                    <h1>Our Hand-Texturing Expert</h1>
                    <p className={styles.indent}>They tell stories through their metalwork. Using special tools and techniques, they create textures in their works that speak to the soul-soft whispers, bold declarations, or nature's echoes. Each piece is a unique canvas that tells a story.</p>

                    <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/about/behind-the-crafts/behind-the-crafts4.jpg"
                        width={300}
                        height={250}
                        className={styles.image}
                    />
                </div>

                <div className={styles.divide}></div>


                </div>


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