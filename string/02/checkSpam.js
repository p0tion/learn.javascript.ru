function checkSpam(str) {
    var lowerStr = str.toLocaleLowerCase();
    if (~str.indexOf('viagra') || ~str.indexOf('xxx')) {
        return true;
    }
    return false;
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");