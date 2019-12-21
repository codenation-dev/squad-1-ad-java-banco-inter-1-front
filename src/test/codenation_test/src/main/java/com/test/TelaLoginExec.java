package com.test;

import com.relevantcodes.extentreports.LogStatus;
import com.util.MetodosUtil;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

import static org.junit.Assert.assertEquals;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TelaLoginExec extends MetodosUtil {

    @Test
    public void p010ExcecaoEmailMenor10Caracteres() {
        getDriver().findElement(By.name("email")).sendKeys("123456789");
        getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[1]/div")).click();
        assertEquals("O teste falhou, era esperado: ","O e-mail precisar ter no mínimo 10 caracteres!",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/form/div[1]/div[2]/div")).getText());

    }

    @Test
    public void p020ExcecaoSenhaMenor3Caracteres() {
        getDriver().findElement(By.name("password")).sendKeys("12");
        getDriver().findElement(By.name("password")).sendKeys(Keys.TAB);
        assertEquals("O teste falhou, era esperado: ","A senha precisar ter no mínimo 3 caracteres!",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/form/div[2]/div[2]/div")).getText());
    }
}
