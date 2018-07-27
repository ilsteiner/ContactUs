let count = 1;

var checkbox = document.querySelector("input[name=perm]");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        removeAddress();
    } else {
        addAddress();
    }
});

function removeAddress() {
    let newAddress = document.querySelector("#toAdd");

    while (newAddress.firstChild) {
        newAddress.removeChild(newAddress.firstChild);
    }
}

function addAddress() {
    let toggle = document.querySelector("#perm");

    if (toggle.checked == false) {
        let origAddress = document.querySelector("#address_0");

        let newAddress = origAddress.cloneNode(true);

        debugger;

        newAddress = incrementIDs(newAddress);

        newAddress = changeSecondaryAddress(newAddress);

        document.querySelector("#toAdd").appendChild(newAddress);
    }
}

function changeSecondaryAddress(newAddress) {
    newAddress.querySelector("legend").innerText = "Other Address";
    newAddress.querySelector(".form-check").remove();

    return newAddress;
}

function incrementIDs(ele) {

    ele.querySelector('input[id$="_' + count + '"]').id = count + 1;
    ele.querySelector('input[for$="_' + count + '"]').id = count + 1;
    ele.querySelector('input[name$="_' + count + '"]').id = count + 1;

    count++;

    return ele;
}