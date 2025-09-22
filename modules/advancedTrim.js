String.prototype.advancedTrim = function(charArray) {
    if(!charArray || charArray.length === 0) {
        return this.trim();
    }
    const workArray = charArray.includes(" ") ? [...charArray] : [...charArray, " "];
    const workingString = this;
    const charSet = new Set(workArray);
    let startIndex = 0;
    let stopLeft = false;
    let stopRight = false;
    let endIndex = workingString.length - 1;
    let i = 0;

    while(startIndex <= endIndex) {
        if(stopLeft && stopRight) break;
        if(!stopLeft) {
            if(charSet.has(workingString[i]) ) {
                startIndex++;
            } else {
                stopLeft = true;
            }
        }

        if(!stopRight) {
            if(charSet.has(workingString[workingString.length - 1 - i]) ) {
                endIndex--;
            } else {
                stopRight = true;
            }
        }

        i++;
    }

    return workingString.substring(startIndex, endIndex+1);
}
