$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/about.feature");
formatter.feature({
  "line": 1,
  "name": "About Page",
  "description": "",
  "id": "about-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify about page details",
  "description": "",
  "id": "about-page;verify-about-page-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@rumman"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click About link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.launch_url()"
});
formatter.result({
  "duration": 18614824200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.User_click_About_link()"
});
formatter.result({
  "duration": 4538587000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify about page details",
  "description": "",
  "id": "about-page;verify-about-page-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@rumman"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User click About link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.launch_url()"
});
formatter.result({
  "duration": 19156475200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.User_click_About_link()"
});
formatter.result({
  "duration": 4538517900,
  "status": "passed"
});
});