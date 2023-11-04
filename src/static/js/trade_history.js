$(document).ready(function() {
    console.log("x")
    $("#trade_history").css("background-color", "#222");

    var table = $('#tradeTable').DataTable();

    // var table = $('#tradeTable').DataTable({
    //     dom: 'Bfrtip',
    //     buttons: ['csvHtml5']
    // });
    
    var searchInput = $('#tradeTable_filter input');
    searchInput.on('input', function () {
        var inputValue = $(this).val();
        var filteredValue = inputValue.replace(/[^a-zA-Z]/g, '');

        $(this).val(filteredValue);
        table.search(filteredValue).draw();
    });
    
    // // Download CSV
    // const myButton = document.querySelector('.dt-button.buttons-csv.buttons-html5');
    // const clonedButton = myButton.cloneNode(true);
    
    // myButton.parentNode.replaceChild(clonedButton, myButton);
    
    // clonedButton.addEventListener('click', () => {
    //     const rows = table.rows({ search: 'applied' }).nodes();
    //     let csvString = 'S/N,Memo #,Department,Staff,Status\n';
    
    //     let sn = 1;
    //     rows.each(function (row, index) {
    //         if (row.style.display != "none")
    //         {
    //             const rowData = table.row(row).data();
    //             let memoCode = rowData[1];
    //             let department = rowData[2];
    //             let staff = rowData[3];
    //             let status = rowData[4];
    
    //             csvString += `${sn++},${memoCode},${department},${staff},${status}\n`;
    //         }
    //     });
    
    //     const blob = new Blob([csvString], { type: 'text/csv' });
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement('a');

    //     a.style.display = 'none';
    //     a.href = url;
    //     a.download = 'table_data.csv';
    //     document.body.appendChild(a);
    //     a.click();
    //     URL.revokeObjectURL(url);
    // });

});

