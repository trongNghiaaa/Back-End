const fs = require('fs');
const path = require('path');

//bài 1:
//  - Tạo một thư mục tên là api,  trong thư mục api tạo file tên là demo.js, nội dung của file demo.js như sau:
//         var test = 10;
//     - Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,
//yêu cầu: từ file sum.js hãy lấy giá trị của biến test trong file demo.js và nhân biến đấy với 2,
//rồi in ra kết quả nhân với 2 đó ở file sum.js

// Bài 2:
//  - Tạo một file demo.txt, có nội dung như sau: Chúc mừng bạn đã ghi file thành công.
// -  Tạo môt file test.txt
// - Hãy đọc file demo.txt và mình chuyển toàn bộ nội dung của file demo.txt, vào file newFile.txt,

// Lưu ý: Giá trị ghi vào file newFile.txt phải đợi kết quả của đọc file

//  var result = fs.readFileSync(path.join(__dirname, 'demo.txt'),'utf-8')
//  fs.writeFile(path.join(__dirname, 'newFile.txt'),result,'utf-8', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//  })

// Bài 3:  -  Tạo file tên là demo.js, nội dung của file demo.js như sau:
//         var number1= 10;
//         var number2 = 20;
//     - Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  yêu cầu: Trong file sum.js
//hãy lấy giá trị của biến number1 , number2 trong file demo.js và cộng number1+number2 , rồi in ra kết quả cộng 2 số đó ở file sum.js

// Bài 4
//   - Tạo một thư mục tên là api,  trong thư mục api Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  nội dung của file sum.js như sau:
// 	function add(number1,number2){
//       return number1+number2
// 	}
//     -  tạo file tên là demo.js cùng cấp với thư mục api
// yêu cầu: Trong file demo.js hãy truyền 2 giá trị number1 = 10,number2 = 20 vào function add của file sum.js sau đó in kết quả ở file demo.js, lưu ý khi truyền giá trị 2 tham số number1 và number2 phải thực hiện trong file demo.js, file sum.js không được thực hiện bất kì phép toán nào.

// Bài 5:
//      -    Tạo một thư mục tên là api,  trong thư mục api tạo file tên là demo.js, nội dung của file demo.js như sau:
//         var test = [1,3,5,6,10]
//     - Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  yêu cầu:
// a)	Trong file sum.js hãy lấy giá trị của biến test trong file demo.js và in ra độ dài của biến trong file đemo. (length)
// b)	Trongfile sum.js hãy lấy giá trị của biến test trong file demo.js và hãy tạo một mảng mới gấp đôi giá trị của mảng test trong file demo.js

// Bài 6:(nâng cao)
//   -    Tạo một thư mục tên là api,  trong thư mục api tạo file tên là demo.js
//    - Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  , nội dung của file sum.js như sau:
//         			var test = [1,3,5,6,10]
// a)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy in ra các giá trị lớn hơn 5 trong biến test (2 cách), hãy in ra kết quả ở file demo.js( for , filter )
// b)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy thêm 1 giá trị 7 vào biến test, hãy in ra kết quả ở file demo.js  (gợi ý push)
// c)	Trong file demo.js hãy lấy giá trị của biến test trong file sum.js, hãy kiểm tra xem trong biến test có số nào chia hết cho 2 không, hãy in ra kết quả ở file demo.js
// -	GỢI Ý: để ra ngoài 1 thư mục thì dùng : “ ../ ”

// Bài 7:
//     -    Tạo một thư mục tên là api,  trong thư mục api tạo file tên là demo.js, nội dung của file demo.js như sau: khai báo 1 object có tên là person có nội các thuộc tính sau: object này có tên là  Thái, có tuổi là 12,  người này 1 chiếc xe với tên hãng là BMW, giá tiền của chiếc xe đó là 30000 USD

// -	Tạo một file cùng cấp với thư mục api, file đó tên là sum.js,  yêu cầu: Trong file sum.js tạo 1 object có tên là person2 có nội các thuộc tính sau: object này có tên là  Thái, có tuổi là 12,  người này 1 chiếc xe với tên hãng là BMW, giá tiền của chiếc xe đó là 30000 USD. Hãy lấy giá trị của object trong file demo.js vào file sum.js. Hãy so sánh object lấy được trong file demo.js với object trong file sum.js .

// Bài 8:
// 	a, Tthư mục có file bất kỳ, hãy dùng fs để tạo ra bản sao của file đó
// 	b, Cho 1 file định dạng bất kỳ (ảnh, video,exel...) hãy dùng fs để tạo ra bản sao của file đó

// fs.copyFile('test.txt', 'copyTest', (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// Bài 9
// 	Cho Thư mục có 	folder A có file test.txt
// 				    folder B rỗng

// 	hãy copy file test.txt từ folderA sang folder B sau đó xóa file test.txt cũ trong folder A

// let testFile = path.join(__dirname, 'test.txt');
// let copy = '../API2/copyTest.txt';

// fs.copyFile(testFile, copy, (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// Bài 10 nâng cao:
// Tạo 1 file bằng fs.createWriteStream với dung lượng khoảng 100MB trở lên. Nội dung bên trong đánh số theo thứ tự từ 1 đến n "Xin chào nodemy".

const writeStream = fs.createWriteStream(path.join(__dirname, 'BigFile.txt'), 'utf-8');

function writeBigFile(i) {
    for (let i = 0; i < 102400*50; i++) {
        writeStream.write(`Xin chào nodemy ${i} \n`);
    }
}
writeBigFile(0);
