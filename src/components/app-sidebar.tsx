"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  AudioWaveform,
  BookOpen,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  CreditCard,
  Expand,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const sampleData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navGroups = [
    {
      label: "Platform",
      items: [
        {
          title: "Home",
          url: "/",
          icon: Home,
          isActive: pathname?.startsWith("/"),
        },
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: SquareTerminal,
          isActive: pathname?.startsWith("/dashboard"),
          items: [
            {
              title: "Home",
              url: "/dashboard",
            },
            {
              title: "Apps",
              url: "/dashboard/apps",
            },
          ],
        },
        {
          title: "Blog",
          url: "/blog",
          icon: BookOpen,
          isActive: pathname === "/blog",
          items: [
            {
              title: "Welcome to Our Blog",
              url: "/blog/welcome-to-our-blog",
            },
          ],
        },
      ],
    },
    {
      label: "Plans",
      items: [
        {
          title: "Starter - $9.99/month - Get Started",
          url: "/sign-up",
          icon: CreditCard,
        },
        {
          title: "Professional - $29.99/month - Most Popular - Get Started",
          url: "/sign-up",
          icon: CreditCard,
        },
        {
          title: "Enterprise - Custom - Contact Sales",
          url: "/contact-sales",
          icon: CreditCard,
        },
      ],
    },
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sampleData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={navGroups} />
        {/* <NavProjects projects={sampleData.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sampleData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
