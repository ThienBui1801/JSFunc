'use strict';

// Book hotel

const btnReset = document.querySelector('#reset').addEventListener('click', function () {
  location.reload();
});

document.getElementById('book').onclick = function () {
  const dateIn = document.getElementById('date-in').value;
  const dateOut = document.getElementById('date-out').value;
  const roomOption = document.getElementById('option').value;
  const person = document.getElementById('people').value;
  const children = document.getElementById('children').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const nation = document.getElementById('nation').value;
  const note = document.getElementById('note').value;
  document.getElementById('information').innerHTML =
    `Chúc mừng quý khách đặt phòng thành công: <br />
  Ngày nhận phòng: ${dateIn} <br />
  Ngày trả phòng: ${dateOut} <br />
  Loại phòng: ${roomOption} <br />
  Người lớn: ${person} <br />
  Trẻ em: ${children} <br />
  Người đặt phòng: ${name} <br />
  Số điện thoại: ${phone} <br />
  Email: ${email} <br />
  Địa chỉ: ${address} <br />
  Quốc Tịch: ${nation} <br />
  Ghi chủ: ${note}`
}