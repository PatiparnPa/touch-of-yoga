import Image from 'next/image';
import styles from '/app/styles/collection/collection.module.css';

export default function Collection() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Collection</h1>

            {/* Row ที่มีรูปใหญ่ 1 รูปและรูปเล็ก 3 รูป */}
            <div className={styles.row}>
                <div className={styles.largeItem}>
                    <Image
                        src="/images/collections/collection1.jpg"
                        alt="Gold Bracelet"
                        width={600}
                        height={400}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.square}>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection3.jpg"
                            alt="Ring with Gemstone"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection5.jpg"
                            alt="Gold Earrings"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div className={styles.square}>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection4.jpg"
                            alt="Ring with Gemstone"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection3.jpg"
                            alt="Gold Earrings"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className={styles.square}>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection3.jpg"
                            alt="Ring with Gemstone"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.smallItem}>
                        <Image
                            src="/images/collections/collection5.jpg"
                            alt="Gold Earrings"
                            width={150}
                            height={400}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>

            {/* Row ที่มี 4 รูปเต็มพื้นที่ */}
            <div className={styles.grid}>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Bracelet"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection6.jpg"
                        alt="Necklace"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Ring"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection1.jpg"
                        alt="Earrings"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            {/* Row ที่มี 4 รูปเต็มพื้นที่ */}
            <div className={styles.grid}>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Bracelet"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection6.jpg"
                        alt="Necklace"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Ring"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection1.jpg"
                        alt="Earrings"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            {/* Row ที่มี 4 รูปเต็มพื้นที่ */}
            <div className={styles.grid}>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Bracelet"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection6.jpg"
                        alt="Necklace"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Ring"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection1.jpg"
                        alt="Earrings"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            {/* Row ที่มี 4 รูปเต็มพื้นที่ */}
            <div className={styles.grid}>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Bracelet"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection6.jpg"
                        alt="Necklace"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection5.jpg"
                        alt="Ring"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
                <div className={styles.item}>
                    <Image
                        src="/images/collections/collection1.jpg"
                        alt="Earrings"
                        width={300}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>

            {/* Row ที่มีรูปเล็ก 4 รูปด้านขวา */}
           
        </div>
    );
}
