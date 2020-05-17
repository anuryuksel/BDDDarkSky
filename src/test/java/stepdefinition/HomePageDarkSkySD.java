package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.HomePageDarkSky;

public class HomePageDarkSkySD {
    private HomePageDarkSky darkSkyHome = new HomePageDarkSky();

    @Given("^I am on DarkSky HomePage$")
    public void verifyHomePage() throws InterruptedException {
        Assert.assertEquals(darkSkyHome.getDarkSkyPageTitle(), "Dark Sky - Broadway, New York, NY");
    }

    @When ("^I entered (.+) in search box$")
    public void verifyChosenLocation(String location) throws InterruptedException {
        darkSkyHome.chooseLocation(location);
        Assert.assertEquals(darkSkyHome.getDarkSkyPageTitle(), "Dark Sky - W Adams St, Chicago, IL");
    }

    @Then("^I verify timeline is displayed with two hours incremented$")
    public void verifyTimelineFormat() throws InterruptedException {
        Assert.assertTrue(darkSkyHome.verifyHourFormat("America/Chicago"), "Hours not displayed correctly");

    }
    @When("^I expand today's timeline$")
    public void expandToday() throws InterruptedException {
        darkSkyHome.expandToday();
        Thread.sleep(2000);
    }

    @Then("^I verify lowest and highest temp is displayed correctly$")
    public void verifyTempValues(){
        Assert.assertTrue(darkSkyHome.verifyLowTemp(), "Lowest Temperature is not matching");
        Assert.assertTrue(darkSkyHome.verifyHighTemp(), "Highest Temperature is not matching");
    }

}

