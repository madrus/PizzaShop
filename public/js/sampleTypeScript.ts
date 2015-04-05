/**
 * Created by Andre on 3-4-2015.
 */
class FooBar {
  private fullName = "Andre Roussakoff";

  showMe() {
    console.log(this.fullName)
  }
}

var foo = new FooBar();
foo.showMe();