package com.suite;

import org.junit.internal.TextListener;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;

public class Test {

    public static void main (String args[]){
        Result result = JUnitCore.runClasses(SuiteTest.class);
        //System.out.println(result.getRunCount());

        JUnitCore junit = new JUnitCore();
        junit.addListener(new TextListener(System.out));
        //Result result = junit.run(SuiteTest.class);
        resultReport(result);
    }
    public static void resultReport(Result result) {
        System.out.println("Finished Result\n .Failures: " +
                result.getFailureCount() + "\n. Ignored: " +
                result.getIgnoreCount() + "\n. Tests run: " +
                result.getRunCount() + "\n. Time: " +
                result.getRunTime() + "\nms.");
    }
}
