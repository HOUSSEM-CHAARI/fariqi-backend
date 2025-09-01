import { Strategy } from 'passport-jwt';
declare const JoueurJwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JoueurJwtStrategy extends JoueurJwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
