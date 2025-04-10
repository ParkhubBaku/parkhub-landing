# Park Hub

**One Subscription, All Parking in Baku**

Park Hub is a modern, responsive web application built with React, Vite, and Tailwind CSS. It provides a unified platform for parking services in Baku. This README details the complete workflow—from local development to production deployment on Google Cloud—using Git for version control and gsutil/gcloud for cloud operations.

---

## Table of Contents

1. [Project Overview & Architecture](#project-overview--architecture)
2. [Local Development Setup](#local-development-setup)
3. [Building for Production](#building-for-production)
4. [Deployment to Google Cloud](#deployment-to-google-cloud)
   - [Cloud Storage Deployment](#cloud-storage-deployment)
   - [Load Balancing & Cloud CDN Setup](#load-balancing--cloud-cdn-setup)
5. [Git Workflow](#git-workflow)
6. [Troubleshooting & Additional Commands](#troubleshooting--additional-commands)
7. [Additional Resources](#additional-resources)

---

## 1. Project Overview & Architecture

### Overview

- **Frontend Framework:** React  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Internationalization (i18n):** i18next  
- **Deployment:** Static site deployed to Google Cloud Storage (GCS) and served via a global load balancer with Cloud CDN enabled.

### Architecture Diagram (High-Level)



              +------------------------------+
              |      Client (Browser)        |
              +--------------+---------------+
                             |
                      HTTP/HTTPS Request
                             |
            +----------------+-----------------+
            | Global Load Balancer (GCP)       |  <-- DNS (A Record) pointing to Global IP (e.g., 35.190.74.46)
            +------+--------------------------+
                   |                    |
    +--------------+                    +-------------------+
    |                                                     |



*Key Points:*
- **Google Cloud Storage (GCS):** Stores static assets.
- **Cloud CDN:** Caches assets globally for faster delivery.
- **Load Balancer:** Distributes incoming traffic.
- **DNS:** Custom domain (or IP) points to the load balancer.

---

## 2. Local Development Setup

### Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) installed. Then, in your project directory, run:

```bash
npm install


npm run start

VITE v6.2.5  ready in 398 ms
➜  Local:   http://localhost:5173/


.
├── src/
│   ├── App.jsx
│   ├── ThemeContext.js
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── logo/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   └── ...
│   ├── index.jsx
│   └── locales/
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md


npm run build


Deployment to Google Cloud

Cloud Storage Deployment
Use gsutil to deploy your static files to your GCS bucket. We recommend using rsync to ensure all files are updated.

gsutil -m rsync -r -d dist gs://parkhub-landing-bucket
-m runs operations in parallel.

-r recurses directories.

-d deletes files in the bucket that are not in the dist/ folder.

gsutil ls -r gs://parkhub-landing-bucket


Load Balancing & Cloud CDN Setup
Assuming you’ve previously set up the load balancer and CDN, verify and update resources as needed.

Backend Bucket Check:

List your backend buckets:

bash
Copy
gcloud compute backend-buckets list --project parkhub-456312
URL Map Verification:
gcloud compute url-maps describe parkhub-url-map --global --project parkhub-456312


Target HTTP Proxy:
gcloud compute target-http-proxies create parkhub-http-proxy \
  --url-map parkhub-url-map \
  --global \
  --project parkhub-456312


Global Forwarding Rule:

Create (or verify) your forwarding rule. Use the --address flag (not --ip-address):

gcloud compute forwarding-rules create parkhub-http-forwarding-rule \
  --global \
  --target-http-proxy parkhub-http-proxy \
  --ports 80 \
  --address 35.190.74.46 \
  --project parkhub-456312


Git Workflow
git status
Stage all changes:
git add .
Commit and Push Changes
git commit -m "Working version of the site with updates"
Push to the remote repository (assuming the main branch):
git push origin main




Troubleshooting & Additional Commands
Updating Cache-Control Headers:
Set cache-control metadata to bypass caching temporarily:
  gsutil setmeta -h "Cache-Control:no-cache, max-age=0" gs://parkhub-landing-bucket/index.html

gsutil Multiprocessing Workaround (MacOS)
If you experience issues with multiprocessing on MacOS, disable it by adding:
  gsutil -o "GSUtil:parallel_process_count=1" -m rsync -r -d dist gs://parkhub-landing-bucket




---

This README file includes step-by-step commands and explanations for all key areas: architecture, local development, production build, deployment to Google Cloud, and Git usage. Adjust paths, project IDs, and domain names as needed for your specific setup.






