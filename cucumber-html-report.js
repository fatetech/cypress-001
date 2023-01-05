const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'jsonreport',
	reportPath: './reports/cucumber-htmlreports.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    }
})