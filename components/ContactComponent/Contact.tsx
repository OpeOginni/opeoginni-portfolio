import styles from "./contact.module.css";
import { myContactDetails } from "@/constants/contact";
import Contacts from "./ContactObject";

export default function ContactComponent() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className="grid grid-cols-3 gap-3">
          {myContactDetails.map((contractDetails) => {
            return (
              <Contacts
                key={contractDetails.medium}
                name={contractDetails.name}
                medium={contractDetails.medium}
                link={contractDetails.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
