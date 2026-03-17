const express = require('express')
const verifyToken = require('../middlewares/authMiddleware')
const authorizedRoles = require('../middlewares/roleMiddleware')
const router = express.Router()

// only admin can access this router
router.get(
    "/admin",
    verifyToken,
    authorizedRoles("admin"),
    (req, res) => {
        res.json({message: "Welcome admin"})
    }
)

// both admin can access this router
router.get(
    "/manager",
    verifyToken,
    authorizedRoles("admin", "manager"),
    (req, res) => {
        res.json({message: "Welcome Manager"})
    }
)

// all can acees this router
router.get(
    "/user",
    verifyToken,
    authorizedRoles("admin", "manager", "user"),
    (req, res) => {
        res.json({message: "Welcome User"})
    }
)

module.exports = router