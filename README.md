# Minimal AI Meeting Assistant

An open-source minimal AI Meeting Assistant built as a practical development project for MeetingNotesAI.org.

## Project Goal

The goal is to build a focused web application that can:

- Upload meeting audio recordings
- Generate transcripts
- Create structured meeting summaries
- Extract action items
- Store and display previous meetings

## Planned Technology Stack

### Backend

- Python
- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL

### Frontend

- React
- TypeScript
- Vite

### AI Services

- Whisper or Faster-Whisper
- Large language model for summaries and action items

## Planned Workflow

```text
Upload audio
    ↓
Store recording
    ↓
Generate transcript
    ↓
Generate summary
    ↓
Extract action items
    ↓
Display meeting results
Repository Structure
minimal-ai-meeting-assistant/
├── backend/
├── frontend/
├── docs/
├── .github/
├── .gitignore
├── LICENSE
└── README.md
Development Status

The project is currently in the foundation phase.

Documentation

The complete development series is published on MeetingNotesAI.org.

License

This project is licensed under the MIT License.


This README will evolve as new functionality is added.

## Step 7: Create the Development Roadmap

Inside the `docs` folder, create:

```text
development-roadmap.md

Add the following content:

# Development Roadmap

## Phase 1: Project Foundation

- Create the GitHub repository
- Create backend and frontend folders
- Initialize the FastAPI backend
- Initialize the React frontend
- Add environment configuration
- Add a backend health-check endpoint

## Phase 2: Audio Upload

- Build the meeting upload interface
- Validate supported audio formats
- Store uploaded recordings
- Create meeting database records
- Display upload confirmation

## Phase 3: Transcription

- Integrate Whisper or Faster-Whisper
- Create the transcription service
- Store generated transcripts
- Display transcript content

## Phase 4: Meeting Intelligence

- Generate meeting summaries
- Extract action items
- Identify owners and deadlines
- Store structured AI output

## Phase 5: User Interface

- Create a meeting history page
- Create a meeting details page
- Display processing statuses
- Improve error handling

## Phase 6: SaaS Features

- Add user registration
- Add authentication
- Separate meetings by user
- Add monthly usage limits
- Add Stripe subscriptions

## Phase 7: Production Readiness

- Add automated tests
- Add GitHub Actions
- Containerize the application
- Add production logging
- Add security controls
- Deploy the application

The roadmap gives contributors and readers a clear overview of the project’s direction.
