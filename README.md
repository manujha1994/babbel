# Email Guesser Service

## Motivation

This repository contains a solution designed for an assignment from Babbel, aimed at building a simple yet effective service to derive email addresses based on user input (full name and company domain) using a known dataset. The use case revolves around Babbel's outreach to various business representatives, where the challenge is to derive missing email addresses based on patterns observed from a sample dataset.

## Use Case

Babbel is launching a new service to help companies promote language learning to their employees. To reach out to the right contacts within these companies, we need a way to derive the email addresses of potential business representatives. Given the full names and company domains, and with the assumption that companies follow uniform email formats, this solution helps predict email addresses when direct data is unavailable.

The use case can be summarized as:
- Accept full name and company domain.
- Derive the email address based on a known dataset of email formats (e.g., first_name_last_name or first_name_initial_last_name).

## Solution Overview

This repository consists of two parts:
1. **Frontend - babbel-web**: A Single Page Application (SPA) built using React to allow users to input full names and company domains and display derived email addresses. The SPA interacts with the backend service to fetch the email addresses.
2. **Backend - babbel-service**: A microservice built with Node.js that handles the logic for deriving email addresses based on the given data. It analyzes existing email patterns and applies them to new input to derive possible email addresses.

## Key Features

- **SPA (React)**: Simple and user-friendly UI to accept input data (full name and company domain) and display results.
- **Node.js Backend**: REST API that accepts input data and responds with the derived email address or an error if the derivation is not possible.
- **Modular Architecture**: Both the frontend and backend are structured in a modular way, making the code maintainable and scalable.
- **Sample Dataset**: The backend service uses a sample JSON dataset for deriving email formats.

## Project Structure

### Frontend
- React-based SPA with modular components.
- API service for sending user input to the backend.
- Responsive design with testing for key components.

### Backend
- Node.js microservice that exposes an API endpoint to handle the derivation logic.
- Uses a static JSON file to recognize email patterns for different companies.
- Error handling and validation for missing or invalid data.

## Additional Details

For specific setup instructions, please refer to the respective README files in the `babbel-web` and `babbel-service` directories.

## Conclusion

This repository demonstrates a complete end-to-end solution for deriving email addresses from input data, balancing simplicity and functionality. It addresses Babbel's specific challenge of reaching out to new contacts efficiently by deriving their email addresses using patterns observed from existing data.
