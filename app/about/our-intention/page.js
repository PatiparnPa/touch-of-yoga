import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";


export default function OurIntensions() {
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
                    src="/jpg/our-intention/our-intention1.jpg"
                    alt="Our Heritage Page 1"
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
    );
}
