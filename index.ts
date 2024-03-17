import express from 'express';
import { bmiCalculator } from './bmiModule';
const app = express();


app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    
    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({ error: "malformatted parameters" });
    }
    
    const bmi = new bmiCalculator(height, weight);
    bmi.calculateBMI();

    res.json({
       height,
        weight,
        bmi: bmi.result
    });
    });

app.use(express.json());

app.post('/exercises', (req, res) => {
    const dailyHours = req.body.daily_exercises;
    const target = req.body.target;
    
    if (!dailyHours || !target) {
        res.status(400).json({ error: "parameters missing" });
    }
    
    if (!Array.isArray(dailyHours) || isNaN(target)) {
        res.status(400).json({ error: "malformatted parameters" });
    }
    
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter((h: number) => h > 0).length;
    const average = dailyHours.reduce((a: any, b: any) => a + b, 0) / periodLength;
    const success = average >= target;
    const rating = success ? 3 : average >= target - 1 ? 2 : 1;
    const ratingDescription = rating === 3 ? 'a good week!' : rating === 2 ? 'not too bad but could be better' : 'lazy week!';
    
    res.json({
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    });
    });

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});