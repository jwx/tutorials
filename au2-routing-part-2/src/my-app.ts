import { Auth } from "./auth";
import { IRouter, ViewportInstruction } from "aurelia";

export class MyApp {
    public constructor(@IRouter private router: IRouter, private auth: Auth) {
    }

    public afterBind() {
        this.router.addHook(async (instructions: ViewportInstruction[]) => {
            console.log('beforeNavigation', instructions);
            if (this.auth.checkAccess() || instructions.length === 0) {
                return true;
            }
            this.auth.redirectInstructions = instructions;
            return [this.router.createViewportInstruction('login', instructions[0].viewport)];
        }, { exclude: ['welcome', 'about', 'login'] });
    }
}
