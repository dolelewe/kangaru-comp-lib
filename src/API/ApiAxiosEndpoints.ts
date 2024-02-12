const baseUrl = "https://testapi.kula.work/finserv/api/v1/\n";
const EndPoints = {
    details: `${baseUrl}collections/get-global-transaction-details?reference=`,
    intialize : `${baseUrl}collections/charge-fw`,
    chargeCard : `${baseUrl}collections/charge-fw`,
    otpValidation: `${baseUrl}collections/validate-charge-fw`,
    verifyTransaction: `${baseUrl}collections/verify-transaction-status?reference=`
}
export default EndPoints;
