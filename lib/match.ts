// Chelsea fixtures from TheSportsDB's free public key.
// Matches are days apart, so the data is cached and refreshed every 30 minutes.
// Which state to show (next, matchday, live, just watched) is worked out in the
// browser from the kickoff time, so the cache never has to be precise.

const API = "https://www.thesportsdb.com/api/v1/json/123";
const CHELSEA_ID = "133610";
export const MATCH_REVALIDATE_SECONDS = 1800;

export type Match = {
  home: string;
  away: string;
  homeBadge: string;
  awayBadge: string;
  kickoff: string;
  homeScore: number | null;
  awayScore: number | null;
};

type ApiEvent = {
  strHomeTeam: string;
  strAwayTeam: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
  strTimestamp: string;
  intHomeScore: string | null;
  intAwayScore: string | null;
};

const toMatch = (e: ApiEvent): Match => ({
  home: e.strHomeTeam,
  away: e.strAwayTeam,
  homeBadge: `${e.strHomeTeamBadge}/tiny`,
  awayBadge: `${e.strAwayTeamBadge}/tiny`,
  kickoff: `${e.strTimestamp}Z`,
  homeScore: e.intHomeScore === null ? null : Number(e.intHomeScore),
  awayScore: e.intAwayScore === null ? null : Number(e.intAwayScore),
});

async function first(endpoint: string, key: "events" | "results"): Promise<Match | null> {
  try {
    const res = await fetch(`${API}/${endpoint}?id=${CHELSEA_ID}`, {
      next: { revalidate: MATCH_REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const event: ApiEvent | undefined = data?.[key]?.[0];
    return event ? toMatch(event) : null;
  } catch {
    return null;
  }
}

export async function getChelseaMatches() {
  const [next, last] = await Promise.all([
    first("eventsnext.php", "events"),
    first("eventslast.php", "results"),
  ]);
  return { next, last };
}
