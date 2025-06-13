import Github from "@/images/Github";
import { Button } from "../ui/button";
import ThemeDropdown from "../theme/ThemeDropdown";

export default function NavBar() {
  return (
    <nav className="flex justify-end gap-4 mx-4 mt-4">
      <Button asChild variant={"ghost"}>
        <a
          href="https://github.com/syeduroojkamal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <span>Github</span>
        </a>
      </Button>
      <ThemeDropdown />
    </nav>
  );
}
