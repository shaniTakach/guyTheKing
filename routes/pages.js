const express=require('express');
const path=require('path');
const router=express.Router();

const searchController = require('../Controllers/searchController');
const profileController = require('../Controllers/profileController');
router.post('/save-profile', profileController.updateProfile);


router.get('/search', searchController.searchProfile);
router.get('/edit-profile', profileController.updateProfile);
router.get('/', (req, res) => {
    res.sendFile(path.join("../views/index.html"));
});
router.get('/profile_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'profile_page.html'));
});
router.get('/scroll_profiles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'scroll_profiles.html'));
});
router.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'file_not_found.html'));
});

module.exports=router;

