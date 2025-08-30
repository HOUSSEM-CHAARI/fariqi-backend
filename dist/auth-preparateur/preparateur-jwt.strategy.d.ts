import { Strategy } from 'passport-jwt';
declare const PreparateurJwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class PreparateurJwtStrategy extends PreparateurJwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
