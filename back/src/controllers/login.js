const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "Missing data" });
        }

        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: "User not Found" });
        
        if (user.dataValues.password !== password) {
            return res.status(403).json({ message: "Incorrect password" });
        }

        return res.status(200).json({
            access: true,
            userType: user.userType,
            userId: user.id,
            userName: user.firstName,
            userEmail: user.email 
        });

    } catch (error) {
        return res.status(500).json({ error: error });
    }
};

module.exports = {
    login
};