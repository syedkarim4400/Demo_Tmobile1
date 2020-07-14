package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;

public class StepDef {
	WebDriver driver;
	
	@Given("^Launch url$")
	public void launch_url() throws Throwable{
		
		System.setProperty("webdriver.chrome.driver", "\\C:\\Driver\\chromedriver.exe\\");
		driver= new ChromeDriver();
		driver.get("https://www.xcodeitc.com/");
		
		driver.manage().window().maximize();
		
		
	}
	@Given("^User click About link$")
	public void User_click_About_link()throws Throwable {
		
		driver.findElement(By.xpath("//span[contains(text(),'Courses')]")).click();
		
		driver.close();
	}

}
