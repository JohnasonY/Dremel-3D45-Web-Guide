export function Navbar({ activePath, onNavigate }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <button
        className={activePath === "/" ? "is-active" : ""}
        type="button"
        onClick={() => onNavigate("/")}
      >
        GUIDE
      </button>
      <button
        className={activePath === "/faq" ? "is-active" : ""}
        type="button"
        onClick={() => onNavigate("/faq")}
      >
        FAQ
      </button>
      <button
        className={activePath === "/examples" ? "is-active" : ""}
        type="button"
        onClick={() => onNavigate("/examples")}
      >
        EXAMPLES
      </button>
      <button
        className={activePath === "/about" ? "is-active" : ""}
        type="button"
        onClick={() => onNavigate("/about")}
      >
        ABOUT
      </button>
    </nav>
  );
}
