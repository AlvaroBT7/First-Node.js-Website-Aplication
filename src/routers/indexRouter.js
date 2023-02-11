import {Router} from "express";
const router = Router();

// routing

router.get("/", (req, res) => res.render("index.ejs", {
    // this javaScript object is carried up to the ejs files to render
    title: "Index"
}))
router.get("/about", (req, res) => res.render("about.ejs", {
    // this javaScript object is carried up to the ejs files to render
    title: "About"
}))
router.get("/contact", (req, res) => res.render("contact.ejs", {
    // this javaScript object is carried up to the ejs files to render
    title: "Contact"
}))

export default router
