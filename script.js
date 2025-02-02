recapData={
    "August":[
        "images/PXL_20240820_065927644.jpg",
        "images/PXL_20240822_072604218.jpg",
        "images/PXL_20240822_072610613.jpg",
        "images/PXL_20240822_091930168.jpg",
        "images/PXL_20240822_102832057.jpg",
        "images/PXL_20240822_114143825.MP.jpg",
        "images/PXL_20240826_093800830.NIGHT.jpg",
        "images/PXL_20240826_121122480.jpg",
        "images/PXL_20240827_131554540.jpg",
        "images/PXL_20240827_131639389.jpg"
    ],
    "September":[
        "images/sep1.jpg",
        "images/sep2.jpg",
        "images/sep3.jpg",
        "images/sep4.jpg",
        "images/sep5.jpg",
        "images/sep6.jpg",
        "images/sep7.jpg",
        "images/sep8.jpg",
        "images/sep9.jpg",
        "images/sep10.jpg",

    ],
    "October":[
        "images/oct1.jpg",
        "images/oct2.jpg",
        "images/oct3.jpg",
        "images/oct4.jpg",
        "images/oct5.jpg",
        "images/oct6.jpg",
        "images/oct7.jpg",
        "images/oct8.jpg",
        "images/oct9.jpg",
        "images/oct10.jpg",
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    for (const [month, images] of Object.entries(recapData)) {
        const monthTitle = document.createElement("h3");
        monthTitle.textContent = `${month} Gallery`;
        container.appendChild(monthTitle);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-gallery");

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.onclick = () => openModal(img);
            imageContainer.appendChild(img);
        });

        container.appendChild(imageContainer);
    }
});

function openModal(imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-content");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}

  