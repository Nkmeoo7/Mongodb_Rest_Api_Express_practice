const express =require("express");
const router = express.Router();
const {getcontacts,
    cretecontacts,
    updatedContacts,
    deletecontect,
    getcontact} = require("../controllers/contectcontroller");
const { validateToken } = require("../middleware/validateTokenHandler");


    router.use(validateToken);

router.route('/').get(getcontacts);


router.route('/').post(cretecontacts);


router.route('/:id').get(getcontact);

router.route('/:id').put(updatedContacts);


router.route('/:id').delete(deletecontect);
    module.exports=router;