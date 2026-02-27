import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicePage } from "./pages/ServicePage";
import { LocationPage } from "./pages/LocationPage";
import { PortfolioPage } from "./pages/Portfolio";
import { ProcessPage } from "./pages/Process";
import { ReviewsPage } from "./pages/Reviews";
import { FAQPage } from "./pages/FAQ";
import { ContactPage } from "./pages/Contact";
import { GetStartedPage } from "./pages/GetStarted";
import { WhyUsPage } from "./pages/WhyUs";
import { PackagesPage } from "./pages/Packages";
import { BlogPage } from "./pages/Blog";
import { BlogPostPage } from "./pages/BlogPost";
import { LeadMagnetPage } from "./pages/LeadMagnetPage";
import { AdLandingPage } from "./pages/AdLandingPage";
import { NotFoundPage } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services/:slug", Component: ServicePage },
      { path: "locations/:slug", Component: LocationPage },
      { path: "portfolio", Component: PortfolioPage },
      { path: "process", Component: ProcessPage },
      { path: "reviews", Component: ReviewsPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "get-started", Component: GetStartedPage },
      { path: "why-us", Component: WhyUsPage },
      { path: "packages", Component: PackagesPage },
      // Blog
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostPage },
      // Lead magnets
      { path: "free/:slug", Component: LeadMagnetPage },
      // Ad landing pages (service-only or service-location combos)
      { path: "offers/:slug", Component: AdLandingPage },
      // Catch-all
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
