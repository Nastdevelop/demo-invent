import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export type SidebarItem = {
  label: string
  href: string
  end?: boolean
}

type DashboardLayoutProps = {
  items?: SidebarItem[]
}

const defaultItems: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', end: true },
  { label: 'Projects', href: '/dashboard/projects' },
  { label: 'Settings', href: '/dashboard/settings' },
]

const itemClass = ({ isActive }: { isActive: boolean }) =>
  [
    'block rounded-lg px-3 py-2 text-sm transition-colors',
    isActive
      ? 'bg-neutral-900 font-medium text-white'
      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900',
  ].join(' ')

export default function DashboardLayout({
  items = defaultItems,
}: DashboardLayoutProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const sidebar = (
    <nav className="flex h-full flex-col gap-1 p-4">
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.end}
          onClick={() => setOpen(false)}
          className={itemClass}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <aside className="hidden w-64 shrink-0 border-r border-neutral-200 bg-white md:block">
        {sidebar}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 md:hidden">
          <span className="text-sm font-semibold text-neutral-900">Dashboard</span>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle sidebar"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {open && (
          <div className="border-b border-neutral-200 bg-white md:hidden">
            {sidebar}
          </div>
        )}

        <main key={location.pathname} className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
