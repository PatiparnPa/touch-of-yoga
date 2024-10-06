import styles from '/app/styles/homepage/SendEmail.module.css';

export default function SendEmail(){
    return(
        <>
              <div className={styles.sendEmail}>
      <h1 className={styles.sendEmailTopic}>Subscribe to our emails</h1>
      <p className={styles.sendEmailParagraph}>Be the first to know about new collections and exclusive offers.</p>
      <div className={styles.emailInputContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
        />
        <button className={styles.sendButton}>Join us</button>
      </div>
    </div>
        </>
    )
}