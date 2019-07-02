var encryptedNumber, url;

function get_links() 
{
    // Create Array from Text Area Input by separating values by comma
    var array_from_textArea = document.getElementById("account_input").value.split(',');
    document.getElementById("numberCount").innerHTML = "Number of items: "+array_from_textArea.length;

    // Iterate overeach item in above array
    array_from_textArea.forEach(encrypt);
}

function encrypt(accountNumber) 
{
    var request = new XMLHttpRequest();
        request.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                encryptedNumber = this.responseText;
                if (accountNumber.length < 10) {
                    url = "None";
                }
                else {
                    url = "http://www.hctax.net/Property/TaxStatement?account=" + encryptedNumber;
                }                

                table = document.getElementById("table");
                // create a new row
                    var newRow = table.insertRow(-1);
                // create a new cell and insert account number or blank
                        if (document.getElementById("accountyesno").checked == true)
                        {
                            newRow.insertCell(0).innerHTML = accountNumber;
                        }
                        else 
                        {
                            newRow.insertCell(0).innerHTML = "";
                        }
                // create a new cell and insert the url into it
                    newRow.insertCell(1).innerHTML = url;
        }
    }
        request.open('GET', 'http://www.hctax.net/Property/AccountEncrypt?account=' + accountNumber);
        request.send();
}

// function copy_cells()
// {
//     table = document.getElementById("table");

// }