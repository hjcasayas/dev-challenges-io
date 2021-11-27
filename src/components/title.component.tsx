import Head from "next/head";
import { FunctionComponent } from "react";

interface TitleProps {
  pageName?: string;
}

export const Title: FunctionComponent<TitleProps> = ({ pageName }) => {
  const appName = "Dev Challenges";

  return (
    <Head>
      <title>
        {pageName && pageName.trim().length > 0
          ? `${appName} - ${pageName}`
          : appName}
      </title>
    </Head>
  );
};
