import Logo from "./logo";
import NavLink from "./NavLink";

const routes = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events/all" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((route) => (
            <NavLink key={route.path} {...route} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
