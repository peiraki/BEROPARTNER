let menuIcon = document.querySelector('.dropDownMenu');
let menuI = document.querySelector('.menuLines');
let counter = 0;


function toggleMenu() {
    menuIcon.classList.toggle('displayNone')

    if (counter %2 == 0) {
        menuI.innerHTML = '';
        menuI.innerHTML += '<i class="fa-solid fa-xmark rem3" onclick="toggleMenu()"></i>';
        counter = 1;
    }else {
        menuI.innerHTML = '';
        menuI.innerHTML += '<i class="fa-solid fa-bars rem3" onclick="toggleMenu()"></i>';
        counter = 0;
    }
}





const promoCodesArray = ['PUCal', 'yvs1j', 'sELKY', 'Z5Ioo', '3x9Uv', 'C20Zs', 'jjh2K', '3AiTG', 'OipM3', 'hVq4j', 'YX95p', 'YzlcO', 'du4Ug', 'eBvwl', '9lEWm', 'I1f6i', 'MCdrb', 'VvFk6', 'wEgzw', 'lfEKB', 'jcJTc', '1U88h', 'IBI25', 'cWYau', 'ttRzl', 'PngGc', 'Py6Dz', 'KIqXJ', 'Osio0', 'Tmyoh', 'ctqSP', '1UlFp', 'sn4L1', '6aJrD', '5pLXT', 'azkWg', 'LqZJS', 'aYgOB', 'Wgfqc', '2JCzr', 'kbiws', 'MAmdl', '4KiSI', 'LCcG8', 'W25Bm', 'Eurg2', 'jqZZ5', 'womjK', 's0Z7L', 'xeW7M', '0VK44', 'NF18F', 'clR3W', 'vZtGO', 'Ps24C', 'asBCr', 'iFBxb', 'iVdRN', 'CwK9N', 'Sm6j7', '0qYu2', 'l2DGj', 'DzMg0', 'fdnVD', 'qgEoH', '8keHW', 'GZd9Z', 'h0luj', 'FQ58a', 'yo8Gl', 'g3S5O', 'j33pe', 'OLoad', 'SnIT6', 'i0LoH', '6YxKN', 'zP1QM', 'LIfV0', '7gbrf', 'qlKJI', 'BKEHT', 'ccnYR', 'ulOEO', 'Ry72W', 'CWEbB', 'd6cYs', 'QfLua', 'pkMYT', '7Ph54', 'Yte7e', 'fFLBr', '6deN4', 'eyUx8', '038pl', 'q9u2V', 'efPvS', 'UGxsS', 'G8sO2', 'xX6Pm', 'BqueF', 'I1pla', 'e30lz', '9HtmW', 'Hxq4T', 'PFjge', 'ZQveH', 'b2xXE', 'ZuRNy', '39QxJ', '86Z5h', 'ubbkv', 'T0iUo', 'iZnij', 'L4PNC', 'VApCJ', 'PDh6b', 'F3iU5', 'yS9qB', 'WuYbb', 'JS5j7']




// check promo code function
function checkPromoCode(){
    let inputValue = promoCode.value;

    if(inputValue) {
        if(promoCodesArray.includes(inputValue)){
            promoChekedText.innerHTML = ''
            promoChekedText.innerHTML = '<p class="redText">პრომო კოდი აქტიურია გამოსაყენებლად <i class="fa-solid fa-check"></i></p>'
        }
        else {
            promoChekedText.innerHTML = ''
            promoChekedText.innerHTML = '<p class="redText">ასეთი პრომო კოდი არ არსებობს <i class="fa-solid fa-circle-xmark"></i></p>'
        }

    }else {
        promoChekedText.innerHTML = ''
            promoChekedText.innerHTML = '<p class="redText">გთხოვთ ჩაწეროთ პრომო კოდი <i class="fa-solid fa-circle-xmark"></i></p>'
    }
}



