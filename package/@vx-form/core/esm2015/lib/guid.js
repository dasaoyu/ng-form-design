/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Guid {
    /**
     * @private
     * @param {?} guid
     */
    constructor(guid) {
        if (!guid) {
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    static isGuid(guid) {
        /** @type {?} */
        const value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    }
    /**
     * @return {?}
     */
    static create() {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
    }
    /**
     * @return {?}
     */
    static createEmpty() {
        return new Guid('emptyguid');
    }
    /**
     * @param {?} guid
     * @return {?}
     */
    static parse(guid) {
        return new Guid(guid);
    }
    /**
     * @return {?}
     */
    static raw() {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
    }
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    static gen(count) {
        /** @type {?} */
        let out = '';
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    }
    /**
     * @param {?} other
     * @return {?}
     */
    equals(other) {
        return Guid.isGuid(other) && this.value === other.toString();
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.value === Guid.EMPTY;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.value;
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            value: this.value,
        };
    }
}
Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
Guid.EMPTY = '00000000-0000-0000-0000-000000000000';
if (false) {
    /** @type {?} */
    Guid.validator;
    /** @type {?} */
    Guid.EMPTY;
    /**
     * @type {?}
     * @private
     */
    Guid.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLElBQUk7Ozs7O0lBb0NiLFlBQW9CLElBQVk7UUFDNUIsSUFBSSxDQUFDLElBQUksRUFBRTtTQUNWO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXhCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDTCxDQUFDOzs7OztJQXhDTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVM7O2NBQ3BCLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFTSxNQUFNLENBQUMsTUFBTTtRQUNoQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQzs7OztJQUVNLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sTUFBTSxDQUFDLEdBQUc7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBYTs7WUFDeEIsR0FBRyxHQUFXLEVBQUU7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUU7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Ozs7O0lBZU0sTUFBTSxDQUFDLEtBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLE1BQU07UUFDVCxPQUFPO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUM7SUFDTixDQUFDOztBQTlEYSxjQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0VBQWdFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFOUYsVUFBSyxHQUFHLHNDQUFzQyxDQUFDOzs7SUFGN0QsZUFBNEc7O0lBRTVHLFdBQTZEOzs7OztJQStCN0QscUJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEd1aWQge1xyXG4gICAgcHVibGljIHN0YXRpYyB2YWxpZGF0b3IgPSBuZXcgUmVnRXhwKCdeW2EtejAtOV17OH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17NH0tW2EtejAtOV17MTJ9JCcsICdpJyk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBFTVBUWSA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNHdWlkKGd1aWQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBndWlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIGd1aWQgJiYgKGd1aWQgaW5zdGFuY2VvZiBHdWlkIHx8IEd1aWQudmFsaWRhdG9yLnRlc3QodmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoW0d1aWQuZ2VuKDIpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigzKV0uam9pbignLScpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVtcHR5KCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZCgnZW1wdHlndWlkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZShndWlkOiBzdHJpbmcpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoZ3VpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYXcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gW0d1aWQuZ2VuKDIpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigzKV0uam9pbignLScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdlbihjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgb3V0ICs9ICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIWd1aWQpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBHdWlkLkVNUFRZO1xyXG5cclxuICAgICAgICBpZiAoZ3VpZCAmJiBHdWlkLmlzR3VpZChndWlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZ3VpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogR3VpZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBHdWlkLmlzR3VpZChvdGhlcikgJiYgdGhpcy52YWx1ZSA9PT0gb3RoZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gR3VpZC5FTVBUWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=