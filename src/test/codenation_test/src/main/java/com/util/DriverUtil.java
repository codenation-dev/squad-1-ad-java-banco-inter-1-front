package com.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Set;
import java.util.concurrent.TimeUnit;

public class DriverUtil {
    //Declaração de objetos referente ao driver

    private static WebDriver driver;
    private static WebDriverWait wait;

    //Declaração do tempo de espera util nas configurações do driver

    private static final int TEMPO_DEFAULT_ESPERA = 30000;

    //getters e setters dos objetos da classe

    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver(WebDriver driver) {
        DriverUtil.driver = driver;
    }

    public static void setWait() {
        DriverUtil.wait = (new WebDriverWait(getDriver(), TEMPO_DEFAULT_ESPERA));
    }

    public static WebDriverWait getWait() {
        return wait;
    }

    //Configurações para carregamento do driver

    public static void carregarDriver() {
        if (getDriver() == null) {
			//SO WINDOWS
//          System.setProperty("webdriver.chrome.driver", "../codenation_test/src/main/resources/chromedriverWin.exe");
			//SO MAC
            System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriverMac");
			//SO Lin
            //System.setProperty("webdriver.chrome.driver", "../codenation_test/src/main/resources/chromedriverLin.exe");
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            setDriver(new ChromeDriver(options));
            getDriver().manage().timeouts().implicitlyWait(TEMPO_DEFAULT_ESPERA, TimeUnit.SECONDS);
        }

    }

    //Metodo para mover o visão do driver para uma instancia/aba desejada definido por parametro String urlPage

    public static boolean carregarMoverAba(String urlPage){
        boolean abaLocalizada = false;
        Set<String> Abas  = getDriver().getWindowHandles();
        for(String aba:Abas){
            getDriver().switchTo().window(aba);
            if(getDriver().getCurrentUrl().equals(urlPage)){
                abaLocalizada = true;
                break;
            }
        }
        return abaLocalizada;
    }

    //Metodo que pausa a execuação do teste por determinado teste definido por parametro int millis

    public static void aguardarTempo(int millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
