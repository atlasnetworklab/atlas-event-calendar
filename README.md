# Atlas Event Calendar

Static six month appearance calendar for the Atlas team. No build step and no outside dependency.

Where the events live: the tab EVENT CALENDAR in the Google Sheet ATLAS RELATIONSHIPS. One row per appearance. The page reads that tab through a read only feed and never needs editing to add, change or remove an event.

The one spot: `FEED_URL` near the top of `app.js`. Empty means the page shows the fallback list written in `app.js`.

If the feed cannot be reached, the page shows the last list it saved in the browser and says so in a notice.

Privacy: anyone with the link can open this page. City only, no street address, no personal entries, no contact details, no keys.
