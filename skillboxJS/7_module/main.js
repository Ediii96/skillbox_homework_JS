'use strict';

// petrol - бензин
// window - окна
// seat - сидения

class Vehicle {
    constructor(name, petrol, window, seat){
        this.speed = 0;
        this.name = name;
        this.petrol = petrol,
        this.window = window,
        this.seat = seat
    }

    traffic(speed){
        this.speed += speed;
        console.log(`${this.name} заправляется товливом ${this.petrol}, имеет ${this.window} окна, и ${this.seat} сидения. Двигается со скоростью ${this.speed} км.ч.`);
    }
    output(){
        traffic(0);
    }
}

class Car extends Vehicle {
    output(){
        super.traffic(40);
    }
}

class Airplane extends Vehicle {
    output(){
        super.traffic(900);
    }
}

class Ship extends Vehicle {
    output(){
        super.traffic(80);
    }
}

let car = new Car('Жигуль', 95, 'прямоугольные', 'твёрдые');
let airplane = new Airplane('Боинг', 'ракетным', 'круглые', 'мягкие');
let ship = new Ship('Яхта', 98, 'круглые', 'мягкие');

car.output();
airplane.output();
ship.output();