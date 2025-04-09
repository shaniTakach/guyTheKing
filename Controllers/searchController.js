exports.searchProfile = (req, res) => {
    const query = req.query.name;
    if (query === "name") {
        res.send(`Profile found: ${query}`);
    } else {
        res.send("Profile not found.");
    }
};
