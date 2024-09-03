/* eslint-disable react/prop-types */

export default function GetPhoto() {
    return (
        <>
            <div>Photos</div>
            <Photo
                title="Yuji"
                url="https://ovicio.com.br/wp-content/uploads/2021/12/20211208-cropped-20211208-e273e9c0-66e2-48f9-aea1-e30872da8fdf.jpeg"
                price="12" />
            
            <Photo
                title="Yuji Itadori"
                url="https://ovicio.com.br/wp-content/uploads/2021/12/20211208-cropped-20211208-e273e9c0-66e2-48f9-aea1-e30872da8fdf.jpeg"
                price="12" />
        </>
    )
}

function Photo({ title, url, price }) {
    return (
        <card>
            <h1>{title}</h1>
            <img src={url} width={200} alt={title} />
            <p>R$ {price}</p>
        </card>
    )
}
