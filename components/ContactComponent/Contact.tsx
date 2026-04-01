import { myContactDetails } from "@/constants/contact";
import Contacts from "./ContactObject";

export default function ContactComponent() {
  return (
    <section
      id="contact"
      className="w-full px-4 md:max-w-[75%] md:mx-auto py-8 md:py-10 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="flex flex-col items-center gap-5">
        <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          Get in touch
        </p>
        <div className="flex items-center gap-5">
          {myContactDetails.map((contactDetails) => (
            <Contacts
              key={contactDetails.medium}
              name={contactDetails.name}
              medium={contactDetails.medium}
              link={contactDetails.link}
            />
          ))}
        </div>
        <p className="text-[11px] text-neutral-400 dark:text-neutral-600 pt-2">
          &copy; {new Date().getFullYear()} Opeyemi Oginni
        </p>
      </div>
    </section>
  );
}
