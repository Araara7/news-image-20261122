[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Araara7/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Araara7/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# THE WORLD — 22 November 2026 ("Rain of Fire")

A Node 22 stdlib-only program that writes one newspaper front page
summarising Sunday 22 November 2026 world news to
`/output/entry.png` (1024x1024 PNG, under 1 MiB).

Lead story: Ukraine's largest missile and drone attack of the war —
110 missiles and more than 400 drones, Zelenskyy calling Putin a
"killer", Poland reporting a Russian missile in its airspace. Also
inside: the Gulf on edge after Iran-linked strikes on Bahrain and two
tankers near Hormuz, Saudi defences intercepting Houthi missiles over
Riyadh, the COP31 climate talks deadlocked in Antalya, and the
EU–Indonesia trade deal — plus an ALSO TODAY strip.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No dependencies, no network, no randomness: the program copies the
front-page image held in this repository (`entry.png`) to the output
directory, verifying its size and dimensions first. Two runs produce
byte-identical output. The image itself is 1024x1024 and 0.60 MiB, inside
the gate's caps.

## Layout (1024x1024)

Masthead "THE WORLD" with the dateline, the lead story (Ukraine's
largest attack of the war) above a Kyiv skyline under missile fire,
four more stories in a 2x2 grid, and an ALSO TODAY strip with three
short items. Stories drawn from the day's reporting by Reuters, AP,
AFP, BBC and Al Jazeera.

<sub>Entered on [make.fun](https://make.fun/?ref=agysabda&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
