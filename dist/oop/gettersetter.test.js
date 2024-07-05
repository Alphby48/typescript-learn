"use strict";
class Category {
    get name() {
        if (this._name) {
            return this._name;
        }
        else {
            return "empty";
        }
    }
    set name(value) {
        if (value !== "") {
            this._name = value;
        }
    }
}
const category = new Category();
category.name = "drink";
console.log(category.name);
