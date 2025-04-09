exports.updateProfile = (req, res) => {
    const { user_id, name, age, interests, city } = req.body; 
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }
        

        profiles.forEach((user) => {
            if (user.id === parseInt(user_id)) {
                user.name = name;
                user.age = age;
                user.interests = interests;
                user.city = city;
                userFound = true;
            }
        });

        if (userFound) {
            fs.writeFile(path, JSON.stringify(profiles, null, 4), (err) => {
                if (err) {
                    return res.status(500).send('Error saving data.');
                }
                res.send(`Profile of user ${user_id} updated successfully!`);
            });
        } else {
            res.send('User not found.');
        }
    });
};
