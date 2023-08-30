const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
        
        if (user.dataValues.password !== password) {
            return res.status(403).json({ error: "Contraseña incorrecta" });
        }

        return res.status(200).json({
            access: true,
            userType: user.userType,
            userId: user.id 
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "soy el error del back" });
    }
};

module.exports = {
    login
};