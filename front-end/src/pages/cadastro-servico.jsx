import React, { useState } from 'react';

function ServiceManager() {
    const [services, setServices] = useState([]);
    const [purchases, setPurchases] = useState([]);

    const handleProductSubmit = (e) => {
        e.preventDefault();

        const product = {
            price: parseFloat(e.target.productPrice.value),
            promoPrice: e.target.productPromoPrice.value ? parseFloat(e.target.productPromoPrice.value) : null,
            type: e.target.productType.value,
            description: e.target.productDescription.value,
        };

        setServices([...services, product]);
        e.target.reset();
    };

    const handlePurchaseSubmit = (e) => {
        e.preventDefault();

        const purchase = {
            product: e.target.purchaseProduct.value,
            price: parseFloat(e.target.purchasePrice.value),
            date: e.target.purchaseDate.value,
        };

        setPurchases([...purchases, purchase]);
        e.target.reset();
    };

    return (
        <div className="container">
            <form id="productForm" onSubmit={handleProductSubmit}>
                <h2>Cadastro de Serviço</h2>
                <label htmlFor="productPrice">Preço Atual:</label>
                <input type="number" id="productPrice" name="productPrice" required />

                <label htmlFor="productPromoPrice">Preço em Promoção:</label>
                <input type="number" id="productPromoPrice" name="productPromoPrice" />

                <label htmlFor="productType">Tipo de Serviço:</label>
                <input type="text" id="productType" name="productType" required />

                <label htmlFor="productDescription">Descrição do Serviço:</label>
                <textarea id="productDescription" name="productDescription" required></textarea>

                <button type="submit">Cadastrar Serviços</button>
            </form>

            <form id="purchaseForm" onSubmit={handlePurchaseSubmit}>
                <h2>Contrato de Serviço</h2>
                <label htmlFor="purchaseProduct">Tipo de Serviço:</label>
                <input type="text" id="purchaseProduct" name="purchaseProduct" required />

                <label htmlFor="purchasePrice">Preço:</label>
                <input type="number" id="purchasePrice" name="purchasePrice" required />

                <label htmlFor="purchaseDate">Data do Serviço:</label>
                <input type="date" id="purchaseDate" name="purchaseDate" required />

                <button type="submit">Contratar Serviço</button>
            </form>

            <div id="output">
                <h3>Serviços Cadastrados</h3>
                {services.map((service, index) => (
                    <div key={index}>
                        <p><strong>Preço Atual:</strong> R$ {service.price.toFixed(2)}</p>
                        <p><strong>Preço em Promoção:</strong> R$ {service.promoPrice ? service.promoPrice.toFixed(2) : 'N/A'}</p>
                        <p><strong>Tipo de Serviço:</strong> {service.type}</p>
                        <p><strong>Descrição do Serviço:</strong> {service.description}</p>
                        <hr />
                    </div>
                ))}

                <h3>Serviços Contratados</h3>
                {purchases.map((purchase, index) => (
                    <div key={index}>
                        <p><strong>Tipo de Serviço:</strong> {purchase.product}</p>
                        <p><strong>Preço:</strong> R$ {purchase.price.toFixed(2)}</p>
                        <p><strong>Data do Serviço:</strong> {purchase.date}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServiceManager;
