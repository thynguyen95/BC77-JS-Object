// mô hình MVC: Model - View - Controller
// MVVM: Model - view - view model
// design pattern

import Food from "../models/Food.js";
import FoodServices from "../services/FoodServices.js";
import { getEle } from "../ultil/ultil.js";

// global scope : những biến, hàm, object,..tái sử dụng ở nhiều nơi thì khai báo ở đây
const foodServices = new FoodServices();

// hiển thị món ăn lên giao diện
const renderTable = (arrFood) => {
    let contentTable = "";

    // duyệt mảng để lấy từng món(item) để hiển thị
    arrFood.map((food, index) => {
        console.log("food: ", food, index);

        const {
            id,
            tenMon,
            loai,
            gia,
            phanTram,
            tinhTrang,
            hinhAnh,
            moTa,
            giaKM,
        } = food;

        let trFood = `
            <tr>
                <th>${id}</th>
                <th>${tenMon}</th>
                <th>${loai === "loai1" ? "Chay" : "Mặn"}</th>
                <th>${gia}</th>
                <th>${phanTram}</th>
                <th>${giaKM}</th>
                <th>${tinhTrang === 0 ? "Hết" : "Còn"}</th>
                <th>
                    <button id="btnXem" type="button" class="btn btn-warning text-white" data-toggle="modal" data-target="#exampleModal" onclick="showDetail('${id}')">
                                Xem
                    </button>
                     <button id="btnXoa" type="button" class="btn btn-danger text-white" onclick="deleteFood('${id}')">
                                Xóa
                    </button>
                </th>
            </tr>
        `;

        contentTable += trFood;
    });

    console.log("contentTable", contentTable);
    // output: hiển thị lên giao diện
    getEle("#tbodyFood").innerHTML = contentTable;
};

// localStorage gần giống mảng đối tượng
// localStorage chứa kiểu JSON
const setLocalStorage = () => {
    // localStorage, JSON được JS cung cấp sẵn
    // để lưu xuống localStorage: convert data về dạng JSON
    // convert arrFood về kiểu JSON
    let data = JSON.stringify(foodServices.arrFood);

    // localStorage.setItem(key, value)
    localStorage.setItem("foodList", data);
};

// lấy data từ localStorage
// object lấy từ localStorage sẽ bị mất các key chứa method(function)
const getLocalStorage = () => {
    // khi lấy data từ localStorage lên sẽ là dạng JSON => phải parse về kiểu array
    // cách 1: dùng giaKM để lưu giá đã giảm
    let data = localStorage.getItem("foodList");
    console.log("data: ", data);

    // Falsy, Truthy
    if (data) {
        foodServices.arrFood = JSON.parse(data);

        renderTable(foodServices.arrFood);
    }

    // cách 2: gọi trực tiếp method tinhKM
    let data2 = localStorage.getItem("foodList");
    console.log("data: ", data2);

    // Falsy, Truthy
    if (data2) {
        foodServices.arrFood = JSON.parse(data2).map((food) => {
            // const {
            //     id,
            //     tenMon,
            //     loai,
            //     gia,
            //     phanTram,
            //     tinhTrang,
            //     hinhAnh,
            //     moTa,
            // } = food;

            return new Food(
                food.id,
                food.tenMon,
                food.loai,
                food.gia,
                food.phanTram,
                food.tinhTrang,
                food.hinhAnh,
                food.moTa
            );
        });

        renderTable(foodServices.arrFood);
    }
};
// khi vào trang thì load data từ localStorage
getLocalStorage();
/*
    Chức năng: thêm món mới 
    input: thông tin người dùng nhập trên form 
    progress:
        + lấy thông tin từ form về 
        + khởi tạo đối tương món mới(tạo 1 đối tượng Food)
*/
const addFood = () => {
    // B1: lấy thông tin từ form về
    let id = getEle("#foodID").value;
    let tenMon = getEle("#tenMon").value;
    let loai = getEle("#loai").value;
    let gia = getEle("#giaMon").value;
    let phanTram = getEle("#khuyenMai").value;
    let tinhTrang = getEle("#tinhTrang").value;
    let hinhAnh = getEle("#hinhMon").value;
    let moTa = getEle("#moTa").value;

    console.log("Thông tin từ form", {
        id,
        tenMon,
        loai,
        gia,
        phanTram,
        tinhTrang,
        hinhAnh,
        moTa,
    });

    // B2: tạo đối tượng món mới
    // tạo 1 instance(thể hiện) của đối tượng Food

    let newFood = new Food(
        id,
        tenMon,
        loai,
        gia,
        phanTram,
        tinhTrang,
        hinhAnh,
        moTa
    );
    newFood.tinhKM();

    console.log("newFood", newFood);

    foodServices.addNewFood(newFood);
    console.log("arrFood sau khi thêm món mới: ", foodServices.arrFood);

    renderTable(foodServices.arrFood);

    // đóng modal sau khi thêm thành công
    $("#exampleModal").modal("hide");

    // reset form sau khi thêm thành công
    getEle("#foodForm").reset();

    // thêm món ăn thành công => lưu xuống localStorage
    setLocalStorage();
};

window.addFood = addFood;

// xóa món ăn
const deleteFood = (id) => {
    console.log("id: ", id);
    foodServices.delFood(id);

    console.log("arrFood sau khi xóa món", foodServices.arrFood);

    setLocalStorage();
    renderTable(foodServices.arrFood);
};

window.deleteFood = deleteFood;

// hiển thị thông tin chi tiết lên form
const showDetail = (idDetail) => {
    let food = foodServices.getDetail(idDetail);
    console.log("food: ", food);

    const { id, tenMon, loai, gia, phanTram, tinhTrang, hinhAnh, moTa } = food;
    // hiển thị lên giao diện
    getEle("#foodID").value = id;
    getEle("#tenMon").value = tenMon;
    getEle("#loai").value = loai;
    getEle("#giaMon").value = gia;
    getEle("#khuyenMai").value = phanTram;
    getEle("#tinhTrang").value = tinhTrang;
    getEle("#hinhMon").value = hinhAnh;
    getEle("#moTa").value = moTa;

    // UX/UI disbale btn thêm và id
    getEle("#btnThemMon").disabled = true;
    getEle("#foodID").disabled = true;
};

window.showDetail = showDetail;

const updateFood = () => {
    // B1: lấy thông tin từ form về
    let id = getEle("#foodID").value;
    let tenMon = getEle("#tenMon").value;
    let loai = getEle("#loai").value;
    let gia = getEle("#giaMon").value;
    let phanTram = getEle("#khuyenMai").value;
    let tinhTrang = getEle("#tinhTrang").value;
    let hinhAnh = getEle("#hinhMon").value;
    let moTa = getEle("#moTa").value;

    console.log("Thông tin từ form", {
        id,
        tenMon,
        loai,
        gia,
        phanTram,
        tinhTrang,
        hinhAnh,
        moTa,
    });

    // B2: khởi tạo lại đối tượng Food
    let foodUpdate = new Food(
        id,
        tenMon,
        loai,
        gia,
        phanTram,
        tinhTrang,
        hinhAnh,
        moTa
    );
    foodUpdate.tinhKM();

    foodServices.updateFood(foodUpdate);

    // đóng modal sau khi thêm thành công
    $("#exampleModal").modal("hide");

    renderTable(foodServices.arrFood);
    setLocalStorage();

    // UX/UI sau khi update xong mở lại btn thêm và id
    getEle("#btnThemMon").disabled = false;
    getEle("#foodID").disabled = false;
};

window.updateFood = updateFood;
