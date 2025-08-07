import { useState } from "react";

const ContactSection = () => {
    const [isMessageSent, setIsMessageSent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://formspree.io/f/mdkdpazv", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log("Success");
                setIsMessageSent('success');
                event.target.reset();
            } else {
                console.log("Error");
                setIsMessageSent('error');
            }
        } catch (error) {
            console.error("Network error:", error);
            setIsMessageSent('error');
        }
    };

    return (
        <>
            <div id="contact-section" className="footer-container">
                <section className="contact-section std-section">
                    <h2 className="contact-title">Contact</h2>
                    <div className="contacts-container">
                        <form onSubmit={onSubmit} className="contact-form">
                            <div className="viewer-name form-inputs">
                                <label>FULL NAME *</label>
                                <input type="text" name="name" placeholder="John Sample" required />
                            </div>
                            <div className="viewer-email form-inputs">
                                <label>EMAIL ADDRESS *</label>
                                <input type="email" name="email" placeholder="example@domain.com" required />
                            </div>
                            <div className="viewer-message form-inputs">
                                <label>MESSAGE *</label>
                                <textarea name="message" placeholder="To write" required />
                            </div>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                        <div className="owner-informations">
                            <h2>Hrițcu Serafim</h2>
                            <p>Engineer</p>
                            <p>E-MAIL: hritcuserafim01@gmail.com</p>
                            {isMessageSent === 'success' && (
                                <div>
                                    <p>Message was sent successfully. Thank you!</p>
                                </div>
                            )}
                            {isMessageSent === 'error' && (
                                <p>Something went wrong. We are sorry and we'll try to fix it</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactSection;