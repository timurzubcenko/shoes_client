import React, { useState } from 'react'
import s from './NewProduct.module.scss'
import Input from '../../../components/Input/Input';
import Textarea from '../../../components/Textarea/Textarea';
import Select from 'react-select'
import axios from 'axios'
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL

const options = [
    { value: '3.5Y', label: '3.5Y' },
    { value: '4Y', label: '4Y' },
    { value: '4.5Y', label: '4.5Y' },
    { value: '5Y', label: '5Y' },
    { value: '5.5Y', label: '5.5Y' },
    { value: '6Y', label: '6Y' },
]

const isMulti = true

const NewProduct = () => {

    const [sizes, setSizes] = useState([])
    const [img, setImg] = useState(null)
    const [image, setImage] = useState(null)

    const [img1, setImg1] = useState(null)
    const [image1, setImage1] = useState(null)

    const [img2, setImg2] = useState(null)
    const [image2, setImage2] = useState(null)

    const [img3, setImg3] = useState(null)
    const [image3, setImage3] = useState(null)

    const [img4, setImg4] = useState(null)
    const [image4, setImage4] = useState(null)

    const [form, setForm] = useState({
        id: Date.now(),
        title: '',
        img: image,
        price: '',
        desc: '',
        sizes: [],
        img1: '',
        img2: '',
        img3: '',
        img4: '',
    })

    const changeHandler = async (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const getValue = () => {

        if (sizes) {
            return isMulti
                ? options.filter(option => sizes.indexOf(option.value) >= 0)
                : options.find(s => s.value === sizes)
        }
        else {
            return isMulti ? [] : ''
        }
    }

    const onChange = (newValue) => {
        setSizes(newValue.map((v) => v.value))
    }

    const aceptImg = async () => {
        const data = new FormData()

        data.append('image', img)

        await axios.post(API_URL + '/upload', data)
            .then((res) => {
                setImage(API_URL + res.data.url)
                console.log(res, image)
            })



        const data1 = new FormData()

        data1.append('image', img1)

        await axios.post(API_URL + '/upload', data1)
            .then((res) => {
                setImage1(API_URL + res.data.url)
                console.log(res, image1)
            })



        const data2 = new FormData()

        data2.append('image', img2)

        await axios.post(API_URL + '/upload', data2)
            .then((res) => {
                setImage2(API_URL + res.data.url)
                console.log(res, image2)
            })



        const data3 = new FormData()

        data3.append('image', img3)

        await axios.post(API_URL + '/upload', data3)
            .then((res) => {
                setImage3(API_URL + res.data.url)
                console.log(res, image3)
            })


        const data4 = new FormData()

        data4.append('image', img4)

        await axios.post(API_URL + '/upload', data4)
            .then((res) => {
                setImage4(API_URL + res.data.url)
                console.log(res, image4)
            })
    }

    const sendForm = async (e) => {
        setForm(form.sizes = sizes)
        try {
            await axios.post(API_URL + '/api/products/create', { ...form, img: image, img1: image1, img2: image2, img3: image3, img4: image4 })
                .then((res) => {
                    console.log(res, image)
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.newproduct}>
            <header>
                <h2>New Product</h2>
                <Link to="/admin/products"><button onClick={sendForm}>Save</button></Link>
            </header>
            <div className={s.wrapper}>
                <div className={s.form}>
                    <Input onChange={changeHandler} type="text" name='title' placeholder='title' />
                    <Input onChange={changeHandler} type="text" name='price' placeholder='price' />
                    <Input onChange={e => setImg(e.target.files[0])} type="file" name='img' placeholder='file' />

                    <Textarea onChange={changeHandler} name="desc" id="" cols="30" rows="10" placeholder="description" />
                    <Select onChange={onChange} options={options} value={getValue()} isMulti={isMulti} />
                    <Input onChange={e => setImg1(e.target.files[0])} type="file" name='img1' placeholder='file' />
                    <Input onChange={e => setImg2(e.target.files[0])} type="file" name='img2' placeholder='file' />
                    <Input onChange={e => setImg3(e.target.files[0])} type="file" name='img3' placeholder='file' />
                    <Input onChange={e => setImg4(e.target.files[0])} type="file" name='img4' placeholder='file' />
                    <button onClick={aceptImg}>Подтвердить изображение</button>
                </div>
            </div>
        </div>
    );
};
export default NewProduct