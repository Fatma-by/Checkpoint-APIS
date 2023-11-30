
const User = require("../models/User");



app.get('/users', async (req, res) => {
    console.log(res)
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
    }
  });
  
  // Route POST pour ajouter un nouvel utilisateur
  app.post('/user', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur.' });
    }
  });
  
  // Route PUT pour modifier un utilisateur par ID
  app.put('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;
  
      await User.findByIdAndUpdate(userId, updatedUser);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la modification de l\'utilisateur.' });
    }
  });
  
  // Route DELETE pour supprimer un utilisateur par ID
  app.delete('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      await User.findByIdAndDelete(userId);
  
      res.sendStatus(204); // Pas de contenu, succès
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur.' });
    }
  });
  