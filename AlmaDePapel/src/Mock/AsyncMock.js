const products = [
        {
            id: 1,
            title: "Libreta tulipanes",
            price: 7600,
            description: "Libreta de tulipanes, hoja rallada",
            image: "/Assets/LibretaTulipan.jpg",
            stock: 2
        },
        {
            id: 2,
            title: "Libreta floral",
            price: 7600,
            description: "Libreta de tucan, hoja rallada",
            image: "/Assets/LibretaFloral.jpg",
            stock: 3
        },
        {
            id: 3,
            title: "Libreta Margaritas",
            price: 7600,
            description: "Libreta de margaritas, hoja rallada",
            image: "/Assets/LibretaMargaritas.jpg",
            stock: 7
        },
        {
            id: 4,
            title: "Cuaderno Hojas",
            price: 7600,
            description: "Cuaderno con tapa de hojas floral",
            image: "/AlmaDePapel/src/Assets/CuadernoHojas.jpg",
            stock: 5
        }
    ];
    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};
