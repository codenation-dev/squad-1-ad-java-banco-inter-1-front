package com.suite;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;
import com.test.TelaLogin;
import com.test.TelaLoginExec;
import com.test.TelaLoginLabels;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import com.util.MetodosUtil;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import com.relevantcodes.extentreports.ExtentReports;


@RunWith(Suite.class)
@Suite.SuiteClasses({
        TelaLoginLabels.class,
        TelaLoginExec.class,
        TelaLogin.class,
})
public class SuiteTest extends MetodosUtil {

    @BeforeClass
    public static void setUp() {

        //configurações de browser quando necessário
        carregarDriver();

//        extentTest.log(LogStatus.INFO, "Browser Launched");
        //carregamento da pagina web
        getDriver().navigate().to("https://codenation-develop.herokuapp.com/#/login");
//        extentTest.log(LogStatus.INFO, "Navigated tohttps://codenation-develop.herokuapp.com/#/login");
//        extentTest.log(LogStatus.PASS, "Get the WebSite title");
    }
    @AfterClass
    public static void finTest(){

//        extent.endTest(extentTest);
        extent.flush();
    }
}
