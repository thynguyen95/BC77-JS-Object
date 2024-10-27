// Nghiệp vụ của food: CRUD
// + thêm món ăn
// + xóa món ăn
// + xem chi tiết món ăn
// + cập nhật thông tin món ăn

export default class FoodServices {
    constructor() {
        this.arrFood = [];
    }

    // thêm món mới
    addNewFood(newFood) {
        // input: 1 đối tượng Food(object có được từ thông tin lấy ở form về)
        this.arrFood.push(newFood);
    }

    // xóa món ăn
    // input: id cần xóa
    delFood(id) {
        // find => return 1 object khi thỏa đk
        // findIndex =>return về index của item thỏa đk
        // tìm theo id
        let indexDel = this.arrFood.findIndex((food) => {
            return food.id === id;
        });
        console.log("indexDel-id", indexDel, id);

        // output: xóa món khỏi mảng dựa vào index vừa tìm được
        this.arrFood.splice(indexDel, 1);
    }

    // lấy thông tin chi tiết của món ăn
    // input: id của món ăn cần lấy thông tin
    getDetail(id) {
        let foodDetail = this.arrFood.find((food) => {
            return food.id === id;
        });

        return foodDetail;

        // cách 2
        // return this.arrFood.find((food) => {
        //     return food.id === id;
        // })
    }

    // cập nhật thông tin món ăn
    // input: nhận vào 1 object food với thông tin mới
    updateFood(food) {
        let indexUpdate = this.arrFood.findIndex((item) => {
            return item.id === food.id;
        });

        this.arrFood[indexUpdate] = food;
    }
}
