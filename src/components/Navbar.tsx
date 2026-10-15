import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export type NavLinkItem = {
  label: string
  href: string
}

type NavbarProps = {
  links?: NavLinkItem[]
  brand?: string
  className?: string
}

const defaultLinks: NavLinkItem[] = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
]

const itemClass = ({ isActive }: { isActive: boolean }) =>
  [
    'text-sm transition-colors',
    isActive
      ? 'font-medium text-neutral-900'
      : 'text-neutral-600 hover:text-neutral-900',
  ].join(' ')

export default function Navbar({
  links = defaultLinks,
  brand = 'inventor-re',
  className = '',
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`w-full border-b border-neutral-200 bg-white ${className}`}>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          to="/home"
          onClick={() => setOpen(false)}
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          {brand}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink to={link.href} className={itemClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-neutral-200 px-4 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                onClick={() => setOpen(false)}
                className={itemClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
