const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

// POST /api/projects
router.post('/', (req, res) => {
  const project = req.body;

});

// GET /api/projects
router.get('/', (req, res) => {

});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

});

// GET /api/projects/:id/actions
router.get('/:id/actions', (req, res) => {
  const { id } = req.params;

});

// PUT /api/projects/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;

});

// DELETE /api/projects/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

});

module.exports = router;