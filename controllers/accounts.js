// @desc    Get all accounts
// @route   GET /api/v1/accounts
// @access  Public
exports.getAccounts = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get all accounts` });
};

// @desc    Get single accounts
// @route   GET /api/v1/accounts/:id
// @access  Public
exports.getAccount = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get account # ${req.params.id}` });
};

// @desc    Create new account
// @route   POST /api/v1/accounts
// @access  Public
exports.createAccount = (req, res, next) => {
  res.status(201).json({ success: true, msg: `Create new account` });
};

// @desc    Update account
// @route   PUT /api/v1/accounts/:id
// @access  Public
exports.updateAccount = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update account # ${req.params.id}` });
};

// @desc    Delete account
// @route   DELETE /api/v1/accounts/:id
// @access  Public
exports.deleteAccount = (req, res, next) => {
  res
    .status(204)
    .json({ success: true, msg: `Delete account # ${req.params.id}` });
};
