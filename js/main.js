/*
    todo Viết chương trình tính tiền lương nhân viên
    todo Lương 1 ngày: 100.000
    todo Cho người dùng nhập vào số ngày làm
*/

/**
 * ?Khối 1: Input
 * salaryDay(lương 1 ngày), workDuration(số ngày làm việc)
 *
 * ?Khối 2: Progress
 * *B1: Tạo biến salaryDay, workDuration
 * *B2: Gán giá trị cho biến
 * *B3: Lấy giá trị workDuration từ input của html
 * *workDuration = document.getElementById("ipDay").value
 * *B4: Lập công thức tính:
 * *salaryTotal = salaryDay * workDuration;
 * *B5: Thông báo kết quả ra màn hình
 *
 * ?Khối 3: Output
 * Số tiền lương của nhân viên
 */

/**
 * format day/days unit
 */
document.getElementById("ipDay").onfocusout = function () {
    if (Number(document.getElementById("ipDay").value) > 1) {
        document.getElementById("txtDay").innerHTML = "days";
    } else {
        document.getElementById("txtDay").innerHTML = "day";
    }
};

/**
 *
 * calculate salary due to work duration
 */
function calSalary() {
    //input
    var salaryDay = 100000;
    var workDuration = Number(document.getElementById("ipDay").value);

    //output
    var salaryTotal = 0;

    //progress
    salaryTotal = salaryDay * workDuration;

    //show result to screen
    document.getElementById("txtTotalSalary").innerHTML = salaryTotal;
}

document.getElementById("btnCalSalry").onclick = calSalary;

/* 
    todo Viết chương trình nhập vào 5 số thực
    todo Tính giá trị trung bình của 5 số thực này và xuất ra màn hình
*/

/**
 * ?Khối 1: Input
 * num_1, num_2, num_3, num_4, num_5
 *
 * ?Khối 2: Progress
 * *B1: Khai báo biến num_1 -> num_5
 * *B2: Gán giá trị cho biến
 * *B3: Lập công thức tính
 * *averageResult = (num_1 + num_2 + num_3 + num_4 + num_5)/5
 * *lấy 2 chữ số hàng thập phân: averageResult.toFixed(2)
 * *B4: Thông báo kết quả ra màn hình
 *
 *
 * ?Khối 3: Output
 * 1 2 3 4 5 => 3
 */

/**
 * calculate average of 5 numbers
 */
function calAverage() {
    //input
    var num_1 = Number(document.getElementById("ipNum1").value);
    var num_2 = Number(document.getElementById("ipNum2").value);
    var num_3 = Number(document.getElementById("ipNum3").value);
    var num_4 = Number(document.getElementById("ipNum4").value);
    var num_5 = Number(document.getElementById("ipNum5").value);

    //output
    var averageResult = 0;

    //progress
    averageResult = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

    //show result to screen
    document.getElementById("txtResult").innerHTML = averageResult.toFixed(2);
}

document.getElementById("btnCal").onclick = calAverage;

/*
    todo Giá USD hiện nay đang là 23.500 VND
    todo Viết chương trình quy đổi từ USD sang VND.
    todo Cho người dùng nhập vào số tiền USD.
    todo Tính và xuất ra số tiền sau quy đổi VND
*/
/**
 * ?Khối 1: Input
 * usdAmount(số tiền $)
 * EXCHANGE_RATE(tỉ lệ quy đổi từ $ sang VND)
 *
 * ?Khối 2: Progress
 * *B1: KHai báo biến
 * *B2: Gán giá trị cho biến
 * *B3: Lập công thức tính
 * vndAmount = EXCHANGE_RATE * usdAmount
 * Format lại giá trị tiền VND
 * vndAmount = new Intl.NumberFormat("vi-VN", {
 * currency: "VND",
 * style: "currency",
 * }).format(vndAmount);
 * *B4: Thông báo kết quả ra màn hình
 *
 * ?Khối 3: Output
 * 2$ => 47.000
 */

/**
 * convert $ to VND
 */
function convertCurrency() {
    //input
    const EXCHANGE_RATE = 23500;
    var usdAmount = Number(document.getElementById("ipUSD").value);

    //output
    var vndAmount = 0;

    //progress
    vndAmount = EXCHANGE_RATE * usdAmount;
    vndAmount = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(vndAmount);

    //show result to screen
    document.getElementById("txtVND").innerHTML = vndAmount;
}

document.getElementById("btnCurrencyConverter").onclick = convertCurrency;

/*
    todo Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN.
    todo Tính và xuất ra diện tích, chu vi của HCN đó.
*/
/**
 * ?Khối 1: Input
 * widthRectangle
 * lengthRectangle
 *
 * ?Khối 2: Progress
 * *B1: Khai báo biến widthRectangle, lengthRectangle
 * *B2: Gán giá trị cho biến
 * *B3: Lập công thức tính:
 * Chu vi HCN: perimeterRectangle = (widthRectangle + lengthRectangle) * 2
 * Diện tích HCN: areaRectangle = widthRectangle * lengthRectangle
 * *B4: Thông báo kết quả ra màn hình
 *
 * ?Khối 3: Output
 * width: 5
 * length: 15
 * chu vi: 40
 * diện tích: 75
 *
 */

function calRectAreaAndPeri() {
    //input
    var lengthRectangle = Number(document.getElementById("ipLength").value);
    var widthRectangle = Number(document.getElementById("ipWidth").value);

    //output
    var perimeterRectangle = 0;
    var areaRectangle = 0;

    //progress
    perimeterRectangle = (widthRectangle + lengthRectangle) * 2; //chu vi
    areaRectangle = widthRectangle * lengthRectangle; //diện tích

    //show result to screen
    document.getElementById("txtPerimeter").innerHTML = perimeterRectangle;
    document.getElementById("txtArea").innerHTML = areaRectangle;
}

document.getElementById("btnAreaPeri").onclick = calRectAreaAndPeri;

/*
    todo Viết chương trình nhập vào 1 số có 2 chữ số
    todo Tính tổng 2 ký số của số vừa nhập
*/

/**
 * ?Khối 1: Input
 * inputNum
 *
 * ?Khối 2: Progress
 * *B1: Khai báo biến inputNum
 * *B2: Gán giá trị của biến
 * *B3: Lập công thức tính
 * count = inputNum.toString().length => đếm số chữ số của số nhập vào
 * tạo vòng lặp với mỗi chữ số của số đó
 * while(count > 0){count--}
 * Ở mỗi vòng lặp:
 * resultNum += inputNum % 10
 * inputNum = Math.floor(inputNum / 10)
 * *B4: Thông báo kết quả ra màn hình
 *
 * ?Khối 3: Output
 * 24 => 2 + 4 = 6
 *
 */

/**
 * sum all charaters of inputed number
 */
function sumChar() {
    //input
    var inputNum = Number(document.getElementById("ipNumber").value);

    //output
    var resultNum = 0;

    //progress
    inputNum = Math.round(Math.abs(inputNum)); //format inputNum (round up and abs)
    var count = inputNum.toString().length;
    while (count > 0) {
        resultNum += inputNum % 10;
        inputNum = Math.floor(inputNum / 10); //xóa phần số thập phân sau dấu phẩy
        count--;
    }

    //show result to screen
    document.getElementById("txtSum").innerHTML = resultNum;
}

document.getElementById("btnSum").onclick = sumChar;