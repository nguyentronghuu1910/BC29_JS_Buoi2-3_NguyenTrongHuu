// Bài tập 1:
/**
 * - Đầu vào :
 *   + lương 1 ngày làm : 100.000vnđ;
 *
 * - Xử lý :
 *   + Nhập số ngày làm ;
 *   + Lương nhân viên = lương 1 ngày * số ngày làm
 *
 * - Đầu ra :
 *   + Tiền lương nhân viên
 */
document.getElementById("btnclick").onclick = function () {
  var luongNgay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value;
  var luongNv = luongNgay * soNgayLam;
  // format vnđ
  var currentFormat = new Intl.NumberFormat("vn-VN");
  document.getElementById("footerNgaycong").innerHTML = "Tiền lương nhân viên nhận được là : " + currentFormat.format(luongNv) + " VNĐ " ;

};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
/**
 * - Đầu vào :
 *   + Nhập 5 số thực : (a, b, c, d, e) ;
 *
 * - Xử lý :
 *   + Tính trung bình của 5 số = (a + b + c + d + e) / 5 ;
 *
 * - Đầu ra :
 *   + giaTri_TB
 */

document.getElementById("btn_giatri").onclick = function (){
    var a = document.getElementById("a").value*1 ;
    var b = document.getElementById("b").value*1 ;
    var c = document.getElementById("c").value*1 ;
    var d = document.getElementById("d").value*1 ;
    var e = document.getElementById("e").value*1 ;

    var numberTB = 5 ;
    var numberTong = (a + b + c + d + e) ;

    var giaTri_TB = numberTong / numberTB ;
// console.log("Giá trị trung bình của 5 số là : " + giaTri_TB);
document.getElementById("footerGiatritb").innerHTML = "Giá trị trung bình của 5 số là : " + giaTri_TB ;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 3:
/**
 * - Đầu vào :
 *   + Giá USD sang VNĐ : 23.500vnđ ;
 *   + Nhập số tiền USD ;
 *
 * - Xử lý :
 *   + Quy đổi số tiền USD sang VNĐ = Giá USD * 23.500 ;
 *
 * - Đầu ra :
 *   + Giá quy đổi từ USD sang VNĐ ;
 */
document.getElementById("raTien").onclick = function (){

    var tienUsd = document.getElementById("tienUsd").value*1 ;
    var tienVnd = 23500;

    var raTien = tienUsd * tienVnd ;
    // format vnđ
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("footerUsd").innerHTML = "Số tiền quy đổi từ USD($) sang VNĐ là : " + currentFormat.format(raTien) + " VNĐ " ;
};


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 4:
/**
 * - Đầu vào :
 *   + Nhập vô số chiều dài ;
 *   + Nhập vô số chiều rộng ;
 *
 * - Xử lý :
 *   + Diện tích = chiều Dài * chiều Rộng ;
 *   + Chu vi = (chiều Dài + chiều Rộng) * 2 ;
 *
 * - Đầu ra :
 *   + Tính & xuất ra diện tích, chu vi của hình chữ nhật ;
 *
 */
document.getElementById("btnHcn").onclick = function (){
    var chieuDai = document.getElementById("chieuDai").value*1 ;
    var chieuRong = document.getElementById("chieuRong").value*1 ;
    // Tính chu vi, diện tích 
    var chuVi = (chieuDai + chieuRong) * 2 ;
    var dienTich = chieuDai * chieuRong ;

    var result ="";
    result +="<p>Chu vi là : " + chuVi + "</p>";
    result +="<p>Diện Tích là : " + dienTich + "</p>";
   
    document.getElementById("footerHcn").innerHTML = result ;
};


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 5:
/**
 * - Đầu vào :
 *   + Nhập 1 số có 2 chữ số bất kỳ ;
 *
 * - Xử lý :
 *   + tách hàng đơn vị và hàng chục cả số ;
 *   + lấy 2 số tách được cộng lại ;
 *
 * - Đầu ra :
 *   + Tính tổng của số vừa nhập ;
 */

document.getElementById("btnNumber").onclick = function (){
    var soNguyen = document.getElementById("soNguyen").value*1 ;
    var hangDv = soNguyen % 10 ;
    hangDv = parseInt(hangDv) ;

    var hangChuc = soNguyen / 10 ;
    hangChuc = parseInt(hangChuc) ;

    var tongsoNguyen = hangDv + hangChuc ;

    document.getElementById("footersoNguyen").innerHTML = " Tổng 2 chữ số là : " + tongsoNguyen ;
};


