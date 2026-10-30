import BanterNote from "@/components/BanterNote";
import EntryList from "@/components/EntryList";
import Fixture from "@/components/Fixture";
import GermanyClock from "@/components/GermanyClock";
import ProjectViewer from "@/components/ProjectViewer";
import SectionIndex from "@/components/SectionIndex";
import {
  certificates,
  earlierProjects,
  education,
  openSource,
  profile,
  projects,
  sections,
  talks,
  work,
} from "@/lib/content";
import { getChelseaMatches } from "@/lib/match";

// The page is static apart from the match card, which refreshes with this
export const revalidate = 1800;

const heading = "mb-4 text-[15px] font-normal text-grey";
const section = "mt-[4.5rem] sm:mt-[6.5rem]";
const headerLink = "link text-grey hover:text-ink hover:decoration-solid hover:decoration-ink";

export default async function Home() {
  const { next, last } = await getChelseaMatches();

  return (
    <>
      <main id="top" className="mx-auto max-w-3xl pt-4 pb-16 sm:pt-8">
        <SectionIndex sections={sections} />

        <header className="mt-14 sm:mt-[6.5rem]">
          <h1 className="flex items-center gap-2 text-[15px] font-medium">
            {profile.name}
            <svg viewBox="0 0 3 2" role="img" aria-label="Nigeria" className="h-2.5 w-[15px] rounded-[2px]">
              <rect width="3" height="2" fill="#fff" />
              <rect width="1" height="2" fill="#008751" />
              <rect x="2" width="1" height="2" fill="#008751" />
            </svg>
          </h1>
          <p className="mt-5 text-[clamp(1.4rem,2.6vw,1.85rem)] leading-[1.3] tracking-[-0.015em]">{profile.lede}</p>
          <p className="mt-5 max-w-[46ch] text-grey">{profile.where}</p>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
            <a href={profile.links.github} target="_blank" rel="noopener" className={headerLink}>
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener" className={headerLink}>
              LinkedIn
            </a>
            <a href={profile.links.email} className={headerLink}>
              Email
            </a>
            <span className="group/x relative">
              <a href={profile.links.x} target="_blank" rel="noopener" className={headerLink}>
                X
              </a>
              <BanterNote />
            </span>
          </nav>
          <Fixture next={next} last={last} />
        </header>

        <section id="work" className="mt-14 sm:mt-[4.5rem]">
          <h2 className={heading}>Work</h2>
          <EntryList entries={work} />
        </section>

        <section id="projects" className={section}>
          <h2 className={heading}>Projects</h2>
          <ProjectViewer projects={projects} />
          <p className="mt-8 text-faint">
            Earlier:{" "}
            {earlierProjects.map((p, i) => (
              <span key={p.href}>
                {i > 0 && ", "}
                <a href={p.href} target="_blank" rel="noopener" className={headerLink}>
                  {p.name}
                </a>
              </span>
            ))}
          </p>
        </section>

        <section id="open-source" className={section}>
          <h2 className={heading}>Open source</h2>
          <EntryList entries={openSource} />
        </section>

        <section id="talks" className={section}>
          <h2 className={heading}>Talks</h2>
          <EntryList entries={talks} />
        </section>

        <section id="education" className={section}>
          <h2 className={heading}>Education</h2>
          <EntryList entries={education} />
        </section>

        <section id="certificates" className="mt-10 sm:mt-14">
          <h2 className={heading}>Certificates</h2>
          <EntryList entries={certificates} />
        </section>
      </main>

      <footer className="mx-auto flex max-w-3xl justify-between gap-4 pt-12 pb-16 text-[13px] text-faint max-sm:flex-col">
        <span>{profile.name}</span>
        <GermanyClock />
      </footer>
    </>
  );
}
