const router = require("express").Router();
const contactsController = require("../../controllers/contactsControllers");


router.route("/")
    .get(contactsController.findAll)
    .post(booksController.create);

router 
    .route("/:id")
    .get(contactsController.findById)
    .put(contactsController.update)
    .delete(contactsController.remove);


module.exports = router;