# hudltest
This is the repository containing tests for the hudl take home test
## Prerequisites
To run tests need to be installed next software
- playwright - (npm init playwright@latest)
- git
- Browser to run the tests
## Local installation

### Running tests on the local machine
In the project folder execute 
```
npx playwright test
```
to see the tests runnung execute
```
npx playwright test --debug
```
```
to change what browsers are being used please commeent out the browsers not needed in the file playwright.config.ts
(lines 48 - 102)