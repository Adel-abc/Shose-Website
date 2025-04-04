function setPic(pic_path)
{
    document.getElementById('imagebox').src = pic_path;
};

/* Likes */

document.addEventListener("DOMContentLoaded", function () {
const fivo = JSON.parse(localStorage.getItem('ArrayOfColors')) || [];
if(fivo != [])
{
    for(let i = 1;i <= 8; i++)
    {
        if(fivo[i] === 'red' || fivo[i] === 'black')
        {
            let id = 'cadr_heart_icon' + i;
            let iconlike = document.getElementById(id);
            if(iconlike)
                iconlike.style.color = fivo[i];
            let CID = i + 'card';
            let card = document.getElementById(CID);
            window.localStorage.setItem('likePro', card);
            if(window.location.href.includes('../HTML/products_fav.html'))
            {
                let pro = window.localStorage.getItem('likePro');
                if(pro)
                {
                    document.getElementById('favorites_container').innerHTML = pro;
                    window.localStorage.clear();
                }
            }
            window.location.href.includes('../HTML/index.html');
        }
    }
}
});

function heart_clicked(objname, cardID) {
    const icon_fav = document.getElementById(objname);
    const numOfCard = parseInt(cardID.replace('card', '')); 

    // console.log(icon_fav.style.color);
    // console.log(cardID);
    // console.log(numOfCard);

    if (icon_fav.style.color !== 'red') {
        let arrOfColorOfLikes = JSON.parse(localStorage.getItem('ArrayOfColors')) || [];
        arrOfColorOfLikes[numOfCard] = "red";
        icon_fav.style.color = 'red';
        window.localStorage.setItem('ArrayOfColors', JSON.stringify(arrOfColorOfLikes));
    } else {
        let arrOfColorOfLikes = JSON.parse(localStorage.getItem('ArrayOfColors')) || [];
        arrOfColorOfLikes[numOfCard] = "black";
        icon_fav.style.color = 'black';
        window.localStorage.setItem('ArrayOfColors', JSON.stringify(arrOfColorOfLikes));
    }
}

// إضافة Event Listener على الأيقونات بشكل جماعي
document.addEventListener('DOMContentLoaded', function()
{
    // استهداف كل الأيقونات
    const heartIcons = document.querySelectorAll('.fa-heart');
    
    heartIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            const iconID = event.target.id;  // الحصول على ID الأيقونة
            const cardID = event.target.closest('.card').id; // الحصول على ID البطاقة
            heart_clicked(iconID, cardID);
        });
    });
});

/* Add To Card */

function moveToCard(cardID) {
    const card = document.getElementById(cardID).outerHTML; 

    // الحصول على المصفوفة الموجودة في localStorage، وإذا كانت غير موجودة، نبدأ بمصفوفة فارغة
    let addedProducts = JSON.parse(localStorage.getItem('AddedToCard')) || [];
    
    // إضافة المنتج الحالي إلى المصفوفة
    addedProducts.push(card);
    
    // تخزين المصفوفة في localStorage
    window.localStorage.setItem('AddedToCard', JSON.stringify(addedProducts));

    // // الانتقال إلى صفحة addToCard.html
    // window.location.href = '../HTML/addToCard.html';
}


document.addEventListener("DOMContentLoaded", function() {
    const addedProducts = JSON.parse(window.localStorage.getItem('AddedToCard'));

    if (addedProducts && addedProducts.length > 0) {
        // عرض جميع المنتجات المخزنة في loc alStorage
        document.getElementById('Products').innerHTML = addedProducts.join('');
        for(let i = 0;i < addedProducts.length;i++)
        {
            console.log();
        }
    } else {
        // في حالة عدم وجود أي منتجات في الـ cart
        document.getElementById('favorites').innerHTML = "<p>No items in your card</p>";
    }
});

