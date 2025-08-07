require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./src/routes/usersRoutes/authRoutes");
const userRoutes = require("./src/routes/usersRoutes/profileRoutes");
const complaintRoutes = require("./src/routes/usersRoutes/complaintRoutes");
const emergencyRoutes = require("./src/routes/usersRoutes/emergencyRoutes");
const socialRoutes = require("./src/routes/usersRoutes/socialRoutes");
const searchRoutes = require("./src/routes/usersRoutes/searchRoutes");
const notificationsRoutes = require("./src/routes/usersRoutes/notificationsRoute");
const marqueeRoutes = require("./src/routes/usersRoutes/marqueeRoutes");


const adminuserRoutes = require("./src/routes/adminRoutes/userRoutes");
const admincomplaintRoutes = require("./src/routes/adminRoutes/complaintRoutes");
const adminauthRoutes = require("./src/routes/adminRoutes/adminauthRoutes");
const emergencyNotificationRoutes = require("./src/routes/adminRoutes/emergencyNotificationRoutes");
const dashboardScreen = require("./src/routes/adminRoutes/dashboardRoutes")
const profile = require("./src/routes/adminRoutes/ProfileRoute");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static("uploads"));
app.use(
  "/uploads/complaints/images",
  express.static(path.join(__dirname, "uploads/complaints/images"))
);
app.use(
  "/uploads/complaints/videos",
  express.static(path.join(__dirname, "uploads/complaints/videos"))
);
app.use(
  "/uploads/complaints/audios",
  express.static(path.join(__dirname, "uploads/complaints/audios"))
);
app.use(
  "/uploads/complaints/documents",
  express.static(path.join(__dirname, "uploads/complaints/documents"))
);
app.use(
  "/uploads/complaints/others",
  express.static(path.join(__dirname, "uploads/complaints/others"))
);


app.use("/auth2", authRoutes);
app.use("/auth2", userRoutes);
app.use("/auth2", marqueeRoutes);
app.use("/auth2", complaintRoutes);
app.use("/auth2", emergencyRoutes);
app.use("/auth2", socialRoutes);
app.use("/auth2", searchRoutes);
app.use("/auth2", notificationsRoutes);


app.use("/admin",adminuserRoutes);
app.use("/admin",admincomplaintRoutes);
app.use("/admin",adminauthRoutes);
app.use("/admin",emergencyNotificationRoutes);
app.use("/admin",dashboardScreen);
app.use("/admin",profile)

app.get("/ping", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on ${PORT}`));
