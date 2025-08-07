import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";
import { Link } from "lib/transition";

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <p className="mb-2 text-sm text-muted-foreground">
        <strong>Note:</strong>{" "}
        <span>
          Documentation is a work in progress. I'm currently building it solo, so
          thank you for your patience!
        </span>
      </p>

      <h1 className="mb-4 text-4xl font-bold sm:text-7xl my-4">dblayer</h1>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
