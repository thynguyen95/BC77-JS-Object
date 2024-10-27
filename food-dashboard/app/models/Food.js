export default class Food {
    // phương thức khởi tạo
    constructor(id, tenMon, loai, gia, phanTram, tinhTrang, hinhAnh, moTa) {
        this.id = id;
        this.tenMon = tenMon;
        this.loai = loai;
        this.gia = gia;
        this.phanTram = phanTram;
        this.tinhTrang = tinhTrang;
        this.hinhAnh = hinhAnh;
        this.moTa = moTa;
        this.giaKM = 0;
    }

    // method
    // cách 1
    tinhKM() {
        // giảm 10% => trả 90%
        // Cách 1:
        // tiền phải trả = giá gốc * (100% - 10 => 90 /100 => 0.9);

        // cách 2: giảm 10%
        //    số tiền giảm = giá gốc * 0.1
        //    số tiền phải trả = giá gốc - số tiền giảm
        this.giaKM = this.gia * ((100 - this.phanTram) / 100);
    }

    // cách 2
    tinhKM2() {
        // giảm 10% => trả 90%
        // Cách 1:
        // tiền phải trả = giá gốc * (100% - 10 => 90 /100 => 0.9);

        // cách 2: giảm 10%
        //    số tiền giảm = giá gốc * 0.1
        //    số tiền phải trả = giá gốc - số tiền giảm
        return this.gia * ((100 - this.phanTram) / 100);
    }
}

// const bunBo = new Food(1, "bún bò", "mặn", 10000, 10, 0, "url", "ngon");
// console.log("bunBo: ", bunBo);
// const giaKM = bunBo.tinhKM();
// console.log("giaKM: ", giaKM);

// Toán tử ba ngôi
// DOM: 0
// giaTriTrenForm === 0 ? 'Còn' : 'Hết'
