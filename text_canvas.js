var table = document.querySelector('table');
var size;
var row, cell1, cell2;
var line, prev_line;

var i = 1;
var interval = setInterval(() => {
    console.log("line", i);
    if (i <= 11) {
        if (i > 1) {
            prev_line = document.getElementById("line" + (i - 1));
            prev_line.innerHTML = "<p>" + prev_line.textContent + "</p>";
        }
        switch (i) {
            case 1:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                break;
            case 2:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                size = table.rows.length;
                row = table.insertRow(size);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "n1";
                cell2.innerHTML = "-5";
                break;
            case 3:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                size = table.rows.length;
                row = table.insertRow(size);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "n2";
                cell2.innerHTML = "5";
                break;
            case 4:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                size = table.rows.length;
                row = table.insertRow(size);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "t";
                cell2.innerHTML = "1x11 double";
                break;
            case 5:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                size = table.rows.length;
                row = table.insertRow(size);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "a";
                cell2.innerHTML = "10";
                break;
            case 6:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                size = table.rows.length;
                row = table.insertRow(size);
                cell1 = row.insertCell(0);
                cell2 = row.insertCell(1);
                cell1.innerHTML = "y";
                cell2.innerHTML = "1x11 double";
                break;
            case 7:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                var x = 0;
                var i1 = setInterval(() => { at_exp(x); x++; }, 0.5);
                setTimeout(() => { clearInterval(i1); }, 4500);
                break;
            case 8:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                break;
            case 9:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                break;
            case 10:
                line = document.getElementById("line" + i);
                line.innerHTML = "<span class='highlight'>" + line.textContent + "</span>";
                break;
        }
    }
    i++;
}, 500);
setTimeout(() => { clearInterval(interval); }, 6000);