$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePageDarkSky.feature");
formatter.feature({
  "line": 3,
  "name": "Verify darksky",
  "description": "",
  "id": "verify-darksky",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 4806722022,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageDarkSkySD.verifyHomePage()"
});
formatter.result({
  "duration": 1472167038,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify timeline is displayed in correct format",
  "description": "",
  "id": "verify-darksky;verify-timeline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@timelineformat"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I entered Chicago in search box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chicago",
      "offset": 10
    }
  ],
  "location": "HomePageDarkSkySD.verifyChosenLocation(String)"
});
formatter.result({
  "duration": 5285036876,
  "status": "passed"
});
formatter.match({
  "location": "HomePageDarkSkySD.verifyTimelineFormat()"
});
formatter.result({
  "duration": 1557906088,
  "status": "passed"
});
formatter.after({
  "duration": 129667330,
  "status": "passed"
});
formatter.before({
  "duration": 2225821330,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageDarkSkySD.verifyHomePage()"
});
formatter.result({
  "duration": 1012516944,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "verify-darksky;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@temptimeline"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I expand today\u0027s timeline",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageDarkSkySD.expandToday()"
});
formatter.result({
  "duration": 2040405833,
  "status": "passed"
});
formatter.match({
  "location": "HomePageDarkSkySD.verifyTempValues()"
});
formatter.result({
  "duration": 92824459,
  "status": "passed"
});
formatter.after({
  "duration": 110700669,
  "status": "passed"
});
});