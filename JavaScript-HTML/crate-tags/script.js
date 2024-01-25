document.addEventListener("DOMContentLoaded", () => {
    getPrinterFromLocalStorage();

    for (let i = 1; i <= 2; i++) {
        document.getElementById(`add-option${i}`).addEventListener(
            "input",
            () => {
                if (document.getElementById(`additional-option-${i}-quantity`).value === "0") {
                    document.getElementById(`additional-option-${i}-quantity`).value = 1;
                }
            },
            { once: true }
        );
    }
});

const savePrinterOption = (e) => {
    const selectedOption = e.target.value;

    localStorage.setItem("selectedOption", selectedOption);
};

const getPrinterFromLocalStorage = () => {
    const ipAddrInput = document.getElementById("ip_addr");
    const savedOption = localStorage.getItem("selectedOption") || "192.168.17.94";

    ipAddrInput.value = savedOption;
}

const resetForm = () => {
    document.getElementById("panther-form").reset();
    getPrinterFromLocalStorage();
};

const generateOptionZPL = (options, zplObject) => {
    // ZPL Strings Variables (sLabelPart#) start at 9 for Options
    let optionNum = 9;
    let xCoordinate = 305;
    let zplString = `^FS^FB400,1,,L,^CF0,35^FO${xCoordinate},785^A0B^FD`;
    var additionalOptions1 = document.getElementById("additional-option");
    var additionalOptions2 = document.getElementById("additional-option2");
    let additionalOptionsArray = [additionalOptions1, additionalOptions2];

    for (let i = 0; i < options.length; i++) {
        if (options[i].getAttribute("data-text-option") === "true") {
            continue;
        }
        if (options[i].type === "number" && options[i].value > 0) {
            let optionQuantity = options[i].value;
            let optionName = options[i].name;

            zplObject[optionNum] = `${zplString}(x${optionQuantity}) ${optionName}`;
            xCoordinate += 50;
            zplString = `^FS^FB400,1,,L,^CF0,35^FO${xCoordinate},785^A0B^FD`;
            optionNum += 1;
        }
    }

    for (let i = 0; i < additionalOptionsArray.length; i++) {
        if (additionalOptionsArray[i].children[1].value.length > 0) {
            let optionQuantity = additionalOptionsArray[i].children[0].value;
            let optionName = additionalOptionsArray[i].children[1].value;

            zplObject[optionNum] = `${zplString}(x${optionQuantity}) ${optionName}`;
            xCoordinate += 50;
            zplString = `^FS^FB400,1,,L,^CF0,35^FO${xCoordinate},785^A0B^FD`;
            optionNum += 1;
        }
    }
};

