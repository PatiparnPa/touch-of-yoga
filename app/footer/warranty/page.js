import styles from '/app/styles/footer-content/NormalFooter.module.css';
import Footer from "@/components/Footer";
import Image from "next/image";


export default function warranty() {
    return (
        <>
            <div className={styles.topic}>
                <h1>WARRANTY POLICY</h1>
            </div>
            <div className={styles.content}>
                <p className={styles.indent}>Touch of Yoga is committed to providing high-quality jewelry that meets or exceeds our customers' expectations. We stand behind our craftsmanship and the quality of the materials we use for our jewelry, these are the terms of our warranty:</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        className={styles.centerImage}
                        src="/images/footer-content/warranty/warranty1.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the warranty1"
                    />
                </div>

                <p><span className={styles.boldText}>Coverage:</span> This warranty is valid for a period of six months from the day of purchase and covers any manufacturing or craftsmanship defects. It includes, but is not limited to defects in materials, loose or lost stones, and broken or loose clasps or findings.</p>
                <p><span className={styles.boldText}>Exclusions:</span> Damage caused by accidents, using the jewelry the wrong way, improper care, modifications made by a third party, or normal wear and tear is not included in this warranty. It also does not cover loss or theft of the jewelry.</p>
                <p><span className={styles.boldText}>Repairs and Replacements:</span> If the jewelry purchased from us shows any defects under the coverage of the warranty, we will repair or replace the same item, at our discretion, free of charge. Please note that customers are responsible for shipping costs to return products to us, while we will cover the shipping cost for sending you a replacement or repaired products.</p>
                <p><span className={styles.boldText}>How to claim Warranty:</span> In order to request warranty service, please contact us at support@touchofyoga.com. Also, the customer may be asked to provide proof of purchase, such as a receipt or order confirmation, and detailed description of the problem.</p>
                <p><span className={styles.boldText}>Cancellation of Warranty:</span> We reserve the right to void this warranty if the jewelry has been subjected to improper care, unauthorized repairs or alterations, or it is found that the jewelry is used in an application for which it was not designed.</p>
                <p><span className={styles.boldText}>Transferability:</span> If you give your jewelry as a gift or sell it to someone else, the warranty can go with it. To transfer the warranty, the original purchaser must notify us at support@touchofyoga.com in writing within 30 days of the ownership transfer date, giving us the new owner's name and contact information, along with proof of the original purchase. Once the transfer is approved, the new owner will be entitled to the remaining duration of the warranty period.</p>
                <p><span className={styles.boldText}>Conditions for Transfer:</span> The original purchaser must provide proof of the original purchase. The new owner needs to follow all the terms and conditions of the original warranty.</p>
                <p><span className={styles.boldText}>Regular maintenance:</span> We recommend routine care, including cleaning and checking, to ensure the longevity of your jewelry. Please note that failure to follow our care instructions may void the warranty.</p>

                <div className={styles.centerImageContainer}>
                    <Image
                        className={styles.centerImage}
                        src="/images/footer-content/warranty/warranty2.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the warranty2"
                    />
                </div>

                <p className={styles.indent}>Touch of Yoga reserves the right to change or modify this warranty from time to time without notice. These changes will apply to items purchased after the updated warranty policy is implemented. In case you have any questions and/or concerns regarding our warranty policies, please contact our support team at support@touchofyoga.com</p>
            </div>
            <div className={styles.italicText}>
                <i>“Thank you for choosing Touch of Yoga. We appreciate your trust in our products.”</i>

            </div>
            <Footer />
        </>
    )
}