const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/gtt', async (req, res) => {
    try {
        const payload = req.body; // receber o corpo enviado pelo Cordova

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${process.env.API_KEY}`,
            payload,
            { headers: { "Content-Type": "application/json" } }
        );

        res.json(response.data);
        console.log(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao acessar API' });
    }
});


//ROTA: Retorna a chave PIX
router.get("/pix", (req, res) => {
  const pixKey = "466a9b06-3faf-44f5-917e-640d96a07703";
  res.json({ pixKey: pixKey });
});



module.exports = router;
