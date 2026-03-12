import { CANDIDATE_NAME } from "@/lib/mock-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
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
