import React from 'react'
import Title from "../Title";
import styles from "../../css/contact.module.css";



const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="Contact" subtitle="Us" />
            <div className={styles.center}>
                <form action="https://formspree.io/nipabali56@gmail.com" method="POST" className={styles.form}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={styles.formControl}
                            placeholder="Nipa Bali"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="name"
                            id="email"
                            className={styles.formControl}
                            placeholder="nipabali56@gmail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            type="email"
                            name="message"
                            id="message"
                            rows="10"
                            className={styles.formControl}
                            placeholder="Write Something"
                        >
                            
                        </textarea>
                        
                    </div>
                    <div>
                        <input 
                            type="submit"
                            value="Submit Here"
                            className={styles.submit}
                        />
                    </div>

                </form>
            </div>


        </section>
    )
}

export default Contact























