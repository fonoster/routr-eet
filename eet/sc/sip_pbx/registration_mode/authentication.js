
module.exports = function(done) {
    const SIPpW = require('../../../sippw')
    const result = new SIPpW(process.env.DUT_HOST, 5061, 120000)
        .withScenario('scenarios/sc/sip_pbx/registration_mode/authentication.xml')
        .withInf('scenarios/sc/common/gateways.csv')
        .setInfIndex('gateways.csv', 0)
        .withTraceError()
        .withTraceMsg()
        .start()

    done(result.stderr ? result : void(0))
}
