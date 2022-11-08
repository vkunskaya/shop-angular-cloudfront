const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "sqa_a76aa42fc9a0bbae276399d085e1a10ee9eec0c6",
    options: {
      "sonar.projectName": "My Angular App",
      "sonar.projectDescription": 'Description for "My App" project...',
      "sonar.sources": "src",
      "sonar.testss": "src",
      "sonar.test.inclusions": "**/*.spec.ts",
    },
  },
  () => process.exit()
);
