export const siteConfig = {
  name: "Ankit Ahuja & Co",
  tagline: "Chartered Accountants",
  description:
    "Trusted Chartered Accountants in Delhi for tax planning, GST, audit, compliance, and business advisory services.",
  url: "https://ankitahuja-co.in",
  address: "A-239, Hari Nagar, New Delhi",
  contacts: {
    ankit: { name: "Ankit Ahuja", phone: "+918860150035" },
    anshum: { name: "Anshum Ahuja", phone: "+918860403399" },
    emails: ["caankitahuja1@gmail.com", "anshum.ahuja@gmail.com"],
    whatsapp: "918860150035",
  },
  seoKeywords: [
    "Chartered Accountant Delhi",
    "CA Firm in Delhi",
    "GST Filing Services",
    "Tax Consultant India",
    "Audit and Assurance Services",
  ],
};

export const primaryServices = [
  "Taxation & Compliance",
  "GST Services",
  "Audit & Assurance",
  "Accounting & Bookkeeping",
  "Business Setup",
  "Advisory Services",
];

export const valuePillars = [
  {
    title: "Professional, end-to-end support",
    description:
      "From registrations to year-end filings, you get structured guidance from qualified chartered accountants who stay accountable for timelines and quality.",
  },
  {
    title: "Client-first communication",
    description:
      "We explain options in plain language, document assumptions clearly, and respond quickly so owners and finance teams always know the next step.",
  },
  {
    title: "Confidentiality and discipline",
    description:
      "Your data is handled with care, access is limited to the engagement team, and we maintain audit-ready records so compliance does not become a last-minute scramble.",
  },
];

export type FeaturedPlan = {
  title: string;
  priceLabel: string;
  turnaround: string;
  bullets: string[];
};

export const featuredPlans: FeaturedPlan[] = [
  {
    title: "Bookkeeping & MIS",
    priceLabel: "Indicative from ₹1,199 / month*",
    turnaround: "Monthly books and reports",
    bullets: ["CA-reviewed reconciliations", "Discovery call included"],
  },
  {
    title: "TDS return filing",
    priceLabel: "Indicative from ₹1,799 / quarter*",
    turnaround: "Typical delivery within a week",
    bullets: ["Challan and ledger checks", "Notice support on request"],
  },
  {
    title: "GST return filing",
    priceLabel: "Indicative from ₹1,099 / month*",
    turnaround: "Filed after reconciliation review",
    bullets: ["GSTR-1 / 3B as applicable", "ITC hygiene checklist"],
  },
  {
    title: "GST registration",
    priceLabel: "Indicative from ₹2,499*",
    turnaround: "Document-led timeline",
    bullets: ["Application drafting", "Query handling support"],
  },
];

export const complianceDeadline = {
  title: "Upcoming filing window",
  description:
    "GST returns and related compliances attract interest when delayed. Share your data early so filings can be reviewed calmly before the due date.",
  /** IANA timezone for display */
  timeZone: "Asia/Kolkata",
  /** ISO instant for countdown target */
  endAt: "2026-05-11T23:59:59+05:30",
};

export const firmStats = [
  { label: "Practice focus", value: "Tax, GST & assurance" },
  { label: "Serving", value: "Delhi NCR businesses" },
  { label: "Engagement style", value: "CA-led, documented" },
  { label: "Response aim", value: "Same-week on routine queries" },
];

export const detailedServices = [
  {
    slug: "tax-filing-planning",
    title: "Tax Filing & Planning",
    description:
      "Accurate filing with practical planning strategies to reduce tax burden and avoid notices.",
    benefits: [
      "Timely return filing",
      "Tax-saving structuring",
      "Risk mitigation support",
    ],
  },
  {
    slug: "gst-registration-filing",
    title: "GST Registration & Filing",
    description:
      "End-to-end GST setup and return filing for businesses, startups, and service providers.",
    benefits: [
      "GST registration assistance",
      "Monthly/quarterly filing",
      "Input tax credit optimization",
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Independent and detail-oriented audits that improve reliability and stakeholder confidence.",
    benefits: [
      "Statutory and internal audits",
      "Financial controls review",
      "Actionable audit insights",
    ],
  },
  {
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Accounting",
    description:
      "Reliable bookkeeping and MIS preparation to give business owners clear decision-ready numbers.",
    benefits: [
      "Day-to-day bookkeeping",
      "Periodic MIS reports",
      "Compliance-ready records",
    ],
  },
  {
    slug: "business-registration",
    title: "Business Registration",
    description:
      "Support for company, LLP, and related registrations so you can launch and operate with confidence.",
    benefits: [
      "Entity selection guidance",
      "Registration documentation",
      "Post-registration compliance roadmap",
    ],
  },
  {
    slug: "compliance-regulatory",
    title: "Compliance & Regulatory",
    description:
      "Structured compliance management across direct tax, GST, and corporate obligations.",
    benefits: [
      "Deadline tracking",
      "Notice response support",
      "Penalty avoidance through preventive compliance",
    ],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    description:
      "Practical CA advisory for early-stage founders on structuring, taxes, and operational setup.",
    benefits: [
      "Founders compliance playbook",
      "Funding-ready documentation",
      "Scalable finance process setup",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The team made our GST and tax compliance completely stress-free. Fast responses and clear guidance every month.",
    name: "Retail Business Owner",
  },
  {
    quote:
      "Their audit and advisory support helped us tighten controls and improve financial reporting quality.",
    name: "SME Director",
  },
  {
    quote:
      "As a startup, we needed practical CA support from day one. They handled registration, filings, and planning smoothly.",
    name: "Startup Founder",
  },
  {
    quote:
      "Notices were explained calmly, options were laid out with pros and cons, and the follow-through until closure was excellent.",
    name: "Services Company, CFO",
  },
  {
    quote:
      "Bookkeeping was messy after a rapid hiring phase. They standardized charts, closed gaps, and our MIS finally matches the bank.",
    name: "Growth-stage employer",
  },
];

export const industriesServed = ["SMEs", "Startups", "Freelancers", "Corporates"];

export const blogPosts = [
  {
    slug: "gst-filing-checklist-for-small-businesses",
    title: "GST Filing Checklist for Small Businesses",
    excerpt:
      "A practical checklist to keep your GST filings accurate and on time every month.",
    content:
      "Staying compliant with GST starts with disciplined record-keeping. Keep invoices organized, reconcile inward and outward supplies, and review input tax credit before filing. Small businesses should maintain a filing calendar and avoid last-minute submissions to prevent errors and penalties.",
    date: "2026-04-10",
  },
  {
    slug: "year-end-tax-planning-for-business-owners",
    title: "Year-End Tax Planning for Business Owners",
    excerpt:
      "How business owners can optimize tax positions before closing the financial year.",
    content:
      "Year-end tax planning should begin before the final quarter closes. Review expenses, depreciation opportunities, and advance tax obligations. Proactive planning improves cash flow and reduces year-end surprises. A structured tax review with your CA ensures compliance while identifying lawful savings.",
    date: "2026-04-02",
  },
  {
    slug: "common-compliance-mistakes-startups-should-avoid",
    title: "Common Compliance Mistakes Startups Should Avoid",
    excerpt:
      "Avoid frequent compliance errors that create notices, penalties, and fundraising friction.",
    content:
      "Startups often overlook basic compliance while focusing on growth. Delayed filings, poor bookkeeping, and incorrect classification of expenses can lead to penalties and investor concerns. Establishing clean accounts and a compliance tracker early helps build trust and operational discipline.",
    date: "2026-03-27",
  },
];
