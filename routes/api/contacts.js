const router = require("express").Router();
const contactsController = require("../../controllers/contactsControllers");


router.route("/")
    .get(contactsController.findAll)
    .post(contactsController.create);

router 
    .route("contacts/:id")
    .get(contactsController.findById)
    .put(contactsController.update)
    .delete(contactsController.remove);

router 
    .route("contacts/:id/activity")
    .get(contactsController.findActivityContact)

module.exports = router;