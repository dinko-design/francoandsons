import { Outlet, useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DocumentHead } from "../shared/DocumentHead";
import { JsonLd } from "../shared/JsonLd";
import { getMetaForPath } from "../../data/metaData";

export function Layout() {
  const { pathname } = useLocation();
  const params = useParams();
  const meta = getMetaForPath(pathname, params);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DocumentHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        image={meta.image}
        noindex={meta.noindex}
      />
      <JsonLd pathname={pathname} params={params} />
      <Header />
      <main className="flex-1 bg-background">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}