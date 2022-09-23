const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU4YzdlNGFjLTExYmYtNDE5OC1hNjg0LThhODUxNWYwNmQyZS0xNjYzMzU4MzcxMTA2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZjVlNjJlMGMtODk4Yi00NzM4LTk4MDgtNTJjZjUyYzVhNjEyIiwidHlwZSI6InQifQ.7jPSxmAtLuF0_99QUUOVk0rvoALuc660UiuXhoUPho8'

cypress.run({
  browser: 'chrome',
  baseUrl: 'http://localhost:3000',
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})