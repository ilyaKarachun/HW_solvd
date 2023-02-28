

// class UserSettings {
//     constructor(user) {
//         this.user = user;
//     }
//
//     changeSettings(settings) {
//         if (this.verifyCredentials()) {
//             // ...
//         }
//     }
//
//     verifyCredentials() {
//         // ...
//     }
// }

// SRP
class UserAuth {
    constructor(user) {
        this.user = user
    }

    verifyCredentials() {
        // ...
    }
}

class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user)
    }

    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }

}

//OCP

class AjaxAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'ajaxAdapter';
    }

    request(url) {

    }
}

class NodeAdapter extends Adapter {
    constructor() {
        super();
        this.name = 'nodeAdapter';
    }

    request(url) {

    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }

    fetch(url) {
        return this.adapter.request(url).then(() => {})
    }
    //     if (this.adapter.name === 'ajaxAdapter') {
    //         return makeAjaxCall(url).then((response) => {
    //             // обрабатываем ответ
    //         });
    //     } else if (this.adapter.name === 'httpNodeAdapter') {
    //         return makeHttpCall(url).then((response) => {
    //             // обрабатываем ответ
    //         });
    //     }
    // }
}

// function makeAjaxCall(url) {
//     // делаем запрос и возвращаем промис
// }
//
// function makeHttpCall(url) {
//     // делаем запрос и возвращаем промис
// }

// Barbara Liskov principle

// class Rectangle {
//     constructor() {
//         this.width = 0;
//         this.height = 0;
//     }
//
//     setColor(color) {
//         // ...
//     }
//
//     render(area) {
//         // ...
//     }
//
//     setWidth(width) {
//         this.width = width;
//     }
//
//     setHeight(height) {
//         this.height = height;
//     }
//
//     getArea() {
//         return this.width * this.height;
//     }
// }
//
// class Square extends Rectangle {
//     setWidth(width) {
//         this.width = width;
//         this.height = width;
//     }
//
//     setHeight(height) {
//         this.width = height;
//         this.height = height;
//     }
// }
//
// function renderLargeRectangles(rectangles) {
//     rectangles.forEach((rectangle) => {
//         rectangle.setWidth(4);
//         rectangle.setHeight(5);
//         const area = rectangle.getArea(); // BAD: Will return 25 for Square. Should be 20.
//         rectangle.render(area);
//     });
// }
//
// const rectangles = [new Rectangle(), new Rectangle(), new Square()];
// renderLargeRectangles(rectangles);

class Shape {
    setColor(color) {
        // ...
    }

    render(area) {
        // ...
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.length = 0
    }

    setLength(length) {
        this.length = length;
    }

    getArea() {
        return this.length * this.length;
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.height * this.width;
    }
}

function renderLargeShapes(shapes) {
    shapes.forEach(shape => {
        switch (shape.constructor.name) {
            case 'Square': {
                shape.setLength(5);
                break;
            }
            case 'Rectangle':
                shape.setWidth(4);
                shape.setHeight(5);
                break
        }
        const area = shape.getArea();
        shape.render(area);
    })
}

const shapes = [new Rectangle(), new Rectangle(), new Square()];
renderLargeShapes(shapes);

// DIP

// class InventoryRequester {
//     constructor() {
//         this.REQ_METHODS = ['HTTP'];
//     }
//
//     requestItem(item) {
//         // ...
//     }
// }
//
// class InventoryTracker {
//     constructor(items) {
//         this.items = items;
//
//         // Плохо то, что мы создали зависимость от конкретной реализации запроса.
//         // теперь наш метод requestItems не абстрактный и зависит от этой реализации
//         this.requester = new InventoryRequester();
//     }
//
//     requestItems() {
//         this.items.forEach((item) => {
//             this.requester.requestItem(item);
//         });
//     }
// }
//
// const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
// inventoryTracker.requestItems();


class InventoryTracker {
    constructor(items, requester) {
        this.items = items;
        this.requester = requester;
    }

    requestItems() {
        this.items.forEach(item => {
            this.requester.requestItems(item)
        })
    }
}

class InventoryRequesterV1 {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        // ...
    }
}

class InventoryRequesterV2 {
    constructor() {
        this.REQ_METHODS = ['WS'];
    }

    requestItem(item) {
        // ...
    }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();

//CLASSES VS FN

// const Animal = function(age) {
//     if (!(this instanceof Animal)) {
//         throw new Error('Instantiate Animal with `new`');
//     }
//
//     this.age = age;
// };
//
// Animal.prototype.move = function move() {};
//
// const Mammal = function(age, furColor) {
//     if (!(this instanceof Mammal)) {
//         throw new Error('Instantiate Mammal with `new`');
//     }
//
//     Animal.call(this, age);
//     this.furColor = furColor;
// };
//
// Mammal.prototype = Object.create(Animal.prototype);
// Mammal.prototype.constructor = Mammal;
// Mammal.prototype.liveBirth = function liveBirth() {};
//
// const Human = function(age, furColor, languageSpoken) {
//     if (!(this instanceof Human)) {
//         throw new Error('Instantiate Human with `new`');
//     }
//
//     Mammal.call(this, age, furColor);
//     this.languageSpoken = languageSpoken;
// };
//
// Human.prototype = Object.create(Mammal.prototype);
// Human.prototype.constructor = Human;
// Human.prototype.speak = function speak() {};

class Animal {
    constructor(age) {
        this.age = age
    }

    move() {

    }
}

class Mammal extends Animal{
    constructor(age, furColor) {
        super(age)
        this.furColor = furColor;
    }

    liveBirth () {}
}

class Human extends Mammal{
    constructor(age,furColor, languageSpoken) {
        super(age,furColor)
        this.languageSpoken = languageSpoken;
    }

    speak () {}
}
