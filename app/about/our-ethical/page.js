import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";

export default function OurEthical() {
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
                    src="/jpg/our-ethical/our-ethical1.jpg"
                    alt="Our Story Page 1"
                    layout="responsive"
                    width={800}       
                    height={1200}   
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }} 
                />
                {/* Second Image */}
                <Image
                    src="/jpg/our-ethical/our-ethical2.jpg"
                    alt="Our Ethical Page 2"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
                <Image
                    src="/jpg/our-ethical/our-ethical3.jpg"
                    alt="Our Ethical Page 3"
                    layout="responsive"
                    width={800}
                    height={1200}
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginTop: "0" }} 
                />
            </div>
            
            <DefaultFooter />
        </>
    )
}


