import { VXThemeConfig } from '../../theme.config';
export declare const REP_MAX = 6;
export declare type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;
export declare class ResponsiveService {
    private cog;
    constructor(cog: VXThemeConfig);
    genCls(count: number): string[];
}
