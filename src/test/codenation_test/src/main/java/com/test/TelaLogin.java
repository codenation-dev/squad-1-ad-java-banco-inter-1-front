package com.test;

import com.util.MetodosUtil;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TelaLogin extends MetodosUtil {

    @Test
    public void p010InserirLogin() {
        getDriver().findElement(By.name("email")).clear();
        getDriver().findElement(By.name("email")).sendKeys("dnprocks@yahoo.com.br");
    }

    @Test
    public void p020InserirSenha() {
        getDriver().findElement(By.name("password")).clear();
        getDriver().findElement(By.name("password")).sendKeys("123");
    }

    @Test
    public void p030ClicarBTNLogin() {
        getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/form/div[3]/button")).click();
    }
}
