const router = require("express").Router();
const userRoutes = require("./user");
const activitiesRoutes = require("./activities");
const contactsRoutes = require("./contacts");

router.use("/user", userRoutes);
router.use("/activities", activitiesRoutes);
router.use("/contacts", contactsRoutes);

module.exports = router;
