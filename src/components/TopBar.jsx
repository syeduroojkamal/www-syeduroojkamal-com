import "./TopBar.css";
import Resume from "../assets/resume.pdf";

export default function TopBar() {
  return (
    <nav>
      <a href={Resume} target="_blank" className="button">
        Download Resume
      </a>
      <a className="button">Contact Me</a>
    </nav>
  );
}
