//
// let _click_time_array = [1000, 2000, 5000]
//
// document = {
//     addEventListener: function (a, b){
//         if(a === "click"){
//             for (let number of _click_time_array){
//                 setTimeout((function (){
//                 b({clientX: 100*number, clientY: 100*number})
//             }), number)
//             }
//
//         }
//     }
// }
//
// document.addEventListener('click', function(event) {
//     // 处理鼠标点击事件的代码
//     console.log(event.clientX)
// });

// [100, 200]  [200, 400]   [800, 1600]
// 1  2   3
_click_time = 1000
_click_x = 100
_click_y = 200
document = {
    addEventListener: function (a, b) {
        if (a === "click") {
            for (let i = 0; i < 3; i++) {
                setTimeout(function () {
                    return b({
                        clientX: _click_x *= 2,
                        clientY: _click_y *= 2,
                    })
                }, _click_time += 1000)
            }
        }
    }
}
// setTimeout(函数, 时间)

document.addEventListener("click", function (event) {
    console.log(event)
})