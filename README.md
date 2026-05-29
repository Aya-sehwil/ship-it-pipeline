# Ship It Pipeline 🚀

## About
A simple Quote of the Day API built with Node.js and Express. It serves random motivational quotes in Arabic through two endpoints. The app is fully containerized with Docker and deployed automatically using a CI/CD pipeline powered by GitHub Actions and Render.

## Live URL
https://ship-it-pipeline.onrender.com/quote

## GitHub Actions Screenshot   
<img width="1920" height="913" alt="Capture" src="https://github.com/user-attachments/assets/57d205f1-a822-4967-a35b-30298ebf27c7" />

## How the pipeline works
When code is pushed to the main branch, GitHub Actions automatically triggers the CI/CD pipeline. First, the test job checks out the code, installs Node.js dependencies, and runs the automated test suite. If all tests pass, the deploy job is triggered automatically using the `needs: test` condition. The deploy job sends a POST request to Render's Deploy Hook URL, which tells Render to pull the latest code and rebuild the Docker container. The Deploy Hook URL is stored securely as a GitHub Secret so it never appears in the code. The entire process from git push to live deploy takes under a minute.

## What I would do next
1. Add a staging environment that deploys from a `develop` branch before merging to main.
2. Add a code coverage report uploaded as a GitHub Actions artifact to track test quality over time.


