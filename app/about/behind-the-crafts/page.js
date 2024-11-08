import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";

export default function BehindTheCrafts() {
    return (
        <>
              <div
                className={`${styles.container} flex flex-col items-center`}
                style={{
                    backgroundColor: "#FFF",
                    margin: "0 auto",
                    maxWidth: "800px", // Limit the width of the container
                    width: "100%",     // Full width within max-width constraint
                }}
            >
                {/* First Image */}
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts1.jpg"
                    alt="Behind the Crafts Page 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                {/* Second Image */}
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts2.jpg"
                    alt="Behind the Crafts Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts3.jpg"
                    alt="Behind the Crafts Page 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts4.jpg"
                    alt="Behind the Crafts Page 4"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts5.jpg"
                    alt="Behind the Crafts Page 5"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts6.jpg"
                    alt="Behind the Crafts Page 6"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/behind-the-crafts/behind-the-crafts7.jpg"
                    alt="Behind the Crafts Page 7"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
            </div>
            <DefaultFooter />
        </>
    )
}

