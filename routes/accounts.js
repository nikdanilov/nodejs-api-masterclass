const express = require("express");
const {
  getAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("../controllers/accounts");

const router = express.Router();

router.route("/")
    .get(getAccounts)
    .post(createAccount);

router.route("/:id")
    .get(getAccount)
    .put(updateAccount)
    .delete(deleteAccount);

module.exports = router;
