import { myContactDetails } from "@/constants/contact";
import Contacts from "./ContactObject";

export default function ContactComponent() {
  return (
    <section id="contact" className="flex w-full px-4 md:max-w-[75%] md:mx-auto py-6 md:py-5 items-center justify-center border-t border-[hsl(207,4%,16%)]">
      <div className="w-full md:w-[40%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
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
