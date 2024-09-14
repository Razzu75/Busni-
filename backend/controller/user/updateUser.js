const User = require("../../models/userModel");

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId;

    const { userId, email, name, role, area, city, phoneno } = req.body;

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
      ...(area && { area: area }),
      ...(city && { city: city }),
      ...(phoneno && { phoneno: phoneno }),
    };

    const user = await User.findByPk(sessionUser);

    console.log("user.role", user.role);

    if (user.role !== "ADMIN") {
      throw new Error("Unauthorized to update user");
    }

    const [updated] = await User.update(payload, {
      where: { id: userId },
      returning: true,
    });

    if (!updated) {
      throw new Error("User not found or not updated");
    }

    const updatedUser = await User.findByPk(userId);

    res.json({
      data: updatedUser,
      message: "User Updated",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateUser;