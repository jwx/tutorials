import { ViewportInstruction } from "aurelia";

export class Auth {
    public user: string;
    public redirectInstructions: ViewportInstruction[];

    private timeout: any;

    public login(user: string) {
        this.user = user;
        this.createTimeout();
    }
    public logout() {
        this.user = void 0;
        this.removeTimeout();
    }

    public checkAccess(): boolean {
        this.createTimeout();
        return this.user !== void 0;
    }

    private createTimeout() {
        this.removeTimeout();
        this.timeout = setTimeout(() => {
            this.user = void 0;
        }, 5 * 1000);
    }

    private removeTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = void 0;
        }
    }
}
