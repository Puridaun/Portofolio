import { useState } from "react";

const ContactSection = () => {

    const [isMessageSent, setIsMessageSent] = useState(false)

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d07041ae-f0f3-4840-a1f7-f5965f097ced");

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData 
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
        setIsMessageSent(true)
    } else {
        console.log("Error", res);
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
                                <label >FULL NAME *</label>
                                <input type="text" name="name" placeholder="Hrițcu Serafim"></input>
                            </div>
                            <div className="viewer-email form-inputs">
                                <label >EMAIL ADDRESS *</label>
                                <input type="email" name="email" placeholder="example@domaine.com"></input>
                            </div>
                            <div className="viewer-message form-inputs">
                                <label >MESSAGE *</label>
                                <textarea name="message" placeholder="To write"></textarea>
                            </div>
                            <button type="submit">SEND MESSAGE</button>
                        </form>
                        <div className="owner-informations">
                            <h2>Hrițcu Serafim</h2>
                            <p>Engineear</p>
                            <p>E-MAIL: hritcuserafim01@gmail.com</p>
                            {isMessageSent?(
                                <div>
                                    <p>Message was sent succesfuly. Thank you!</p>
                                </div>
                            ):(<p>Something went wrong. We are sorry and we'll try to fix it</p>)}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ContactSection;