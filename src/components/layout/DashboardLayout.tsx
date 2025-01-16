import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchBar } from "@/components/SearchBar";
import { BackToTop } from "@/components/BackToTop";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col" role="main">
      <Header />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathSegments.map((segment, index) => (
              <BreadcrumbItem key={segment}>
                <BreadcrumbLink 
                  href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                  aria-current={index === pathSegments.length - 1 ? "page" : undefined}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <div className="container mx-auto px-4 py-4">
        <SearchBar />
      </div>
      <main className="flex-1 bg-gray-50" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};