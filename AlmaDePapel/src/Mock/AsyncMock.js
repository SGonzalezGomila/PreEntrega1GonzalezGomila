const product = [
    {
        id: 1,
        title: "Libreta tulipanes",
        price: 7600,
        desciption: 
        "Libreta de tulipanes, hoja rallada",
        image: "https://www.instagram.com/p/C4oZd1ROXiR/?img_index=2",
        stock: 2
    },
    {
        id: 2,
        title: "Libreta tucan",
        price: 7600,
        desciption: 
        "Libreta de tucan, hoja rallada",
        image: "https://www.instagram.com/p/C4oZd1ROXiR/?img_index=1",
        stock: 3
    },
    {
        id: 1,
        title: "Libreta Margaritas",
        price: 7600,
        desciption: 
        "Libreta de tulipanes, hoja rallada",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lematmarket.com%2Fcuadernos-y-libretas%2Flibretas-flores&psig=AOvVaw1wLYUsTd3MU_-CRAtZl3Lx&ust=1715037294887000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCNtPfR94UDFQAAAAAdAAAAABAE",
        stock: 2
    },
    {
        id: 1,
        title: "Libreta Dibu",
        price: 7600,
        desciption: 
        "Libreta del Dibu Martinez , hoja rallada",
        image: "https://www.instagram.com/p/CockzrDuLmu/?img_index=5",
        stock: 2
    }
    
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}