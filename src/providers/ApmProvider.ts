import type { ClientBrowser } from "@spark-fe/probe-web";

export class ApmProvider {
  private instance: ClientBrowser | null = null;

  constructor() {
    try {
      if (window.dra) {
        this.instance = window.dra;
      } else {
        console.error("DRA not found");
      }
    } catch (error) {
      console.error("Error initializing DRA", error);
    }
  }

  public info(message: string) {
    try {
      this.instance?.sendCustomLogEvent({
        level: "info",
        content: message,
      });
    } catch (error) {
      console.error("Error sending custom log event", error);
    }
  }

  public warn(message: string) {
    try {
      this.instance?.sendCustomLogEvent({
        level: "warn",
        content: message,
      });
    } catch (error) {
      console.error("Error sending custom log event", error);
    }
  }

  public error(message: string) {
    try {
      this.instance?.sendCustomLogEvent({
        level: "error",
        content: message,
      });
    } catch (error) {
      console.error("Error sending custom log event", error);
    }
  }
}
