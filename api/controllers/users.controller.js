const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

function getUserById (req, res) {
  UserModel
    .findById(req.params.userId)
    .populate('games')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.userId })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

module.exports = {
  getUserById,
  deleteUserById,
  updateUser
}
