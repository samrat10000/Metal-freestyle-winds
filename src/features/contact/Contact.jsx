import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./contact.module.css";
import butterflyImg from "../../assets/contact_page_thiings/purple_butterfly.png";
import skullImg from "../../assets/contact_page_thiings/skull_art_for_contact.png";
import gothicCrossImg from "../../assets/contact_page_thiings/gothic_cross.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //semulate sendingggg...
        console.log('Sending data:', formData);
        setIsSent(true);

        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setIsSent(false);
        }, 6000)
    };

    return (
        <div className={styles.container}>



            <div className={styles.containerWrapper}>
                {/* Decorative Skull (Background/Behind) */}
                <div className={styles.decoration}>
                    <img src={skullImg} alt="Gothic Art" className={styles.skullImage} />
                </div>

                {/* Gothic Cross (Left Side) */}
                <img src={gothicCrossImg} alt="Gothic Cross" className={styles.gothicCross} />

                {/* Floating Purple ButterFly (Bottom Left) */}
                <img src={butterflyImg} alt="Purple Butterfly" className={styles.butterfly} />

                {/* Form Card */}
                <div className={styles.formcard}>

                    <h2 className={styles.title}>
                        what we have is special ৎ୭<br />
                        <span>u can tell me anything</span>
                    </h2>

                    {!isSent ? (
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input

                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />


                            </div>

                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Your Message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send</button>

                        </form>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <h3 style={{ color: '#4ade80' }}>Message Transmitted.</h3>
                            <p>The void has received your words.</p>
                        </div>

                    )}






                </div>

            </div>
            <NavLink to="/" className={styles.returnBtn}>return;</NavLink>
        </div>
    );






};

export default Contact;


