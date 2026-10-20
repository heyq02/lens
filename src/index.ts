import { ApmProvider } from "./providers/ApmProvider.js";
import { SgmProvider } from "./providers/SgmProvider.js";

export { Level } from "./enums.js";

export class Lens {
  private provider: ApmProvider | SgmProvider | null = null;

  constructor(type: "apm" | "sgm") {
    if (type === "apm") {
      this.provider = new ApmProvider() as ApmProvider;
    } else if (type === "sgm") {
      this.provider = new SgmProvider() as SgmProvider;
    } else {
      console.error("Invalid provider type");
    }
  }

  public report(level: Level)
}
