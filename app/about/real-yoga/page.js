import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";

export default function RealYoga() {
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
                    src="/jpg/real-yoga/real-yoga1.jpg"
                    alt="Real Yoga Page 1"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                {/* Second Image */}
                <Image
                    src="/jpg/real-yoga/real-yoga2.jpg"
                    alt="Real Yoga Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }}
                />
                <Image
                    src="/jpg/real-yoga/real-yoga3.jpg"
                    alt="Real Yoga Page 3"
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