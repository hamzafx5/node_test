import express from "express";
const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({
        ip: req.ip,
        ips: req.ips,
        date: Date.now(),
        message: "The app is running...",
        userAgent: req.headers["user-agent"],
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("App is running on PORT::%d", PORT));
