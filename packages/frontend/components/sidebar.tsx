"use client"
import { Home, Shuffle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/", active: pathname === "/" },
    { icon: <Shuffle className="w-5 h-5" />, label: "Explorar", href: "/explore", active: pathname === "/explore" },
  ]

  return (
    <div
      className="fixed left-0 top-0 h-full w-16 z-40 rounded-lg m-1 border-r border-border/50"
      style={{
        background: "rgba(24, 24, 27, 0.7)", // fallback for bg-card
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
      }}
    >
      <div className="p-4 h-full flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
           <Link href="/">
            <span className="text-accent-foreground font-bold text-sm">PA</span>
           </Link>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="space-y-4 flex-1">
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <button
                className={`w-full flex flex-col  items-center gap-2 p-3 rounded-lg text-sm transition-colors group cursor-pointer ${
                  item.active
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                title={item.label}
              >
                {item.icon}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
