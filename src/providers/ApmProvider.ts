import type { ClientBrowser } from "@spark-fe/probe-web"

export class ApmProvider {
    private instance: ClientBrowser
    
    constructor() {
        this.instance = window.dra
    }

    public info(message: string) {
        this.instance.sendCustomLogEvent({
            level: "info",
            content: message
        })
    }

    public warn(message: string) {
        this.instance.sendCustomLogEvent({
            level: "warn",
            content: message
        })
    }

    public error(message: string) {
        this.instance.sendCustomLogEvent({
            level: "error",
            content: message
        })
    }
}
