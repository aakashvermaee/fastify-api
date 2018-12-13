const carController = require('../controllers/carController');

const carControllerRoutes = [{
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    }, {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getCarById
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
        schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
    }
];

exports.routes = [carControllerRoutes];