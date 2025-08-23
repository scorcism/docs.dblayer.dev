import Link from "next/link"

import { Company } from "@/lib/meta"

export function Footer() {
  return (
    <footer className="h-16 w-full border-t">
      <div className="text-muted-foreground flex h-full w-full flex-wrap items-center justify-center gap-4 px-2 py-3 text-sm sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        <div className="text-center md:block">
          <Link
            className=""
            href="https://dblayer.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className="font-semibold">
              Coffee and dblayer
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
