import { OothClient } from "ooth-client";
import withOothNext from "ooth-client-react-next";

const oothClient = new OothClient({
  oothUrl: `http://localhost/auth`
});

export const provideOothNext = withOothNext(oothClient);
