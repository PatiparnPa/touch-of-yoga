import styles from '/app/styles/footer-content/NormalFooter.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SizeGuide() {
    return (
        <>
            <div className={styles.topic}>
                <h1>FINDING YOUR RING SIZE</h1>
            </div>

            <div className={styles.content}>
                <h2>Method One: Use Your Existing Ring</h2>
                <p><span className={styles.boldText}>Select a Ring that Fits the Intended Finger:</span> Start by choosing a ring that the person already wears comfortably on the same finger where the new ring will be worn. This will ensure a perfect fit for everyday wear.</p>

                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/size-guide/size-guide1.jpg" // Update with your image path
                        alt="Description of image"
                        width={300} // Adjust width as needed
                        height={300} // Adjust height as needed
                        className={styles.image}
                    />
                    <p><span className={styles.boldText}>Measure the Internal Diameter in Millimeters:</span> Using a ruler or a caliper, measure the inner diameter of the ring you picked. Avoid being approximate, even a slight difference can make a difference in how it fits. Record the measurement in millimeters, since this is the common unit of measurement on most sizing chart</p>
                    <br></br>
                    <p><span className={styles.boldText}>Refer to the Sizing Chart to Find the Right Size:</span> Once you have the measurement, look at the sizing chart. Compare the internal diameter of the ring to the matching size on the chart. This will tell you the right size for the new ring, so it will fit perfectly.</p>
                </div>

                <div className={styles.divide}></div>

                <h2>Method Two: Measure Your Finger</h2>
                <p>You will need piece of string, a ruler, a pen.</p>
                <p><span className={styles.boldText}>Refer to the Sizing Chart to Find the Right Size:</span> Wrap a piece of string, paper, or just any non-elastic strip loosely around the base of your finger where you want to wear the ring. It should be tight enough to stay in place but loose enough to be comfortable.</p>
                <p><span className={styles.boldText}>Mark the Overlapping Point with a Pen:</span> Once the string or paper is wrapped around your finger, use a pen or marker to mark the exact point where the two ends of the string meet. This will show you the circumference of your finger.</p>


                <div className={styles.rightImageTextContainer}>
                    <Image
                        src="/images/footer-content/size-guide/size-guide2.jpg" // Update with your image path
                        alt="Description of image"
                        width={300} // Adjust width as needed
                        height={200} // Adjust height as needed
                        className={styles.image}
                    />
                    <p><span className={styles.boldText}>Measure the Length of the String or Paper with a Ruler:</span> The other method is to lay the paper or string on a surface and position the ruler to touch the starting point and the marked point, and write down the measurement in millimeters. To find the diameter of the ring, divide this measurement by 3.14 (Pi). Here, the circumference gets converted into the diameter of the ring, which is considered standard for measuring ring sizes.</p>
                </div>



                <div className={styles.divide}></div>


                <p className={styles.nospace}><span className={styles.boldText}>Compare the Diameter with a Ring Size Chart:</span> Use the diameter measurement you calculated to find the closest matching size on a ring size chart. This will give you the most accurate size for your ring to fit comfortably.</p>
                <Image
                    src="/images/footer-content/size-guide/size-guide3.jpg" // Update with your image path
                    alt="Description of image"
                    width={1000} // Adjust width as needed
                    height={200} // Adjust height as needed
                    className={styles.image}
                />

                <div className={styles.bigspace}></div>

                <h2>How to Secretly Find the Perfect Ring Size for your love one.</h2>
                <div className={styles.leftImageTextContainer}>
                    <Image
                        src="/images/footer-content/size-guide/size-guide4.jpg" // Update with your image path
                        alt="Description of image"
                        width={500} // Adjust width as needed
                        height={250} // Adjust height as needed
                        className={styles.image}
                    />
                    <p>Since we are dedicated to designing pieces specifically for gifting your loved ones, including especially our<span className={styles.boldText}> "Encouragement Collection,"</span> which you may wish to give to those you care about and wish to inspire, here are some tips on finding out the ring size of the person you want to surprise. These tips will help you find the perfect size discreetly, ensuring a thoughtful and well-fitting gift without giving away your secret.</p></div>

                <div className={styles.divide}></div>

                <div className={styles.indentContent}>
                    <h2>Borrow a Ring They Already Own</h2>
                    <ul className={styles.discList}>
                        <li><span className={styles.boldText}>Use a Ring They Wear on the Same Finger:</span> You could always borrow one of their rings that they already wear on the finger you aim to buy. This is the most accurate way to determine their size.</li>
                        <li><span className={styles.boldText}>Trace or Measure:</span> If you don't have a chance to take the ring to a jeweler, draw around the inside of the ring on a piece of paper or measure the diameter with a ruler in millimeters.</li>
                    </ul>
                </div>

                <div className={styles.indentContent}>
                    <h2>Guess Based on Common Sizes</h2>
                    <ul className={styles.discList}>
                        <li><span className={styles.boldText}>Average Ring Sizes:</span> For women, the average ring size is 6-7 (US); for men, it's 9-10 (US). If you're unsure, choose a size within this range and make sure the ring is resizable.</li>
                        <li><span className={styles.boldText}>Consider Their Build:</span> Smaller or more petite persons may have smaller ring sizes, while those with larger hands may need a bigger size.</li>
                    </ul>
                </div>

                <div className={styles.indentContent}>
                    <h2>USEFUL TIPS</h2>
                    <ul className={styles.circleList}>
                        <li>If the ring band is wider that 3.5 mm, go for the bigger size. If the band is smaller than 3.5 mm, then choose the smaller ring size. </li>
                        <li>If your ring size falls between two sizes, we suggest going one size up rather than going a size down. For some people, hands tend to swell a bit during the day, so sizing up ensures that the ring fits comfortably on your finger.</li>
                        <li>If your finger bone is larger than the base of your finger, measure both areas and choose a size that falls between the two.</li>
                        <li>Measure your ring size at the end of the day when your fingers are warm, as finger size changes throughout the day and with the weather. Fingers are smaller in the morning and in cold weather. Also, remember that the fingers on the hand you use most are typically larger.</li>
                    </ul>
                </div>

            </div>





            <Footer />
        </>
    );
}
