import type { Config } from "@measured/puck";
import { title } from "process";
import ServerComp from "./app/component/ServerComp";
import ClientWrapper from "./app/component/CLientWraper";

type Props = {
  HeadingBlock: { title: string };
  CompanyBlock: { name: string };
  PageBlock?: { title: string };
  Company?: { name: string };
  ClientWrapper?: { };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    CompanyBlock: {
      fields: {
       name: { type: "text" },
      },
      defaultProps: {
        name: "Company",
      },
      render: ({ name }) => (
        <div style={{ padding: 64 }}>
          <h1>{name}</h1>
        </div>
      ),
    },
    ClientWrapper: {
      render: () => <ClientWrapper />,
    },
  },
};

export default config;
