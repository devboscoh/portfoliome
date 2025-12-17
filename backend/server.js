require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use('/api/contact', contactRoutes);

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Boscoh Brilliant Otieno Odoyotieno Odoyo",
    contact: {
      address: "P.O. Box 179-40303",
      phone: "+254715640443",
      email: "boscobrilli8@gmail.com"
    },
    objective:
      "An organized, motivated, and adaptable individual seeking to enhance my environment while growing alongside all stakeholders...",
    skills: [
      "Proficient in MS Word, Excel, PowerPoint, and Internet applications",
      "Full stack web developer, MERN stack tech stack",
      "Strong organizational and adaptability skills",
      "Excellent interpersonal skills and expertise in resource mobilization and management"
    ],
    experience: [
      {
        title: "Environment Officer",
        company: "Nairobi City County",
        period: "September 2023 - Present",
        responsibilities: [
          "Manage the day-to-day environmental activities of the ward",
          "Oversee waste collection, management, and disposal within the ward",
          "Conduct environmental monitoring, compliance, and enforcement",
          "Organize cleanups and sensitize the community on waste management",
          "Assist in environmental policy formulation and implementation at the ward level"
        ]
      }
    ],
    education: [
      {
        institution: "PLP Africa Academy",
        degree: "Software Engineering (MERN stack)",
        period: "July To Dec 2025"
      },
      {
        institution: "Egerton University",
        degree: "Bachelor of Science in Integrated Forest Resources Management",
        period: "January 2012 - September 2015"
      }
    ]
  });
});

// Serve frontend (AFTER API routes)
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// React SPA fallback
app.get('/.*/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
