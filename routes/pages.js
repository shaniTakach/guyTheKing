const express = require('express');
const path = require('path');
const router = express.Router();

// Controllers
const searchController = require('../Controllers/searchController');
const profileController = require('../Controllers/profileController');

// דף הבית
router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
});

// עמוד פרופיל
router.get('/profile_page', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'profile_page.html'));
});

// עמוד גלילת פרופילים
router.get('/scroll_profiles', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'views', 'scroll_profiles.html'));
});

// עדכון פרופיל
router.post('/save-profile', profileController.updateProfile);

// תצוגת פרופיל לעריכה
router.get('/edit-profile', profileController.updateProfile); // שימי לב - ייתכן שצריך לשנות לפונקציה נפרדת לעריכה

// חיפוש פרופילים
router.get('/search', searchController.searchProfile);

// עמוד 404 לכל נתיב אחר
router.use((req, res) => {
  res.status(404).sendFile(path.join(process.cwd(), 'views', 'file_not_found.html'));
});

module.exports = router;
