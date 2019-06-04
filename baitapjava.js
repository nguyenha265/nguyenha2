function chuyen() {
    let p = document.getElementById("nhapSoTien").value;
    let goiSelect1 = document.getElementById('select1');
    let goiSelect2 = document.getElementById('select2');
    let goiOptions1 = goiSelect1.options[goiSelect1.selectedIndex].value;
    let goiOptions2 = goiSelect2.options[goiSelect2.selectedIndex].value;
    if (goiOptions1 == "optionVietNam1" && goiOptions2 == "optionVietNam2") {
        result = p * 1
    }
    if (goiOptions1 == "optionVietNam1" && goiOptions2 == "optionirac2") {
        result = p / 19.6
    }
    if (goiOptions1 == "optionVietNam1" && goiOptions2 == "optionPaKitxTan2") {
        result = p / 155.3
    }
    if (goiOptions1 == "optionirac1" && goiOptions2 == "optionirac2") {
        result = p * 1
    }
    if (goiOptions1 == "optionirac1" && goiOptions2 == "optionVietNam2") {
        result = p * 19.6
    }
    if (goiOptions1 == "optionirac1" && goiOptions2 == "optionPaKitxTan2") {
        result = p * 7.91
    }
    if (goiOptions1 == "optionPaKitxTan1" && goiOptions2 == "optionirac2") {
        result = p / 7.91
    }
    if (goiOptions1 == "optionPaKitxTan1" && goiOptions2 == "optionVietNam2") {
        result = p * 155.3
    }
    if (goiOptions1 == "optionPaKitxTan1" && goiOptions2 == "optionPaKitxTan2") {
        result = p * 1
    }
    let l = document.getElementById("i");
    i.innerText = "result  " +result.toString();

}


