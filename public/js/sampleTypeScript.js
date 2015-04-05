/**
 * Created by Andre on 3-4-2015.
 */
var FooBar = (function () {
    function FooBar() {
        this.fullName = "Andre Roussakoff";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();
var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map