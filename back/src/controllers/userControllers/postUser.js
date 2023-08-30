const { User } = require("../../DB_connection");

const postUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, userType, } = req.body;

        if (!firstName || !lastName || !email || !password || !phone || !userType) {
            return res.status(400).json({ error: "Faltan Datos" });
        }
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                lastName,
                password,
                phone,
                userType
            }
        });

        if (!created) {
            return res.status(409).json({ error: "El usuario ya existe" });
        }
        return res.status(200).json({ message: "User created succesfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear el usuario" });
    }
};

module.exports = {
    postUser
};


/* 

const bcrypt = require('bcrypt');
const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, userType } = req.body;
        
        if (!firstName || !lastName || !email || !password || !phone || !userType) {
            return res.status(400).json({ error: "Faltan Datos" });
        }

        // Genera un hash seguro para la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Verifica si el usuario ya existe
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                firstName,
                lastName,
                password: hashedPassword,
                phone,
                userType
            }
        });

        if (!created) {
            return res.status(409).json({ error: "El usuario ya existe" });
        }

        // Devuelve solo los datos relevantes del usuario creado
        const userResponse = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            userType: user.userType
        };

        return res.status(201).json(userResponse);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear el usuario" });
    }
};

module.exports = {
    postUser
}; */