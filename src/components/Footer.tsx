import { CANDIDATE_NAME } from "@/lib/mock-data";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#c8d6d1] overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-2/3 bg-linear-to-l from-[#0D7377]/6 via-[#0D7377]/2 via-40% to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {CANDIDATE_NAME} for Mayor. All
          rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Paid for by {CANDIDATE_NAME} for Mayor Campaign
        </p>
      </div>
    </footer>
  );
}
