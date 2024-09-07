const userModel = require("../../models/userModel");

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

    const user = await userModel.findById(sessionUser);

    console.log("user.role", user.role);

    if (user.role !== "ADMIN") {
      throw new Error("Unauthorized to update user");
    }

    const updateUser = await userModel.findByIdAndUpdate(userId, payload, {
      new: true,
    });

    res.json({
      data: updateUser,
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
