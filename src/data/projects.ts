/**
 * Portfolio projects. Add one entry per shipped project; the home page shows
 * the `featured` ones, the Projects page shows all of them in order.
 */

export type ProjectStatus = "live" | "building" | "planned";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  /** The single number that matters, shown prominently on the card. */
  metric?: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  links: {
    site?: string;
    repo?: string;
    appStore?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "splitnshare",
    name: "SplitNShare",
    tagline: "AI receipt splitting for iOS, built and shipped solo.",
    metric: "~1,000 downloads · 5.0★ · 550+ bills worth $50K+ split",
    description:
      "Scan a receipt, assign items to people, and settle up. Textract handles OCR; when a scan fails validation, a Claude fallback with deterministic totals checks repairs it, recovering 76% of failed scans. Serverless AWS backend (Lambda, Cognito, S3) running for about $3/month.",
    stack: ["Swift", "SwiftUI", "Python", "Claude API", "AWS Lambda", "Textract", "Cognito"],
    status: "live",
    featured: true,
    links: {
      site: "https://splitnshare.ai",
      appStore: "https://apps.apple.com/us/app/splitnshare/id6745573409",
    },
  },
  {
    slug: "receipt-bench",
    name: "receipt-bench",
    tagline: "Open-source benchmark for receipt and document extraction.",
    description:
      "Compares OCR-only, OCR + LLM repair, and direct vision-model pipelines on field accuracy, line-item F1, latency, and cost per document, with CI-gated evals that block regressions.",
    stack: ["Python", "Claude API", "GitHub Actions"],
    status: "building",
    featured: true,
    links: {},
  },
  {
    slug: "ny-fanaticos",
    name: "nyfanaticos.com",
    tagline: "Website for the NYC football club I captain.",
    description:
      "Squad pages, fixtures, and results for a club in the Bowery Premier League. Match data syncs from the league's Google Sheets, so results update without a deploy.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Sheets API", "Vercel"],
    status: "live",
    featured: true,
    links: {
      site: "https://nyfanaticos.com",
      repo: "https://github.com/grkapoor17/ny-fanaticos-website",
    },
  },
];
