/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';

const PromoModal = ({ isOpen, onClose, onFormSubmit, idPhoto }) => {
  const [newPrice, setNewPrice] = useState(0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal de Promoção"
    >
      <h2>Adicionar Promoção</h2>
      {/* {<form onSubmit={onFormSubmit}>} */}
      <div>
        {/* Campos do formulário */}
        <input type="text" placeholder="Título da promoção" />
        <input type="number" placeholder="Novo preço" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
        <button type="submit" onClick={() => onFormSubmit(newPrice, idPhoto)}>Salvar</button>
        <footer className="footer"> &copy; 2024 FotoHub - Todos os direitos reservados</footer>
      </div>
    </Modal>
  );
};

export default PromoModal;