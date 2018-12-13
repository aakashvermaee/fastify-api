// External Dependencies
const boom = require('boom');

// Data Model
const Car = require('../models/Car');

// CRUD APIs
// Get all Cars
exports.getCars = async (req, reply) => {
    try {
        let cars = await Car.find();
        if (cars) return cars;
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get a Car by [id]
exports.getCarById = async (req, reply) => {
    try {
        const id = req.params.id;
        let car = await Car.findById(id);
        if (car) return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Add a new Car
exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body);
        return car.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Update an exisitng Car
exports.updateCar = async (req, reply) => {
    try {
        const id = req.params.id,
            car = req.body.car;
        const { ...updateData
        } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, {
            new: true
        });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete an exisitng Car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const deleteCar = await Car.findByIdAndRemove(id);
        return deleteCar;
    } catch (err) {
        throw boom.boomify(err);
    }
}