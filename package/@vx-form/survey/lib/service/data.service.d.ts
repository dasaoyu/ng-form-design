import { Observable } from "rxjs";
import { _HttpClient } from "../net/http.client";
export declare class DataService {
    private _http;
    constructor(_http: _HttpClient);
    getBusinessTables(url: string, params?: {}): Observable<any>;
    getFormInfo(url: string, params?: {}): Observable<any>;
    getSysCtrEmployee(params?: {}): Observable<any>;
    getSysCtrOrgTree(params?: {}): Observable<any>;
    getSysCtrPostionTable(params?: {}): Observable<any>;
    getSysCtrArea(params?: {}): Observable<any>;
    getTreeData(params?: {}): Observable<any>;
    getWebAPIName(type: string): string;
}
