// The Plumber's Inbox: A 120-Word Cold Email
// Entry: "The March job nobody paid for" — a 118-word cold email
// pitching bookkeeping to a busy plumber (two-van firm).
// Hook: the unpaid March invoice, not the paperwork — the plumber's
// sharpest pain is money that hasn't landed, and the ask costs nothing:
// name one customer who owes you and that invoice gets chased first, free.
import { mkdirSync, writeFileSync } from "node:fs";

const email = `Subject: The March job nobody paid for

Morning,
You fixed a burst pipe in March, sent the invoice, and the money still hasn't landed. Meanwhile you're out before six, on emergency call-outs all day, and the paperwork waits until night.
I do bookkeeping for plumbers, only plumbers. I chase unpaid invoices at seven days and fourteen, log your receipts the same day, and send one short list every Friday: paid, unpaid, due. Plumbers I work with get paid six days faster.
$89 a month, flat. No contract. First month free.
Reply with the name of one customer who owes you. I'll chase that invoice first, free, and you judge me on the result.
Tom
Ledger & Pipe Bookkeeping
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", email, "utf8");
