# Database Schema

## Overview

The Minimal AI Meeting Assistant stores:

- Meetings
- Transcripts
- Summaries
- Action Items

## Meeting

Purpose:

Stores uploaded audio files and processing status.

Fields:

| Field | Type |
|---------|---------|
| id | UUID |
| title | String |
| original_filename | String |
| stored_filename | String |
| file_path | String |
| mime_type | String |
| file_size | Integer |
| status | String |
| error_message | Text |
| created_at | Timestamp |
| updated_at | Timestamp |

---

## Transcript

Purpose:

Stores speech-to-text output.

Fields:

| Field | Type |
|---------|---------|
| id | UUID |
| meeting_id | UUID |
| content | Text |
| language | String |
| created_at | Timestamp |
| updated_at | Timestamp |

---

## Summary

Purpose:

Stores AI-generated summaries.

Fields:

| Field | Type |
|---------|---------|
| id | UUID |
| meeting_id | UUID |
| summary | Text |
| key_points | Text |
| created_at | Timestamp |
| updated_at | Timestamp |

---

## Action Item

Purpose:

Stores tasks extracted from meetings.

Fields:

| Field | Type |
|---------|---------|
| id | UUID |
| meeting_id | UUID |
| description | Text |
| owner | String |
| due_date | Date |
| completed | Boolean |
| created_at | Timestamp |
| updated_at | Timestamp |

---

## Relationships

Meeting
├── Transcript (1:1)
├── Summary (1:1)
└── Action Items (1:N)
