import { GitHubStarBadge } from "@/components/common/github-star-badge";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <GitHubStarBadge className="w-full justify-center" />
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-5">
            <GitHubStarBadge />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="container flex-1 outline-none">{children}</main>
      <SiteFooter />
    </div>
  );
}
