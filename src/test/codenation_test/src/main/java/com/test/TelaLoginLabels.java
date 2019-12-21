package com.test;

import static org.junit.Assert.assertEquals;

import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;
import com.util.MetodosUtil;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class TelaLoginLabels extends MetodosUtil {

    @Test
    public void p010ValidarLabelCentralDeErros(){
        if(getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[1]/div")).getText().equals("Central de erros")) {
//            extentTest.log(LogStatus.PASS, "Validate  label: Central de erro");
        }else{
//            extentTest.log(LogStatus.SKIP, "Era esperado: Central de erros");
        }
        assertEquals("O teste falhou, era esperado: ","Central de erros",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[1]/div")).getText());
    }
    @Test
    public void p020ValidarLabelEntreComSuaCredenciais(){
        if(getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/div/small")).getText().equals("Entre com suas credenciais")) {
//            extentTest.log(LogStatus.PASS, "Validate  label: Entre com suas credenciais");
        }else{
//            extentTest.log(LogStatus.SKIP, "Era esperado: Entre com suas credenciais");
        }
        assertEquals("O teste falhou, era esperado: ","Entre com suas credenciais",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/div/small")).getText());
    }
    @Test
    public void p030ValidarLabelBTNEntrar(){
        assertEquals("O teste falhou, era esperado: ","Entrar",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[1]/div[2]/form/div[3]/button")).getText());
    }
    @Test
    public void p040ValidarLabelCriarConta(){
        assertEquals("O teste falhou, era esperado: ","Criar conta",  getDriver().findElement(By.xpath("/html/body/app-root/app-auth-layout/div/app-login/div[2]/div/div/div[2]/div/button")).getText());
    }
}
