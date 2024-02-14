const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({
                response,
                msg: "Service created successfully!",
            });
        } catch (error) {
            console.log(error);
        }
    },

    show: async (req, res) => {
        try {
        } catch (error) {
            console.log(error);
        }
    },

    store: async (req, res) => {
        try {
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (req, res) => {
        try {
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = serviceController;
