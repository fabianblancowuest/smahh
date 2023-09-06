const { User } = require("../../DB_connection");

const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Obtener el ID del usuario de los parámetros de la URL
        const { firstName, lastName, email, phoneNumber } = req.body;

        if(!firstName || !lastName || !email || !phoneNumber){
         return   res.status(400).json({error: "Missing data to update user"})
        }

        // Verificar si el usuario existe
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Actualizar los campos del usuario
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phoneNumber;

        // Guardar los cambios en la base de datos
        await user.save();

        return res.status(200).json({ message: "User updated successfully", newUser: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error while updating user" });
    }
};

module.exports = {
    updateUser
};