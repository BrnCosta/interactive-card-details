window.addEventListener('load', function () {
    var cardNumber = this.document.getElementById("card-number");
    var cardName = this.document.getElementById("card-name");
    var cardValid = this.document.getElementById("card-valid");
    var cardCvc = this.document.getElementById("card-cvc");

    var borderName = this.document.getElementById("name-border");
    var borderNumber = this.document.getElementById("number-border");
    var borderMonth = this.document.getElementById("month-border");
    var borderYear = this.document.getElementById("year-border");
    var borderCvc = this.document.getElementById("cvc-border");

    var inputName = this.document.getElementById("input-name");
    inputName.addEventListener('input', e => {
        var value = e.target.value
            .replace(/\d/g, "")
            .toUpperCase();
        cardName.textContent = value;
        e.target.value = value;

        this.document.getElementById("error-name").textContent = "";
        borderName.classList.remove("bg-red-400");
        borderName.classList.add("bg-gray");
    });

    var inputNumber = this.document.getElementById("input-number");
    inputNumber.addEventListener('input', e => {
        var value = e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d{1,4})/, "$1 $2")
            .replace(/( \d{4})\d+?$/, "$1");

        cardNumber.textContent = value;
        e.target.value = value;

        this.document.getElementById("error-number").textContent = "";
        borderNumber.classList.remove("bg-red-400");
        borderNumber.classList.add("bg-gray");
    });

    var inputMonth = this.document.getElementById("input-month");
    var inputYear = this.document.getElementById("input-year");

    inputMonth.addEventListener('input', e => {
        var month = e.target.value.replace(/\D/g, "");
        var year = inputYear.value === "" ? "00" : inputYear.value;

        cardValid.textContent = month + "/" + year;
        e.target.value = month;

        this.document.getElementById("error-valid").textContent = "";
        borderMonth.classList.remove("bg-red-400");
        borderMonth.classList.add("bg-gray");
    });

    inputYear.addEventListener('input', e => {
        var month = inputMonth.value === "" ? "00" : inputMonth.value;
        var year = e.target.value.replace(/\D/g, "");

        cardValid.textContent = month + "/" + year;
        e.target.value = year;

        this.document.getElementById("error-valid").textContent = "";
        borderYear.classList.remove("bg-red-400");
        borderYear.classList.add("bg-gray");
    });

    var inputCvc = this.document.getElementById("input-cvc");
    inputCvc.addEventListener('input', e => {
        var value = e.target.value.replace(/\D/g, "");

        cardCvc.textContent = value;
        e.target.value = value;

        this.document.getElementById("error-cvc").textContent = "";
        borderCvc.classList.remove("bg-red-400");
        borderCvc.classList.add("bg-gray");
    });

    var form = this.document.getElementById("form");
    var completed = this.document.getElementById("completed");

    var btnConfirm = this.document.getElementById("btn-confirm");
    btnConfirm.addEventListener('click', e => {
        e.preventDefault();
        var valid = false;

        if (inputName.value === "") {
            this.document.getElementById("error-name").textContent = "Can't be blank";
            borderName.classList.add("bg-red-400");
            borderName.classList.remove("bg-gray");

            return false;
        }

        if (inputNumber.value === "") {
            this.document.getElementById("error-number").textContent = "Can't be blank";
            borderNumber.classList.add("bg-red-400");
            borderNumber.classList.remove("bg-gray");

            return false;
        }
        else if (inputNumber.value.length < 16) {
            this.document.getElementById("error-number").textContent = "Invalid number";
            borderNumber.classList.add("bg-red-400");
            borderNumber.classList.remove("bg-gray");

            return false;
        }

        if (inputMonth.value === "") {
            this.document.getElementById("error-valid").textContent = "Can't be blank";
            borderMonth.classList.add("bg-red-400");
            borderMonth.classList.remove("bg-gray");

            return false;
        }
        else if (inputMonth.value.length < 2 || parseInt(inputMonth.value) > 12) {
            this.document.getElementById("error-valid").textContent = "Invalid number";
            borderMonth.classList.add("bg-red-400");
            borderMonth.classList.remove("bg-gray");

            return false;
        }
        else if (inputYear.value === "") {
            this.document.getElementById("error-valid").textContent = "Can't be blank";
            borderYear.classList.add("bg-red-400");
            borderYear.classList.remove("bg-gray");

            return false;
        }

        if (inputCvc.value === "") {
            this.document.getElementById("error-cvc").textContent = "Can't be blank";
            borderCvc.classList.add("bg-red-400");
            borderCvc.classList.remove("bg-gray");

            return false;
        }
        else if (inputCvc.value.length < 3) {
            this.document.getElementById("error-cvc").textContent = "Invalid number";
            borderCvc.classList.add("bg-red-400");
            borderCvc.classList.remove("bg-gray");

            return false;
        }

        form.classList.add("hidden");
        completed.classList.remove("hidden");
    });

    var btnContinue = this.document.getElementById("btn-continue");
    btnContinue.addEventListener('click', e => {
        e.preventDefault();

        form.classList.remove("hidden");
        completed.classList.add("hidden");
    });
});