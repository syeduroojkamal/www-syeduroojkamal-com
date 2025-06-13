import Github from "@/images/Github";
import { Button } from "../ui/button";
import ThemeDropdown from "../theme/ThemeDropdown";

export default function NavBar() {
  return (
    <header className="flex justify-end gap-4 mx-4 mt-4">
      <Button asChild variant={"ghost"}>
        <a
          href="https://github.com/syeduroojkamal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <h1>Github</h1>
        </a>
      </Button>
      <ThemeDropdown />
    </header>
  );
}
