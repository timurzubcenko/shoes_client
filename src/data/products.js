// import image1 from '../assets/img/image 5 (1).jpg'
// import image2 from '../assets/img/image 5 (2).jpg'
// import image3 from '../assets/img/image 5 (3).jpg'
// import image4 from '../assets/img/image 5 (4).jpg'
// import image5 from '../assets/img/image 5 (5).jpg'
// import image6 from '../assets/img/image 5 (6).jpg'
// import image7 from '../assets/img/image 5 (7).jpg'
// import image8 from '../assets/img/image 5 (8).jpg'
// import image9 from '../assets/img/image 5 (9).jpg'
// import image10 from '../assets/img/image 5 (10).jpg'

const products = [
    // {
    //     id: 1,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image1,
    //     price: '12 999 руб.',
    //     desc: 'Black on black! This AJ1 combines leather, suede and textiles in the upper for a tonal look with plenty of depth. Lightweight, responsive cushioning is perfect for exploring—see what kind of fun you can find.',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image2,
    //     price: '12 999 руб.',
    //     desc: 'Black on black! This AJ1 combines leather, suede and textiles in the upper for a tonal look with plenty of depth. Lightweight, responsive cushioning is perfect for exploring—see what kind of fun you can find.',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 3,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image3,
    //     price: '12 999 руб.',
    //     desc: 'Black on black! This AJ1 combines leather, suede and textiles in the upper for a tonal look with plenty of depth. Lightweight, responsive cushioning is perfect for exploring—see what kind of fun you can find.',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 4,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image4,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 5,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image5,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 6,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image6,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 7,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image7,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 8,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image8,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 9,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image9,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 10,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 11,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 12,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 13,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 14,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 15,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
    // {
    //     id: 16,
    //     title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     img: image10,
    //     price: '12 999 руб.',
    //     desc: '',
    //     discount: '',
    //     sizes: ['3.5Y', '4Y', '4.5Y', '5.Y', '5.5Y', '6Y', '6.5Y', '7Y'],
    //     imgs: [
    //         {
    //             id: 1,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/894eb4f9-f99b-4378-908f-528365462eef/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 2,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/78be4977-2e01-4150-af32-3478c481edd4/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 3,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/642585f4-7222-4220-8b41-37d364848652/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 4,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9b8753cb-f490-473f-82de-781d764c2bbb/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //         {
    //             id: 5,
    //             img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2849a3bf-da34-40d9-85b0-f82774e33db9/air-jordan-1-low-se-craft-big-kids-shoes-NJWNGh.png"
    //         },
    //     ]
    // },
]

export default products