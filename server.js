// Backend: server.js


import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/form_submissions', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schema for form submissions
const SubmissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});
const Submission = mongoose.model('Submission', SubmissionSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to receive form submissions
app.post('/api/submissions', async (req, res) => {
    try {
        const submission = new Submission(req.body);
        await submission.save();
        res.status(201).send('Submission received');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving submission');
    }
});

// API endpoint to retrieve form submissions
app.get('/api/submissions', async (req, res) => {
    try {
        const submissions = await Submission.find().sort({ timestamp: -1 });
        res.json(submissions);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching submissions');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});