const printlabel = () => {
    var customer = document.getElementById("customer").value;
    var end_user = document.getElementById("end_user").value;
    var order = document.getElementById("order").value;
    var ip_addr = document.getElementById("ip_addr").value;
    var total_number = document.getElementById("total_number").value;
    var serialNumber = document.getElementById("serial-number").value;
    var print_qty = document.getElementById("print_qty").value;
    var system_hand = document.getElementById("system_hand").value;
    var Uncrating_Instructions = document.getElementById("Uncrating_Instructions").checked;
    var options = document.getElementsByClassName("form-check-input");
    var zplObject = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "" };
    const fontSize = customer.length > 50 || end_user.length > 50 ? "50" : "60";

    generateOptionZPL(options, zplObject);

    var sLabelPart1;
    var sLabelPart2;
    var sLabelPart3;
    var sLabelPart4;
    var sLabelPart5;
    var sLabelPart6;
    var sLabelPart7 = "^FS^FB300,1,,L,^CF0,60^FO220,830^A0B^FDOptions";
    var sLabelPart8 = "^FS^FB300,1,,L,^FO225,830^A0B^FD______";
    var sLabelPart9 = "";
    var sLabelPart10 = "";
    var sLabelPart11 = "";
    var sLabelPart12 = "";
    var sLabelPart13 = "";
    var sLabelPart14 = "";
    var sLabelPart15 = "";
    var sLabelPart16 = "";
    var sLabelPart17 = "";
    var sLabelPart18 = "^FS^FB,2,,R,^CF0,50^FO220,830^A0B^FD^GB560,3,3,B";
    var sGraphic;
    var sUncrating;

    sGraphic =
        "^IDR:SSGFX000.GRF~DGR:SSGFX000.GRF,12478,17,:Z64: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:5FF8;^FO42,274^XGR:SSGFX000.GRF,1,1^FS";

    sUncrating =
        "^XA^LH0,0^LRN~DGR:SSGFX000.GRF,85544,74,:Z64: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:7D6B^FO127,61^XGR:SSGFX000.GRF,1,1^FS";

    console.log("Print Label Function");
    switch (ip_addr) {
        case "192.168.17.94":
            sLabelPart1 = "^XA^LH0,0^FT200,69^CI0^A0N,30,40^FD";
            sLabelPart2 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO220,0^A0B^FD`;
            sLabelPart3 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO370,0^A0B^FD`;
            sLabelPart4 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO520,0^A0B^FD`;
            sLabelPart5 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO620,0^A0B^FD`;
            sLabelPart6 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO720,0^A0B^FD`;
            console.log("Crating");
            break;
        case "192.168.17.96":
            sLabelPart1 = "^XA^LH0,0^FT200,69^CI0^A0N,30,40^FD";
            sLabelPart2 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO220,0^A0B^FD`;
            sLabelPart3 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO370,0^A0B^FD`;
            sLabelPart4 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO520,0^A0B^FD`;
            sLabelPart5 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO620,0^A0B^FD`;
            sLabelPart6 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO720,0^A0B^FD`;
            console.log("Shipping");
            break;
        default:
            console.log("No printer selected");
    }

    for (let i = 0; i < total_number; i++) {
        var zpl =
            sLabelPart1 +
            sGraphic +
            sLabelPart2 +
            customer +
            sLabelPart3 +
            end_user +
            sLabelPart4 +
            order +
            sLabelPart5 +
            system_hand +
            sLabelPart6 +
            serialNumber +
            sLabelPart7 +
            sLabelPart8 +
            sLabelPart9 +
            zplObject[9] +
            sLabelPart10 +
            zplObject[10] +
            sLabelPart11 +
            zplObject[11] +
            sLabelPart12 +
            zplObject[12] +
            sLabelPart13 +
            zplObject[13] +
            sLabelPart14 +
            zplObject[14] +
            sLabelPart15 +
            zplObject[15] +
            sLabelPart16 +
            zplObject[16] +
            sLabelPart17 +
            zplObject[17] +
            sLabelPart18 +
            "^FS^PQ" +
            print_qty +
            ",0,1,Y^XZ";

        navigator.clipboard.writeText(zpl);

        // var url = "http://" + ip_addr + "/pstprnt";
        // var method = "POST";
        // var async = true;
        // var request = new XMLHttpRequest();

        // request.onload = function () {
        //     var status = request.status;
        //     var data = request.responseText;
        //     output.innerHTML = "Status: " + status + "<br>" + data;
        // };

        // request.open(method, url, async);

        // request.send(zpl);
    }

    if (Uncrating_Instructions) {
        for (var i = 0; i < total_number; i++) {
            var zpl = sUncrating + "^FS^PQ" + print_qty / 2 + ",0,1,Y^XZ";

            var url = "http://" + ip_addr + "/pstprnt";
            var method = "POST";
            var async = true;
            var request = new XMLHttpRequest();

            // request.onload = function () {
            //   var status = request.status;
            //   var data = request.responseText;
            //   output.innerHTML = "Status: " + status + "<br>" + data;
            // };

            request.open(method, url, async);
            request.setRequestHeader("Content-Length", zpl.length);

            request.send(zpl);
        }
    }
};
