const { User } = require("../../DB_connection");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; 
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const existingUserWithEmail = await User.findOne({ where: { email } });

    if (existingUserWithEmail && existingUserWithEmail.id !== id) {
      return res.status(400).json({ error: "Email user already exists" });
    }

    // user.firstName = firstName;
    // user.lastName = lastName;
    user.email = email;
    user.phone = phoneNumber;
    user.password = password;

    await user.save();
    return res
      .status(200)
      .json({ message: "User updated successfully", newUser: user });
      
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error while updating user" });
  }
};

module.exports = {
  updateUser,
};





