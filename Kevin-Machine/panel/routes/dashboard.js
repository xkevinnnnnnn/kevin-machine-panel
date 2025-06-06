import express from "express";
import fs from "fs";
const router = express.Router();

const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
};

router.get("/", ensureAuth, (req, res) => {
  const config = JSON.parse(fs.readFileSync("./config/config.json", "utf8"));
  res.render("dashboard", { user: req.user, config });
});

router.post("/save", ensureAuth, (req, res) => {
  fs.writeFileSync("./config/config.json", JSON.stringify(req.body, null, 2));
  res.redirect("/dashboard");
});

export default router;