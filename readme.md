# Serverless API Example with Begin and Architect

## Foundations
The following examples are completely based on Free Code Camp's APIs and Micro-services Certification: Basic Node and Express. 
The original challenge has twelve sections to pass. Unfortunately their test methods are not 100% compatible with a serverless backend because it is relying on a background process to test against. Serverless functions remain stateless and do not retain any memory between invocations. This means that the FCC test server can not reliably have the same results as it is written. I have however been able to replicate the entire process with Express inside of a mono-lambda. You can see that code here: [https://github.com/pchinjr/boilerplate-express](https://github.com/pchinjr/boilerplate-express)

In this repo, I will document and recreate the same functionality to build an API, but with discrete architecture to include single use functions, shared middleware, and static hosting on serverless infrastructure with automated testing and deployments through GitHub and Begin.

To start, make sure you have NodeJS installed and a GitHub account. You can click the button below to create and deploy an app to live infrastructure on Begin.

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/pchinjr/fcc-apis-microservices-serverless)