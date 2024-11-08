import DefaultFooter from '@/components/DefaultFooter';
import styles from '/app/styles/jpg.module.css';
import Image from "next/image";

export default function OurPassion() {
    return (
        <>
              <div
                className={`${styles.container} flex flex-col items-center`}
                style={{
                    backgroundColor: "#FFF",
                    margin: "0 auto",
                    maxWidth: "800px", 
                    width: "100%",     
                }}
            >
                {/* First Image */}
                <Image
                    src="/jpg/our-passion/our-passion1.jpg"
                    alt="Our Passion Page 1"
                    layout="responsive"
                    width={800}       
                    height={1200}   
                    objectFit="contain"
                    className="rounded-lg shadow-md"
                    style={{ marginBottom: "0" }} 
                />
                {/* Second Image */}
                <Image
                    src="/jpg/our-passion/our-passion2.jpg"
                    alt="Our Passion Page 2"
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
    );
}
