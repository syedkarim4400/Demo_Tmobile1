package StepDef;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = {"src/test/resources"} , format = {"json:target/cucumber.json","html:target/site/cucumber-pretty"},
glue = "StepDef",
tags= {"@rumman"})

public class TestRunner extends AbstractTestNGCucumberTests {

}
 