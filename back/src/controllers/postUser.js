const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, userType } = req.body;
        
        if (!email || !phone) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const userCreated = await User.findOrCreate({
            where: { email },
            defaults: { firstName, lastName, phone, userType }
        });

        return res.status(200).json(userCreated);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear el usuario" });
    }
};

module.exports = {
    postUser
};