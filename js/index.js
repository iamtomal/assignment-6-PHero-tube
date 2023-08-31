const handleCategory = async () => {
    
    const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    
    const categoryContainer = document.getElementById('category-container')
    const newData = (data.data);
    // console.log(newData);

    newData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML =`
        <button onclick = "handleCategoryId(${category.category_id})" class="bg-gray-300 hover:bg-red-500 px-4 py-2 rounded-md font-semibold hover:text-white">${category.category}</button>
        `
        categoryContainer.appendChild(div);
    });
};

const handleCategoryId = async(id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();

    const cardContainer = document.getElementById('card-container')
    const newData = (data.data);
    console.log(newData);

    newData.forEach((card) => {
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure><img src=${card?.thumbnail
            }/></figure>
            <div class="flex">
                <div>
                    <img src=${card?.authors[0].profile_picture}>
                </div>
                <div>
                    <p>${card?.title}</p>
                    <p>${card?.authors[0].profile_name}</p>
                    <p>${card?.others.views}</p>
                </div>
            </div>
        </div>
        `

        cardContainer.appendChild(div)
    }); 
};



handleCategory();