document.addEventListener("DOMContentLoaded", (event) => {
    getDate();
});

function getDate() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    if (currentDay < 10) currentDay = "0" + currentDay;
    if (currentMonth < 10) currentMonth = "0" + currentMonth;

    const formattedToday = currentYear + "-" + currentMonth + "-" + currentDay;

    const dateControl = document.getElementById("todays_date");
    dateControl.value = formattedToday;
}

function resetForm() {
    document.getElementById("panther-form").reset();
    getDate();
}

function printlabel() {
    var PartNumber = document.getElementById("PartNumber").value;
    var SerialNumber = document.getElementById("SerialNumber").value;

    var ReportedIssue = document.getElementById("ReportedIssue").value;

    var ip_addr = document.getElementById("ip_addr").value;
    // var init_serial_number = document.getElementById("serial_number").value;
    var total_number = document.getElementById("total_number").value;
    var output = document.getElementById("output");
    var print_qty = document.getElementById("print_qty").value;
    var Initals = document.getElementById("Initials").value;
    var todays_date = document.getElementById("todays_date").value;

    // FUTURE ADD - CHANGE TEXT SIZE BASED ON LENGTH
    //const customer_name_length = customer.length;
    //customer_name_length = 2;

    var init_serial_number;
    var sLabelPart1;
    var sLabelPart2;
    var sLabelPart3;
    var sLabelPart4;
    var sLabelPart5;
    var sLabelPart6;
    var sLabelPart7;
    var sLabelPart8;
    var sLabelPart9;
    var sGraphic;
    var sUncrating;
    var UI;

    sGraphic =
        "^IDR:SSGFX000.GRF~DGR:SSGFX000.GRF,12478,17,:Z64:eJzt2j9vHkUaAPDZ22JSWO9wHRKR5yIKWkpOZ2X5KHcV5ZmOkyLPIBdukCJqkPgiJ1gDguKKfIU1V1Bc4Y0omCh7+zA7z8zs8zzrxJhAsE2mSLw/+9359+zs/HmVKukvSqRBXDcSNAXoleoIGJiUcgQ6ANUAAQfgWwoAMBgC7QJWwNgR0AsAARPhCQULKT0HuquDQ+gl0Lo9jtczBR9vE2hll6KMBOal9L0ET2CKFSb3RJgkjBxYEyP01xFkI/+x4FW6qSk9gJr27UuCOJi+gusH12RAuS5wO5IO7LJVZuK/93bmoPYNA6MONIOdeqf1FPbU4dVhlDBcBo2A3QbanpfUaITct30ch7whMMRXudpn0MzqLgP1tgSl7khQNxJ60lQtm339urAXf/KXwOGtg9rqG9jl4K+wTP6vCCXdOOjVDU6lG14EXm6C6ZaCZwA4oFRooNcM4mLSMNCnQ5c+WcJSq8MHBOIzpw4Dg5362yig6yV4BnvKKgF3Jbx+LWCnDjjUIae02OXw83ru1sOLpL1rAjsJv2Ck29zj1ywpieQXB3VDoJfgadM0QHfyVNp25LFp2E6eUmInT6Utw5Rr3TN1KZM/1YVEziQuJOaayfLTupDQmIlW9w3LZF1I5EzWhYTDqu3UBwj5nuvkSueaVDBQZlt5IVEKXtcNTkJpv7KQqM21a/oEumx8mryQMKX99ElvWHPFhcSOZrJdSKjp1q4brgK/bTJyPmlkPG8iPqYjCfub+0rQG/AC2heDQYCWYAXk3fG1HPkAYi1pPm+odWlyv9Ta6gx1A8Dm935tMZdhXG+B0NdMRWd3EmQ4aAlWghMD23J4wk4PlkxZN3d8bEzFZEOhltBJAAHNz4PPBExWwCDBI+g5w6QQbKpys1QMwaVGaZbeQJjbEWFGaEYV8k37BO2Q5nALjAh96uwF5gQxWnas6BrjY62cyRFUYZfBUfClFzKksGwl4GcUWe/b3FEVUscEuiOQO3uF3LkrGAyYFVI+DGyJ0xJHrQS1ASvByHGs3QxsToKVoDdj4QY6CVrC5gBT/V3CdUzOp/9qm+o8sFSw5X1bwK2tnxZn9Z0d0/3ln4aMFWm11q7QjJhJHRvaodw8D2i6F2ByMeo8KWWSYCaZpBjMEAS0mFkJ9ZIJAcyEgM3NA73D6mImeLLq10wWMDgs5Bqlk1Vfq5ZAJ8iZ4EGqV2xx1l4MJb06SH2ZcOW9vv733kJ6lS5Ir4nrZhagZZdZufVpTwYOR63YP58aPneNvxenN8O7PF9z+i0He/yIrwk7/YiX7IF9yCFEoEVtxo5DO7gv2EfaHvhEXJ8Cf1eaY+BTNqNhdhT2DUxsqh5hZMvXAwtnHDr4ik4Mm9DBMQUdHGg6Z7Ojmxl0A0xmIAAKgum7WrtmauJkypsKbWjipM6Tifjw/gJNrb8+fQrL3uK7a+WfQt+RgtsTELB8X8YRuG8FPIhvHLZweRDfH4r2dSzXfIfCqDk0cVI40Y+0Qwfhz6RF2/6oCx8T0P1k2V9oH+xIwfhgHrcUYrhIcGcU9psRvnuTwWMJP3C42/wIX741U/gevqFwcO+cwzv3AL55L0GP8I8KGHeH7wN8/V7qe4y7w0OAjxiEBF6p/NyNK2BWwxThnyn2Ec5mVwBWOE8PQ4LmDBx8er48DA3Cf+OjESEs4AlMKr+o2wxzha8Q4gXOL9tvMyxvj5HCrPJuzEkGgGfBw4vg3+dwzuBzgO/jf24BYxB+gPzsFgiLUZg6OEGIgQ1fxHI1I5Z0PwMsIySDPkY4gzFPwCtAHnY2cEDBFyhJCZglTBKWXNUHBJSASQIGkFsBY+5ohXRPFdoKGKaj2oAr4FO8DLZjxYgAAjoObV9vkSetfbn+EUFX+F+GDwWYCv+R8AmCbQq8gdCVus1/FTBlOKrwLwHhCcKkU7jF5nqCdQkaHiU4DRkMPExwnCEOc58laAt0kBpk0gGbcHRTapBgAq5RRhsSDDZDUGfY4l1wqRtmXN5OygU883FpWnY+xPcFQpe6YYx/F3BFh72yzMcDbt6Y3Itx1LUpHNa+nxDWvp8MgpVQG3kqO7LPgTyE/r/0Q7uBWUADz4Cp3FXluFzBScgr2gq+GwVYLCp2QwIs2VzBCOjzfvMKGks2dyt4BkNeX6yQv8ZbIT5sqWSzXSEIcKkgUCCoLhXErZD3a0xp9rxGI4CjdIU5f1fA6Qq4wqtQZiTu5JngMxyLv+gKBAl9gQ9LrgVO+ScqDBV6lkeF9R1tcYxZp3R2cDTTCp5AB2xnDyFIINNEO1p2zwyeguG7hQnotNEGzTeFEwwEzAamlk9wEygGDT9r0bPiO88R2IQ3wcAA8nkyBU+hhbJ5UMHvS9iTwK6Xo/FLYbgEtptY8qs/F4Dch3eXg7zHBjZ7Z7wBLwQvwKrLYHM+cFfC5pjyzvPhJ3kQ1tc=:5FF8;^FO42,274^XGR:SSGFX000.GRF,1,1^FS";

    console.log("Print Label Function");
    switch (ip_addr) {
        case "192.168.17.94":
            sLabelPart1 = "^XA^LH0,0^FT200,69^CI0^A0N,30,40^FD";
            sLabelPart2 = "^FS^FB1200,1,,C,^CF0,100^FO250,0^A0B^FD";
            sLabelPart3 = "^FS^FB1200,1,,C,^FO400,0^A0B^FD";
            sLabelPart4 = "^FS^FB1200,2,,C,^FO550,0^A0B,55^FD";
            sLabelPart5 = "^FS^FB0300,1,,C,^FO675,0^A0B^FD";
            sLabelPart6 = "^FS^FB1750,1,,C,^FO675,0^A0B^FD";
            sLabelPart7 = "^FS^FB2200,1,,C,^FO050,0^A0B^FD";
            sLabelPart8 = "^FS^FB0250,1,,C,^FO050,0^A0B^FD";

            console.log("Service");
            break;
        case "192.168.17.96":
            sLabelPart1 = "^XA^LH0,0^FT200,69^CI0^A0N,30,40^FD";
            sLabelPart2 = "^FS^FB1200,1,,C,^CF0,100^FO250,0^A0B^FD";
            sLabelPart3 = "^FS^FB1200,1,,C,^FO400,0^A0B^FD";
            sLabelPart4 = "^FS^FB1200,2,,C,^FO550,0^A0B,55^FD";
            sLabelPart5 = "^FS^FB0300,1,,C,^FO675,0^A0B^FD";
            sLabelPart6 = "^FS^FB1750,1,,C,^FO675,0^A0B^FD";
            sLabelPart7 = "^FS^FB2200,1,,C,^FO050,0^A0B^FD";
            sLabelPart8 = "^FS^FB0250,1,,C,^FO050,0^A0B^FD";

            console.log("Service");
            break;
        default:
            console.log("No printer selected");
    }

    serial_number = init_serial_number;

    total_number = 1;

    for (let i = 0; i < total_number; i++) {
        var current = i + 1;

        var zpl =
            sLabelPart1 +
            sGraphic +
            sLabelPart2 +
            PartNumber +
            sLabelPart3 +
            SerialNumber +
            sLabelPart4 +
            ReportedIssue +
            sLabelPart5 +
            Initals +
            sLabelPart6 +
            todays_date +
            sLabelPart7 +
            "RMA" +
            sLabelPart8 +
            "RMA" +
            "^FS^PQ" +
            print_qty +
            ",0,1,Y^XZ";

        var url = "http://" + ip_addr + "/pstprnt";
        var method = "POST";
        var async = true;
        var request = new XMLHttpRequest();

        request.onload = function () {
            var status = request.status;
            var data = request.responseText;
            output.innerHTML = "Status: " + status + "<br>" + data;
        };

        request.open(method, url, async);

        request.send(zpl);

        var sn_int;
        sn_int = parseInt(serial_number, 10) + 1;
        serial_number = sn_int.toString();
    }
}
