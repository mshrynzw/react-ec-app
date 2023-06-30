import React, {useCallback, useEffect, useState} from "react"
import {SelectBox, TextInput, PrimaryButton} from "../components/UIkit"
import {useDispatch} from "react-redux"
import {saveProduct} from "../reducks/products/operations"
import {db} from "../firebase"
import {ImageArea, SetSizeArea} from "../components/Products"

const ProductEdit = () => {
    const dispatch = useDispatch()

    let id = window.location.pathname.split('/product/edit')[1]
    if (id !== "") {
        id = id.split('/')[1]
    }

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])
    const [gender, setGender] = useState("")
    const [images, setImages] = useState([])
    const [price, setPrice] = useState("")
    const [sizes, setSizes] = useState([])

    const inputName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])
    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)
    }, [setDescription])
    const inputPrice = useCallback((event) => {
        setPrice(event.target.value)
    }, [setPrice])

    const genders = [
        {id: "all", name: "すべて"},
        {id: "male", name: "メンズ"},
        {id: "female", name: "レディース"}
    ]

    useEffect(() => {
        if (id !== "") {
            db.collection('products').doc(id).get()
                .then(snapshot => {
                    const product = snapshot.data()
                    setName(product.name)
                    setDescription(product.description)
                    setImages(product.images)
                    setCategory(product.category)
                    setGender(product.gender)
                    setPrice(product.price)
                    setSizes(product.sizes)
                })
        }
    }, [id])

    useEffect(() => {
        db.collection('categories')
            .orderBy('order', 'asc')
            .get()
            .then(snapshots => {
                const list = []
                snapshots.forEach(snapshot => {
                    const data = snapshot.data()
                    list.push({
                        id: data.id,
                        name: data.name
                    })
                })
                setCategories(list)
            })
    }, [])

    return (
        <section>
            <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
            <div className="c-section-container">
                <ImageArea images={images} setImages={setImages}/>
                <TextInput
                    fullWidth={true} label={"商品名"} multiline={false} required={true}
                    onChange={inputName} minRows={1} value={name} type={"text"}
                />
                <TextInput
                    fullWidth={true} label={"商品説明"} multiline={true} required={true}
                    onChange={inputDescription} minRows={5} value={description} type={"text"}
                />
                <SelectBox
                    label={"カテゴリー"} required={true} options={categories} select={setCategory} value={category}
                />
                <SelectBox
                    label={"性別"} required={true} options={genders} select={setGender} value={gender}
                />
                <TextInput
                    fullWidth={true} label={"価格"} multiline={false} required={true}
                    onChange={inputPrice} minRows={1} value={price} type={"number"}
                />
                <div className="module-spacer--small"/>
                <SetSizeArea sizes={sizes} setSizes={setSizes}/>
                <div className="module-spacer--small"/>
                <div className="u-text-center">
                    <PrimaryButton
                        label={"商品情報を保存"}
                        onClick={() => dispatch(saveProduct(id, name, description, category, images, gender, price, sizes))}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductEdit
