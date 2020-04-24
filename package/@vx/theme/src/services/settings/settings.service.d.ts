import { Observable } from 'rxjs';
import { App, Layout, SettingsNotify, User } from './interface';
export declare const LAYOUT = "layout";
export declare const USER = "user";
export declare const APP = "app";
export declare class SettingsService {
    private notify$;
    private _app;
    private _user;
    private _layout;
    private get;
    private set;
    readonly layout: Layout;
    readonly app: App;
    readonly user: User;
    readonly notify: Observable<SettingsNotify>;
    setLayout(name: string | Layout, value?: any): boolean;
    setApp(value: App): boolean;
    setUser(value: User): boolean;
}
