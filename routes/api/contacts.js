const router = require("express").Router();
const contactsController = require("../../controllers/contactsControllers");


router.route("/")
    .get(contactsController.findAll)
    .post(contactsController.create);

router 
    .route("/:id")
    .get(contactsController.findById)
    .put(contactsController.update)
    .delete(contactsController.remove);

router 
    .route("/:id/activity")
    .get(contactsController.findActivityContact)

module.exports = router;