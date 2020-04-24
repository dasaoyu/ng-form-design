/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Guid = /** @class */ (function () {
    function Guid(guid) {
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
    Guid.isGuid = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        /** @type {?} */
        var value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    };
    /**
     * @return {?}
     */
    Guid.create = /**
     * @return {?}
     */
    function () {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
    };
    /**
     * @return {?}
     */
    Guid.createEmpty = /**
     * @return {?}
     */
    function () {
        return new Guid('emptyguid');
    };
    /**
     * @param {?} guid
     * @return {?}
     */
    Guid.parse = /**
     * @param {?} guid
     * @return {?}
     */
    function (guid) {
        return new Guid(guid);
    };
    /**
     * @return {?}
     */
    Guid.raw = /**
     * @return {?}
     */
    function () {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
    };
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    Guid.gen = /**
     * @private
     * @param {?} count
     * @return {?}
     */
    function (count) {
        /** @type {?} */
        var out = '';
        for (var i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    /**
     * @param {?} other
     * @return {?}
     */
    Guid.prototype.equals = /**
     * @param {?} other
     * @return {?}
     */
    function (other) {
        return Guid.isGuid(other) && this.value === other.toString();
    };
    /**
     * @return {?}
     */
    Guid.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.value === Guid.EMPTY;
    };
    /**
     * @return {?}
     */
    Guid.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    /**
     * @return {?}
     */
    Guid.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            value: this.value,
        };
    };
    Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
    Guid.EMPTY = '00000000-0000-0000-0000-000000000000';
    return Guid;
}());
export { Guid };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZ3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFvQ0ksY0FBb0IsSUFBWTtRQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ1Y7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNMLENBQUM7Ozs7O0lBeENhLFdBQU07Ozs7SUFBcEIsVUFBcUIsSUFBUzs7WUFDcEIsS0FBSyxHQUFXLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDckMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVhLFdBQU07OztJQUFwQjtRQUNJLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7O0lBRWEsZ0JBQVc7OztJQUF6QjtRQUNJLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFYSxVQUFLOzs7O0lBQW5CLFVBQW9CLElBQVk7UUFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRWEsUUFBRzs7O0lBQWpCO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFYyxRQUFHOzs7OztJQUFsQixVQUFtQixLQUFhOztZQUN4QixHQUFHLEdBQVcsRUFBRTtRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFlTSxxQkFBTTs7OztJQUFiLFVBQWMsS0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakUsQ0FBQzs7OztJQUVNLHNCQUFPOzs7SUFBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFTSx1QkFBUTs7O0lBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLHFCQUFNOzs7SUFBYjtRQUNJLE9BQU87WUFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNOLENBQUM7SUE5RGEsY0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLGdFQUFnRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTlGLFVBQUssR0FBRyxzQ0FBc0MsQ0FBQztJQTZEakUsV0FBQztDQUFBLEFBaEVELElBZ0VDO1NBaEVZLElBQUk7OztJQUNiLGVBQTRHOztJQUU1RyxXQUE2RDs7Ozs7SUErQjdELHFCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgnXlthLXowLTldezh9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezR9LVthLXowLTldezEyfSQnLCAnaScpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzR3VpZChndWlkOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZ3VpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBndWlkICYmIChndWlkIGluc3RhbmNlb2YgR3VpZCB8fCBHdWlkLnZhbGlkYXRvci50ZXN0KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogR3VpZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHdWlkKFtHdWlkLmdlbigyKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMyldLmpvaW4oJy0nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFbXB0eSgpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoJ2VtcHR5Z3VpZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UoZ3VpZDogc3RyaW5nKTogR3VpZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHdWlkKGd1aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmF3KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFtHdWlkLmdlbigyKSwgR3VpZC5nZW4oMSksIEd1aWQuZ2VuKDEpLCBHdWlkLmdlbigxKSwgR3VpZC5nZW4oMyldLmpvaW4oJy0nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZW4oY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvdXQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dCArPSAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFndWlkKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gR3VpZC5FTVBUWTtcclxuXHJcbiAgICAgICAgaWYgKGd1aWQgJiYgR3VpZC5pc0d1aWQoZ3VpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGd1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMob3RoZXI6IEd1aWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gR3VpZC5pc0d1aWQob3RoZXIpICYmIHRoaXMudmFsdWUgPT09IG90aGVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEd1aWQuRU1QVFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvSlNPTigpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl19