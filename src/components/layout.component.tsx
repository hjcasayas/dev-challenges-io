import Head from "next/head";
import { FunctionComponent } from "react";

import { Nav } from "../components/nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A challenge app from dev challenges"
        />
        <meta name="author" content="hjcasayas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-5 px-6 min-h-screen md:py-10 md:px-20 bg-[#2a2b2f] text-[#e5eaf0]">
        <div className="flex flex-col container mx-auto">
          <div className="mb-9 lg:mb-32">
            <Nav></Nav>
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
