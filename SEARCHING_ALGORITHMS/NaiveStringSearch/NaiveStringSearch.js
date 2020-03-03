//returns the number of times string2 has occured in string1
function stringNaive(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            // console.log(str1[i + j], str2[j])
            if (str1[i + j] !== str2[j]) {
                // console.log('break')
                break;
            };
            if (j === str2.length - 1) {
                count++;
                // console.log(count, 'check count')
            }
        }
    }
    return count;
}

console.log(stringNaive('hari said haha in hamburg', 'ha'));