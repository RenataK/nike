import { navLinks } from "../constants"

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="lg:hidden absolute top-17 right-0 w-[50vw] bg-white border rounded shadow-md border-black">
      {navLinks.map(links => (
        <ul className="py-2" key={links.label}>
          <li className="text-2xl font-palanquin px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={closeMenu}>
            <a href={links.href}>{links.label}</a>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default MobileMenu