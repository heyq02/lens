import type { ClientBrowser } from "@spark-fe/probe-web"

class ApmProvider {
    private instance: ClientBrowser
    
    constructor() {
        this.instance = window.dra
    }
}
