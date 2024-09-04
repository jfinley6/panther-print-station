document.addEventListener("DOMContentLoaded", () => {
    getPrinterFromLocalStorage();
});

const savePrinterOption = (e) => {
    const selectedOption = e.target.value;

    localStorage.setItem("selectedOption", selectedOption);
};

const getPrinterFromLocalStorage = () => {
    const ipAddrInput = document.getElementById("ip_addr");
    const savedOption = localStorage.getItem("selectedOption") || "192.168.17.97";
    ipAddrInput.value = savedOption;
    document.body.classList.remove("display-none");
};

const resetForm = () => {
    document.getElementById("panther-form").reset();
    getPrinterFromLocalStorage();
};

const printlabel = () => {
    const ip_addr = document.getElementById("ip_addr").value;
    const partNumber = document.getElementById("part-number").value;
    const partDescription = document.getElementById("part-description").value;
    let quantity = document.getElementById("quantity").value;
    let startingQuantity = "1";
    const totalQuantity = quantity;

    var sLabelPart1;
    var sLabelPart2;
    var sLabelPart3;
    var sLabelPart4;

    console.log("Print Label Function");
    switch (ip_addr) {
        case "192.168.17.97":
            sLabelPart1 = "^XA^LH0,0^CF0,50";
            sLabelPart2 = `^FO0,50^A0N,80,80^FB609,,,C ^FD${partNumber}^FS`;
            sLabelPart3 = `^FO0,155^A0N,50,50^FB609,,,C ^FD${partDescription}^FS`;
            sLabelPart4 = `^FO0,225^A0N,50,50^FB609,,,C ^FD${
                Number(quantity) > 1 ? startingQuantity + " of " + totalQuantity : ""
            }^FS`;
            console.log("Shipping");
            break;
        case "192.168.17.96":
            sLabelPart1 = "^XA^LH0,0^CF0,50";
            sLabelPart2 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO220,0^A0B^FD`;
            sLabelPart3 = `^FS^FB800,2,,L,^CF0,${fontSize}^FO370,0^A0B^FD`;
            sLabelPart4 = `^FS^FB800,1,,L,^CF0,${fontSize}^FO520,0^A0B^FD`;
            console.log("Description");
            break;
        default:
            console.log("No printer selected");
    }

    for (let i = 0; i < totalQuantity; i++) {
        var zpl = sLabelPart1 + sLabelPart2 + sLabelPart3 + sLabelPart4 + "^FS^PQ" + "1" + ",0,1,Y^XZ";

        startingQuantity = parseInt(startingQuantity, 10) + 1;
        sLabelPart4 = `^FO0,225^A0N,50,50^FB609,,,C ^FD${
            Number(quantity) > 1 ? startingQuantity + " of " + totalQuantity : ""
        }^FS`;
        console.log(zpl);

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
    }
};
