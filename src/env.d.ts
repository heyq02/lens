import { ClientBrowser } from "@spark-fe/probe-web";

declare global {
  interface Window {
    dra: ClientBrowser;
  }
}
