package com.util;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import org.openqa.selenium.JavascriptExecutor;

public class MetodosUtil extends DriverUtil {

    //Declaração de objetos referente ao JavascriptExecutor

    private static JavascriptExecutor js;
//    public static ExtentTest extentTest = extent.startTest("Tela Login Labels","Validação labels tela login");

    //public static String extentReportFile = System.getProperty("user.dir") + "\\report\\extentReportFile.html";
    //public static String extentReportImage = System.getProperty("user.dir") + "\\report\\extentReportImage.png";
    public static ExtentReports extent = new ExtentReports(System.getProperty("user.dir") + "\\report\\extentReportFile.html", false);
    //public static ExtentTest extentTest = extent.startTest("My First Test","Verify WebSite Title");

    //getters e setters dos objetos da classe

    public static JavascriptExecutor getJs() {
        return js;
    }

    public static void setJs(JavascriptExecutor js) {
        MetodosUtil.js = js;
    }

    //Metodo que executa um comando na sintaxe do javascript mapeada previamente no console do navegador tendo como parametro String comando

    public static void executorJavaScript(String comando) {
        if (comando.contains("]')")) {
            aguardarElementoVisivel(comando.substring(0, comando.lastIndexOf("]')") + 3));
        }
        if (getDriver() instanceof JavascriptExecutor) {
            setJs((JavascriptExecutor) getDriver());
            getJs().executeScript(comando);
            aguardarPaginaCarregar();
        }
    }

    //Metodo que executa e retorna uma string de um comando na sintaxe do javascript mapeada previamente no console do navegador tendo como parametro String comando

    public static String returnExecutorJavaScript(String comando) {
        aguardarElementoVisivel(comando);
        if (getDriver() instanceof JavascriptExecutor) {
            try {
                setJs((JavascriptExecutor) getDriver());
                aguardarPaginaCarregar();
                return getJs().executeScript(comando).toString();
            } catch (Exception e) {
                e.printStackTrace();
                return e.toString();
            }
        } else {
            return null;
        }
    }

    //Metodo que executa e retorna um boolean de um comando na sintaxe do javascript mapeada previamente no console do navegador tendo como parametro String comando

    public static Boolean returnExecutorJavaScriptBoolean(String comando) {
        aguardarElementoVisivel(comando);
        if (getDriver() instanceof JavascriptExecutor) {
            try {
                setJs((JavascriptExecutor) getDriver());
                aguardarPaginaCarregar();
                return (Boolean) getJs().executeScript(comando);
            } catch (Exception e) {
                return null;
            }
        } else {
            return null;
        }
    }

    //Metodo que provoca uma pausa temporaia e limitada para que o sistema carregue um determinado elemento tendo como parametro String elemento

    public static void aguardarElementoVisivel(String elemento) {
        elemento = elemento.replace("return ", "");
        elemento = elemento.replace(".innerText", "");
        setJs((JavascriptExecutor) getDriver());
        int count = 0;
        boolean saida = false;
        do {
            aguardarTempo(200);
            if (getJs().executeScript("return " + elemento + ";") != null) {
                saida = true;
            }
            if (count == 200) {
                saida = true;
            }
            count++;
        } while (!saida);
    }

    //Metodo  que provoca uma pausa temporaia e limitada para que o sistema carregue uma página web

    public static void aguardarPaginaCarregar() {
        setJs((JavascriptExecutor) getDriver());
        int count = 0;
        boolean saida = false;
        do {
            aguardarTempo(1000);
            if (Integer
                    .parseInt(getJs().executeScript("return document.body.parentElement.children[1].children.length;")
                            .toString()) >= 1) {
                saida = true;
            }
            if (count == 100) {
                getJs().executeScript("location.reload();");
            }
            if (count == 200) {
                saida = true;
            }
            count++;
        } while (!saida);
    }
}