 const express = require('express');
const app = express();

const quotes = [
  "كل يوم هو فرصة جديدة للنجاح",
  "لا تستسلم، أفضل ما في حياتك لم يأتِ بعد",
  "الإرادة تصنع المستحيل"
];

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/quote', (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: random });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

module.exports = app;