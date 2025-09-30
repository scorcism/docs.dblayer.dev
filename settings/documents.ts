import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Features",
    href: "/features",
    items: [
      {
        title: "API",
        href: "/api",
      },
      {
        title: "APP",
        href: "/app",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Endpoint",
    href: "/endpoint",
    items: [
      {
        title: "Security Config",
        href: "/security",
      }
    ],
  },
  {
    title: "Support",
    href: "/help",
    items: [
      {
        title: "Troubleshoot",
        href: "/troubleshoot",
      },
      {
        title: "Billing",
        href: "/billing",
      },
      {
        title: "Contact Support",
        href: "/support",
      },
    ],
  },
]
