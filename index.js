const mtnPrefixes = ["7025", "7026", "703", "704", "706", "803", "806", "810", "813", "814", "816", "903", "906"];
const gloPrefixes = ["805", "807", "705", "815", "811", "905"];
const airtelPrefixes = ["802", "808", "708", "812", "701", "902"];
const etisalatPrefixes = ["809", "818", "817", "909"];

const phoneNumberElement = document.getElementById('phoneNumber');
phoneNumberElement.addEventListener("keyup", function(e) {
    let phoneNumber = e.target.value;
    let countryCode = '';

    if(phoneNumber.startsWith('+234')) { // +2349038814235
        phoneNumber = phoneNumber.slice(4)
        countryCode = '+234';
    } else if(phoneNumber.startsWith('234')) { // 2349038814235
        phoneNumber = phoneNumber.slice(3)
        countryCode = '234';
    } else if(phoneNumber.startsWith('0')) { // 09038814235123
        phoneNumber = phoneNumber.slice(1)
        countryCode = '0';
    }

    if(phoneNumber.length >= 10) {
        phoneNumber = phoneNumber.slice(0,10);
        e.target.value = countryCode + phoneNumber
        console.log(phoneNumber)

        let matched = false;
        for (let prefix of mtnPrefixes) {
            if (phoneNumber.startsWith(prefix)) {
                matched = true;
                break;
            }
        }
        if(matched == true) {
            alert('MTN Matched');
            return false;
        }
        
        for (let prefix of gloPrefixes) {
            if (phoneNumber.startsWith(prefix)) {
                matched = true;
                break;
            }
        }
        if(matched == true) {
            alert('GLO Matched');
            return false;
        }
        
        for (let prefix of airtelPrefixes) {
            if (phoneNumber.startsWith(prefix)) {
                matched = true;
                break;
            }
        }
        if(matched == true) {
            alert('AIRTEL Matched');
            return false;
        }
        
        for (let prefix of etisalatPrefixes) {
            if (phoneNumber.startsWith(prefix)) {
                matched = true;
                break;
            }
        }
        if(matched == true) {
            alert('ETISALAT Matched');
            return false;
        }

        alert('No Carrier Matches found!')
    }
})
