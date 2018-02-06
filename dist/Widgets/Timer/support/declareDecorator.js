define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZURlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dpZGdldHMvVGltZXIvc3VwcG9ydC9kZWNsYXJlRGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBT0E7UUFBd0IsZ0JBQW1CO2FBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtZQUFuQiwyQkFBbUI7O1FBQ3ZDLE1BQU0sQ0FBQyxVQUFTLE1BQWdCO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkZWNsYXJlIGZyb20gXCJkb2pvL19iYXNlL2RlY2xhcmVcIjtcblxuLyoqXG4gKiBBIGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgVHlwZVNjcmlwdCBjbGFzcyBpbnRvIGEgZGVjbGFyZSBjb25zdHJ1Y3Rvci5cbiAqIFRoaXMgYWxsb3dzIGRlY2xhcmUgY29uc3RydWN0b3JzIHRvIGJlIGRlZmluZWQgYXMgY2xhc3Nlcywgd2hpY2ggbmljZWx5XG4gKiBoaWRlcyBhd2F5IHRoZSBgZGVjbGFyZShbXSwge30pYCBib2lsZXJwbGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oLi4ubWl4aW5zOiBPYmplY3RbXSkge1xuICAgIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWNsYXJlKG1peGlucywgdGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfTtcbn1cbiJdfQ==