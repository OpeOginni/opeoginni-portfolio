import { myContactDetails } from "@/constants/contact";
import Contacts from "./ContactObject";

export default function ContactComponent() {
  return (
    <section id="contact" className="flex max-w-[75%] mx-auto py-5 items-center justify-center border-t border-[hsl(207,4%,16%)]">
      <div className="w-[40%]">
        <div className="grid grid-cols-4 gap-3">
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
